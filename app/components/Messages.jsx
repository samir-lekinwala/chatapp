import React from 'react'
import { collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import Message from './Message'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect } from 'react'

const postConverter = {
  toFirestore(post) {
    return {
      author: post.author,
      title: post.title,
    }
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id, // include the document ID
    }
  },
}

function Messages({ scrollToBottom }) {
  const messagesRef = collection(db, 'messages').withConverter(postConverter)
  const q = query(messagesRef, orderBy('createdAt'))

  const [messages, loading, error] = useCollectionData(q)
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  if (loading) return <p>Loading messages...</p>
  if (error) return <p>Error loading messages: {error.message}</p>

  return (
    <div className="flex flex-col gap-3 justify-center w-full">
      {messages.map((message) => (
        <div key={message.id}>
          <Message message={message} />
        </div>
      ))}
    </div>
  )
}

export default Messages
