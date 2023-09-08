import React from 'react'

const contact = () => {
  return (
    <div id='contact'>
      <h1>If you have any questions please contact us</h1>
      <p>Fill fields and find approximate your repair</p>
      <form>
        <label>Name  </label><br/>
        <input type='text' placeholder='enter your name'/>
        <br/>
        <label>Email</label><br/>
        <input type='email' placeholder='enter your email address'/>
        <br/>
        <label>Tell us about you</label><br/>
        <textarea name="w3review" rows="4" cols="50">Tell us about you and the world</textarea>
        <br/>
        <button>Send</button>
      </form>
      <div id='addres'>
        <h3>Address</h3>
        <p>Head Office:<br/>
           Cabin no- 523, 5th floor<br/>
           Innovation & Incubation Centre,<br/>
           IIIT-Delhi, Delhi-110020</p>
       <h3>Phone</h3>
       <br/>
       <p>+91 9818447424</p>
       <h3>Write us</h3>
       <p>info@enord.co<br/>
          hr@enord.co</p>
      </div>
    </div>
  )
}

export default contact
