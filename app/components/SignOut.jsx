import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
// import { auth } from '../firebaseConfig'

function SignOut() {
  const auth = getAuth()
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        console.log('sign out successful')
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error)
        // An error happened.
      })
  }

  return (
    <div>
      <button
        className="border bg-white rounded-lg px-2 hover:scale-105 transition-all hover:bg-slate-200"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  )
}

export default SignOut
