import React from 'react'
import Styles from "./CSS/About.module.css"
import pic1 from "./About copy.jpg"

const About = () => {
    return (
        <>
        <div className={Styles.about}>
        <div className={Styles.about_card}>
            <h1>About Us</h1>
        </div>
        </div>
        <div className={Styles.row_about}>
            <div className={Styles.col}>
                <h1>We are the World's Best Academy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iste ducimus, quibusdam reiciendis deserunt sunt qui nihil pariatur dolores nisi sapiente culpa necessitatibus beatae laboriosam praesentium? Optio quod, illum asperiores voluptatum consequatur aut consequuntur nostrum doloribus eaque accusamus vero perferendis placeat laudantium sed? Aut repudiandae voluptatum necessitatibus eius labore voluptatem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laudantium, nam accusantium odit doloribus ipsum corporis totam ullam, tenetur dolor libero accusamus </p>
            </div>
            <div className={Styles.col}>
                <img src={pic1} alt="" />
            </div>

        </div>
        
       
            
        </>
    )
}

export default About
