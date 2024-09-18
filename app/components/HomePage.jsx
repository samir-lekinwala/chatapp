import React from 'react'
import SignIn from './SignIn'

function HomePage() {
  return (
    <div className="">
      <section className="sticky top-0 flex flex-row justify-between px-2 w-full bg-slate-700 h-[3rem] items-center">
        <h1 className="text-xl text-white">ChatApp</h1>
      </section>
      <section className="h-[calc(100vh-48px)] w-full flex flex-col justify-center items-center">
        <div className="">Sign in to start using ChatApp</div>
        <SignIn />
      </section>
    </div>
  )
}

export default HomePage
