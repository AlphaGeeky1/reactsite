import React from 'react'
import Styles from "./CSS/footer.module.css"

const Footer = () => {
    return (
        <>
            <div className= {Styles.footer}>
                <div className={Styles.row}>
                    <div className={Styles.col}>
                        <div className={Styles.alpha}>
                        <h3 className={Styles.demo}>Demo Academy</h3>
                        <p className={Styles.para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis blanditiis consequuntur, alias omnis, numquam distinctio laboriosam soluta itaque quod cum, vel adipisci ab explicabo aspernatur?
                        </p>
                       
                    </div>
                    </div>
                    <div className={Styles.col}>
                        <h4 className={Styles.office}>Office</h4>
                        <div className={Styles.para1}>
                        <p>ITPL Road</p>
                        <p>National Park,</p>
                        <p>NewYork, USA.</p>
                        <p className={Styles.email}>Email:xyz@gmail.com</p>
                        </div>
                    </div>
                    <div className={Styles.col}>
                        <h3 className={Styles.links}>Links</h3>
                        <ul className={Styles.items}>
                            <li>Home</li>
                            <li>About</li>
                            <li>Courses</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer
