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
      <section className="flex flex-row justify-between px-2 sticky top-0 bg-slate-700 h-[3rem] items-center">
        <h1 className="text-xl text-white">ChatApp</h1>
        <SignOut />
      </section>
      <div className="w-full flex justify-center">
        <section className="w-full overflow-auto">
          <Messages scrollToBottom={scrollToBottom} />
        </section>
      </div>
      <div ref={dummy}> </div>
      <section className=" bottom-0 sticky">
        <EnterMessage scrollToBottom={scrollToBottom} />
      </section>
    </div>
  )
}

export default ChatRoom
