import React from 'react'
import Image from "next/image";
import loader  from "../public/assets/icons/loader.svg";

const Loader = () => {
    return (
        <div className={"loader"}>
            <Image src={loader} alt="loader" width={"32"} height={"32"} className={"animate-spin"}/>
            <p>Loading...</p>
        </div>
    )
}
export default Loader
