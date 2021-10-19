import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const ClearError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  // clear error
  useEffect(() => {
    ClearError();
  }, [error]);

  //google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //signInWithEmailAndPassword
  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setError(err.message));
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe;
  }, [user]);

  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };

  // signUp
  const signUpWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name and email
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  return {
    setUserName,
    signInWithGoogle,
    user,
    setUser,
    error,
    auth,
    setError,
    logOut,
    getEmail,
    getPassword,
    signUpWithEmail,
    signInWithEmail,
    getName,
  };
};

export default useFirebase;
