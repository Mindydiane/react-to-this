import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_an2rd05', 'template_ru45go8', form.current, 'user_lFG7BtvDbkmlVQBhLwWs3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="Contact" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <form ref={form} onSubmit={sendEmail}>
        <label className="block mt-1 text-lg leading-tight font-medium text-black">Contact Form</label>
          <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name</label>
          <input type="text" name="user_name" />
          <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Email</label>
          <input type="email" name="user_email" />
          <div>
            <label className="block mt-1 text-lg leading-tight font-medium text-black ">Message</label>
            <textarea className="block mt-1 text-lg leading-tight font-medium text-black" name="message" />
            <input className="uppercase tracking-wide text-sm text-indigo-500 font-semibold" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;