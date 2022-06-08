import axios from "axios";
import { useState } from "react";



const Subscribe = () => {
    const [email, setEmail] = useState("")

    const sendEmail = () => {
        const newData = {
            email
        }
        axios.post("https://webhook.site/446d761a-297d-4da0-83b5-ffa2e1b30243", newData)
    }



  return (
    <section className="subscribe">
      <div className="subscribe__text">
        <h2>Be the first to acces it</h2>
        <p>Subscribe to receive updates and join our beta list.</p>
      </div>
      <div className="subscribe__input">
        <input type="text" placeholder="Enter your email" onChange={event => setEmail(event.target.value)} />
        <button className="button" onClick={() => sendEmail()}>SUBSCRIBE</button>
      </div>
    </section>
  );
};

export default Subscribe