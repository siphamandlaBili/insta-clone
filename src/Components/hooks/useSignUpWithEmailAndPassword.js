import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { useToast } from '@chakra-ui/react'

const useSignUpWithEmailAndPassword = () => {
    const toast = useToast()
    let [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        console.log(inputs)
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {

            toast({
                title: 'all fields mandotory',
                description: "please input all fiels",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top",
            })

            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) {
                toast({
                    description: "user not created",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                })
                return;
            }

            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    password: inputs.password,
                    username: inputs.username,
                    fullname: inputs.fullName,
                    bio: "",
                    profilePicUrl: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user", JSON.stringify(userDoc))
            }
        } catch (error) {
            console.log(error)
            toast({
                description: error.message,
                status: error.status,
                duration: 2000,
                isClosable: true,
                position: "top",
            })
        }
    }
    return { createUserWithEmailAndPassword, user, loading, error, signup }
}

export default useSignUpWithEmailAndPassword;