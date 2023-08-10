import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react";
import { AppContext } from "../App";
export const Profile= () =>{

    const {userName,setUserName}= useContext(AppContext)

    return <div> 
        <h1> PROFILE PAGE and user is {userName} 
        <ChangeProfile setUserName={setUserName}/>
         </h1>
        </div>
}