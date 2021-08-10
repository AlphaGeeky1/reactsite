import React from 'react'
import Styles from "./CSS/Register.module.css"
import pic from "./London.jpg"
import pic1 from "./nyc.jpg"
import pic2 from "./San Franscico.jpg"
import { HiPhone,HiMail } from "react-icons/hi"
import { FaAddressBook } from "react-icons/fa"


const Register = () => {
    return (
        <>  <div className={Styles.contact1}>
            <div className={Styles.contact}>
                <h1>Contact</h1>
            </div>
            </div>
            <div className={Styles.title}>
                <h1>Our Branches</h1>
            </div>
            <div className={Styles.wrapper}>
            

                <div className={Styles.row}>
                    <div className={Styles.column}>
                    <div className={Styles.iimg}>
                        <img src={pic} alt="" />
                    </div>
                    <div className={Styles.data}>
                        <i><FaAddressBook size="24px" color="darkorange"/></i><span>ABC Street, XYZ Area, London</span><br />
                        <i><HiPhone size="24px" color="darkorange"/></i><span>+12 3453453450</span><br />
                        <i><HiMail size="24px" color="darkorange"/></i><span>abcxyz@gmail.com</span>

                    </div>

                    </div>
                    <div className={Styles.column}>
                    <div className={Styles.iimg}>
                        <img src={pic1} alt="" />
                    </div>
                    <div className={Styles.data}>
                         <i><FaAddressBook size="24px" color="darkorange"/></i><span>ABC Street, XYZ Area, New York</span><br />
                        <i><HiPhone size="24px" color="darkorange"/></i><span>+12 3453453450</span><br />
                        <i><HiMail size="24px" color="darkorange"/></i><span>abcxyz@gmail.com</span>

                    </div>
                    </div>
                    <div className={Styles.column}>
                    <div className={Styles.iimg}>
                        <img src={pic2} alt="" />
                    </div>
                    <div className={Styles.data}>
                    <i><FaAddressBook size="24px" color="darkorange"/></i><span>ABC Street, XYZ Area, San Franscico</span><br />
                        <i><HiPhone size="24px" color="darkorange"/></i><span>+12 3453453450</span><br />
                        <i><HiMail size="24px" color="darkorange"/></i><span>abcxyz@gmail.com</span>
                    </div>
                    </div>
                 </div>


           
                <div className={Styles.form} >
                    <div className={Styles.enquiry} ><h1>Enquiry</h1></div>
                       <form >
                           <input type="text" name="" id="" placeholder='Enter Your Name' required/>
                           <input type="email" placeholder='Enter Your E-mail' required/>
                           <input type="text" placeholder='Enter Your Subject' required />
                           <textarea name="" id=""  rows="8" placeholder="Message" required></textarea>
                           <button type="submit" className={Styles.btn}>Submit</button>
                       </form>
                </div>
            </div>
        </>
    )
}

export default Register
