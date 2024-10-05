import React, { Fragment } from 'react'
import image1 from "../Assets/pexels-fauxels-3183197.jpg"
import "./about.css"

const About = () => {
  return (
    <Fragment>
         <center ><h1 className='heading'>About Us</h1></center> 
        <div className='aboutcontainer'>
        
        
        
        <div className='aboutbox'>
            <div className='left'>
                <img src={image1} alt="" />
            </div>
            <div className='right'>
                <h1>who we are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quaerat repudiandae, porro natus nihil
                     atque. Recusandae incidunt magnam natus nihil, assumenda, corporis itaque pariatur cumque eum, 
                     optio expedita ipsa vero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate iusto magnam maxime sapiente, eligendi quidem placeat vel quod ducimus nobis doloremque officia dolorem nemo ratione perferendis modi assumenda numquam!
                     Natus, ducimus quas quibusdam maxime architecto dolor saepe similique blanditiis repudiandae maiores delectus ipsum facilis quisquam libero harum eum iste nihil, nulla laudantium, autem sed. Qui pariatur repudiandae nam impedit.
                     Nisi nemo, est culpa labore iste facilis laboriosam alias dignissimos!
                      Alias expedita minima consequuntur ipsam iste eos doloremque non? Fugiat 
                      laudantium pariatur eaque temporibus voluptatibus earum nisi eveniet perspiciatis nobis
                     </p>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default About