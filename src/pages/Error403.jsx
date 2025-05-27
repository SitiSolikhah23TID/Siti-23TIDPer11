import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function Error403(){
return(
    <ErrorPage 
        judul = "403" 
        ket = "FORBIDDEN"
        desc = "We are sorry, but you do have access to this page or resource." 
        gambar="/403.png"
    />
)
}