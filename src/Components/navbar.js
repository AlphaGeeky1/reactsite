import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./CSS/navbar.module.css"
import { useState } from 'react'
import {FaBars} from "react-icons/fa"
import { BsXSquare } from "react-icons/bs"


const Navbar = () => {
    const [state,setState] = useState(false);
    let handler1 = ()=>{
        setState(one=> one=true)
    };
    let handler2 =()=>{
        setState(one=> one=false)
    }


    return (<>
<div className={styles.header}>
    <div className={styles.navbar}>

        <div className={styles.logo}>Demo Academy </div>
        <div onClick={handler1}  className={styles.bars} ><FaBars size='1.5rem'/></div>

        <div  className={state?styles.parentBtn:styles.closeBtn}>

            <div onClick={handler2} className={styles.close}><BsXSquare size='1.8rem'/></div>
            <Link exact to="/" className={styles.btn} >Home</Link>
            <Link exact to="/about" className={styles.btn}>About</Link>
            <Link exact to="/courses" className={styles.btn}>Courses</Link>
            <Link exact to="/register" className={styles.btn}>Contact</Link>
        </div>
    </div>
</div>

        </>
    )
}

export default Navbar
