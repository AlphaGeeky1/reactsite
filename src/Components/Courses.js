import React from 'react'
import Styles from "./CSS/Courses.module.css"

const Courses = () => {
    return (
        <> 
          <div className={Styles.background}>
            <div className={Styles.text}><h1>Courses</h1></div>
          </div> 


          <div className={Styles.courses1}>
            <h1>Courses We Offered</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates est consequuntur <br /> possimus officia, in earum dignissimos libero rerum id. Nesciunt illo temporibus voluptatem in commodi?</p>
            <div className={Styles.row}>
              <div className={Styles.courses_column}>
                <h2>Basic</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus provident nam dolore autem? In quis possimus vitae modi quasi vel consequuntur distinctio repudiandae fuga dolorum enim, sed autem nam ea.</p>
              </div>
              <div className={Styles.courses_column}>
                <h2>Intermediate</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error voluptatibus neque adipisci magni porro explicabo recusandae eaque itaque fugit, odio, sint quisquam est natus deserunt distinctio nisi harum. Neque!</p>
              </div>
              <div className={Styles.courses_column}>
                <h2>Advance</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic voluptatibus eius debitis non aliquam aliquid qui error, incidunt voluptatem, minus laboriosam nobis fugiat repellendus perferendis labore culpa sed alias. Laborum?</p>
              </div>


            </div>
          </div> 

        </>
    )
}

export default Courses
