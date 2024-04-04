import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
        <form className="contact-form">
            <h2>Contact Us</h2>
            <label>Name:</label>
            <input type="text"/>
            <label>E-mail:</label>
            <input type="text"/>
            <label>message:</label>
            <input type="text" className="message"/>
            <button className="su-butn">Submit</button>

        </form>

    </div>
  )
}

export default Contact