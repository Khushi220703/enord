import React from 'react'
import img2 from './enordimg.jpg'
import img3 from './memo1.jpg'
import img4 from './memo2.jpg'
import img5 from './memo3.jpg'
import img6 from './memo4.jpg'

const about = () => {
  return (
    <div  id='about'>
    <div id='about-head'>
     <h2 id='about-h2'>WE HAVE BEEN DOING R&D SINCE 2020.</h2>
     <h5 id='about-h5'>Founded in 2021, Enord is INDIA's first AI on edge drone tech startup.</h5>
     </div>

     <dl id='about-dl'>
        <dt>Our vision</dt>
        <dd>To Create Ease in the Drone industry<br/>through AI-Based Autonomy.</dd>
        <dt>Our Mission</dt>
        <dd>To lead Drone Industry using Autonomy & AI by 2025.</dd>
        <dt>Our goals</dt>
        <dd>Enable flight in GPS denied environment
Reduce dependency of <br/>set of human resources in Operations
On Edge data processing</dd>
     </dl>
     <div id='memories'>
     <h3>Our memories</h3>
     <img src = {img2}  id='img2'/>
     <img src = {img3}  id='img3'/>
     <img src = {img4}  id='img4'/>
     <img src = {img5}  id='img5'/>
     </div>
    </div>
  )
}

export default about
