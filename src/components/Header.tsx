import React from 'react'
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/icons/logo.svg"
import logoIcon from "../public/assets/icons/logo-icon.svg"
import {cn} from "@/lib/utils";

const Header = ({children, className}: HeaderProps) => {
    return (
        <div className={cn("header", className)}>
            <Link href={"/"} className={"md:flex-1"}>
            <Image src={logo} alt={"Logo with name"} width={120} height={32} className={"hidden md:block"}/>
            <Image src={logoIcon} alt={"Logo"} width={32} height={32} className={"mr-2 md:hidden"}/>
            </Link>
            {children}
        </div>
    )
}
export default Header
