import { auth } from '../../firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
const useLogout= ()=>{
    const [signOut, loading, error] = useSignOut(auth);
     
    const handleLogout = async ()=>{
     await signOut();
     console.log("user logged out")
     localStorage.removeItem("user")
    }

    return {handleLogout,loading,error};
}

export default useLogout;