'use client'
import React from "react"
import stl from "./mobileMenu.module.scss"
import Button from "@/components/UI/button/button";
import Link from "next/link";

const MobileMenu = () => {
    return (
        <main className={stl.main}>
            <nav className={stl.main__nav}>
            <ul className={stl.main__list}>
                <li className={stl.main__item}>
                    <Link className={stl.main__link} href="#">About us</Link>
                </li>
                <li className={stl.main__item}>
                    <Link className={stl.main__link} href="/services">Services</Link>
                </li>
                <li className={stl.main__item}>
                    <Link className={stl.main__link} href="/use-cases">Use Cases</Link>
                </li>
                <li className={stl.main__item}>
                    <Link className={stl.main__link} href="/pricing">Pricing</Link>
                </li>
                <li className={stl.main__item}>
                    <Link className={stl.main__link} href="/blog">Blog</Link>
                </li>
                    <Button type="submit" className={stl.button}>Request a quote</Button>
            </ul>
        </nav> 
        </main>     
    )} 
        
    


export default MobileMenu;