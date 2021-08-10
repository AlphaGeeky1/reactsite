import React from 'react'
import Styles from "./CSS/Home.module.css"
import {Link} from 'react-router-dom'
import pic1 from "./LA.jpg"
import pic2 from "./San Franscico.jpg"
import pic3 from "./London.jpg"
import fic1 from "./Library.jpg"
import fic2 from "./Sports.jpg"
import fic3 from "./Canteen.jpg"



const Home = () => {
    return (
        <>
        <div className={Styles.home}>
          <div className={Styles.hometext}>

              <h1>Welcome to Demo Academy</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit molestiae rerum ut? Voluptatem facere vitae aliquid quibusdam labore,  explicabo fugit dolores quas ad voluptatibus ab tempora libero  nulla veniam quasi laboriosam minima doloremque porro delectus iure, voluptas est. Blanditiis!</p>
              <div className={Styles.btn1}>
            <Link exact to="/about" className={Styles.btn}>Know more</Link>
            </div>
            
          </div>
            
        </div>

      <div className={Styles.parent_campus}>
        <div className={Styles.campus}>
            <h1>Our Global Campus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur earum, aut laboriosam a dolor numquam!</p>

            <div className={Styles.campus_row}>
              <div className={Styles.campus_col} >
                <img src={pic2} alt="" />
                <div className={Styles.layer} >
                  <h3>SAN FRANSCICO</h3>
                </div>
              </div>
              <div className={Styles.campus_col} >
              <img src={pic3} alt="" />
              <div className={Styles.layer} >
                  <h3>LONDON</h3>
                </div>

              </div>
              <div className={Styles.campus_col} >
              <img src={pic1} alt="" />
              <div className={Styles.layer} >
                  <h3>NEW YORK</h3>
                </div>

              </div>

            </div>
        </div>
        </div>

      
      <div className={Styles.facilities}>
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, at. Nostrum eum placeat obcaecati animi.</p>
      <div className={Styles.row}>
            <div className={Styles.columnf}>
              <img src={fic1} alt="" />
              <h3>Library</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid in natus ipsum illum. At minima nisi dolorem eius tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.</p>

            </div>
            <div className={Styles.columnf}>
            <img src={fic2} alt="" />
              <h3>Sports</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid in natus ipsum illum. At minima nisi dolorem eius tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.</p>

            </div>
            <div className={Styles.columnf}>
            <img src={fic3} alt="" />
              <h3>Canteen</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aliquid in natus ipsum illum. At minima nisi dolorem eius tempora? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illo.</p>

            </div>

      </div>

      </div>
       </>
    )
}

export default Home
