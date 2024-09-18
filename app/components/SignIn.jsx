import React from 'react'
import { auth } from '../firebaseConfig'
import { FirebaseError } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log('signin with popup', user)
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <div className="w-full bg-slate-600 h-full flex justify-center items-center">
      <button
        className="bg-white p-4 rounded-2xl hover:bg-slate-200 hover:scale-105 shadow-xl transition-all text-xl"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn
