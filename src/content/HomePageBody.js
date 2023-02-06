import React from 'react'
import { UserPlusIcon, ArrowLeftOnRectangleIcon, BookOpenIcon, PhotoIcon } from '@heroicons/react/24/solid'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from "../firebase"
import { useNavigate } from 'react-router-dom';

function HomePageBody() {
  const navigate = useNavigate();

  function authenticate() {
    signInWithPopup(auth, provider).then(() => navigate("/gallery"))

 

  }

  return (
    <body className="h-screen bg-mid_darkblue ">
        <div className="text-white">
            The Cool Scriptie, eh
        </div>
        <div className="flex justify-center space-x-10">
            <button className="white-button"> <UserPlusIcon className="h-6"/> Join the Beta </button>
            <button className="white-button" onClick={ () => authenticate() }> <ArrowLeftOnRectangleIcon className="h-6"/> Sign In </button>
        </div>
        <div className="flex justify-center space-x-10 py-6">
            <button className="white-button"> <BookOpenIcon className="h-6"/> Getting Started </button>
            <button className="white-button"> <PhotoIcon className="h-6"/> Community Showcase </button>
        </div>




    </body>
  )
}

export default HomePageBody