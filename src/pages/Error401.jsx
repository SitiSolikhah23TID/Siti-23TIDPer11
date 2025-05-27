import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function Error401(){
return(
    <ErrorPage 
        judul = "401" 
        ket = "JANE SMITH"
        desc = "Access is allowed only for registered user" 
        gambar="/401.png"
    />
)
}