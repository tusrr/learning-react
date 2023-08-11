import {  useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useContext } from "react";
import  { AppContext } from "../App";

export const Home= () =>{
    const {userName}= useContext(AppContext)
    const {data:catData,isLoading,isError,refetch}= useQuery(["cat"],()=>{
     return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
    })

    if(isError){
        return <h1>Error to find the cat fact</h1>
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }


    return (<h1>This is the Home page and user is {userName}
            <p style={{color:"Red"}}> Cat Fact :{catData?.fact}</p>
            <button onClick={refetch}>Update Data</button>
    </h1>)
} 