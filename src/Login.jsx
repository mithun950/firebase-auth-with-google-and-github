import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./Components/Firebase-init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";


const Login = () => {
      const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        console.log(result)
        setUser(result.user)
    })
   .catch(error => console.log(error))
}


const handleSignOut = () => {
    signOut(auth)
    console.log("Sign Out successfully")
    setUser(null)
}


// handle github sign in 
const handGithubWithSignIn = () => {
    signInWithPopup(auth, GithubProvider)
    .then((result) => {
        console.log(result)
        setUser(result)
    })
    .catch (error => console.log(error))
}

    return (
        <div>
           {
            user ? <button onClick={handleSignOut} className="bg-red-500 rounded-3xl px-5 py-2 ">Log Out</button>
            : <div>
                <button onClick={handleGoogleSignIn} className="bg-green-500 mt-7 mx-20 rounded-2xl px-6 py-2">Login with google</button>
                <button onClick={handGithubWithSignIn} className="bg-green-500 mt-7 ml-20 mx-20 rounded-2xl px-6 py-2">Login with Github</button>
            </div>

           }

           {
            user && <div>
                <h3>{user.displayName}</h3>
            </div>
           }
        </div>
    );
};

export default Login;