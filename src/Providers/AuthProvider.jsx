import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //   sign in context data providing function
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //   sign out
  const logOut = () => {
    return signOut(auth)
  }
  //  recording sign in out info
  // observe on state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    //this is the rules to use onAuthStateChanged
    // we have to return it on an arrow function
    return () => {
      unsubscribe()
    }
  }, [])
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
