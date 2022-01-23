import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p5w4zca",
        "template_pn1lq08",
        form.current,
        "user_OzhDKsMUgYeXMudUUciPi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
<<<<<<< HEAD:src/components/EmaiForm.jsx
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <input type="submit" value="Send" />
      </form>
=======
    <h3>Send analysis to your mail</h3>
    <form enctype="multipart/form-data" method="post" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Analysis</label>
      <input type="textarea" name="message" /> 
      <button type="submit" value="Send" >Submit </button>
    </form>
>>>>>>> a126505f8dc3bd690834d91c04df81ad5c2ab0ca:src/components/EmailForm.jsx
    </>
  );
};

export default Email;
