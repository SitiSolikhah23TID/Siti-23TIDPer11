import React from "react";
import ErrorPage from "../components/ErrorPage";

export default function NotFound(){
return(
    <ErrorPage 
        judul = "404" 
        ket = "CHARLIE DAVIS"
        desc = "Access is allowed only for registered user" 
        gambar="/404.png"
    />
)
}
