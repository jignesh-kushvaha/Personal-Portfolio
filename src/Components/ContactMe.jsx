import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs
      .sendForm('service_bmt7ahi', 'template_ok9px3q', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  }

  return (
    <div
      className="bg-black text-white py-15 w-full h-screen py-12"
      id="contactme"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-center font-bold text-4xl mb-8">Contact Me</h2>
        <div className="conyainer mx-32 flex flex-col justify-center items-center mt-24 gap-20 md:flex-row ">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
