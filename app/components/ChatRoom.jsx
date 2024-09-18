import React, { useRef } from 'react'
import SignOut from './SignOut'
import Messages from './Messages'
import EnterMessage from './EnterMessage'
// import { useCollectionData } from 'react-firebase-hooks'

function ChatRoom() {
  const dummy = useRef()

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-slate-600 absolute">
      <SignOut />
      ChatRoom
      <section className="w-full overflow-auto">
        <Messages scrollToBottom={scrollToBottom} />
      </section>
      <div ref={dummy}> </div>
      <section className="bottom-0 sticky">
        <EnterMessage scrollToBottom={scrollToBottom} />
      </section>
    </div>
  )
}

export default ChatRoom
