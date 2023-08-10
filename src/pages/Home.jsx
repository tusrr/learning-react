import { useContext } from "react";
import App, { AppContext } from "../App";
export const Home= () =>{
    const {userName}= useContext(AppContext)
    return <h1>This is the Home page and user is {userName}</h1>
} 