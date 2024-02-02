import React, { useState } from "react";
import eml from '../../assets/email.png'
import mobile from '../../assets/mobile.png'
import * as Unicons from '@iconscout/react-unicons';
import { UilEnvelopeShare, UilSelfie  } from '@iconscout/react-unicons'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const { email, message, subject, name } = formData;

  const handleChangeInput = (e) => {
    const { name: fieldName, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [fieldName]: value };
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    client.create(contact).then((data) => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <div id="contact" className="bg-secondary h-[650px]  ">
      <h3 className="text-center font-bold text-[40px] text-primary ">Contact</h3>
        <h1 className="text-[bold] p-text text-[36px] text-[white]  text-center">Take A Coffee & Chat With Me</h1>
      <div className="app__contact-cards">
        <div className="flex container-1 mx-auto w-[50%] mt-3 gap-[15px]">
        <div className="flex border-2 border-primary w-[50%] bg-main h-[62px] rounded-[10px] ">
        <div className="w-[15%] p-[6px]"><Unicons.UilEnvelopeShare color='#e0a747' size='45px' /></div>
        <div className="w-[85%]">  <p className="text-[white] text-[16px] p-[18px]">
            mminhajwahidm@gmail.com
          </p></div>
        </div>
        <div className="flex border-2 border-primary w-[50%] bg-main h-[62px] rounded-[10px] ">
        <div className="w-[15%] p-[6px]"><Unicons.UilSelfie color='#e0a747' size='45px' /></div>
        <div className="w-[85%]">  <p className="text-[white] text-[20px] p-[18px]">
            0316 1117686
          </p></div>
        </div>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="mt-[16px] w-[80%] mx-auto p-2 ">
          <div >
            <input 
              type="text"
              className=" w-[100%] mt-3 bg-main text-white placeholder-white p-3 rounded-[10px] h-[55px]"
              placeholder="Your Name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className=" w-[100%] mt-3 bg-main text-white placeholder-white p-3 rounded-[10px] h-[55px]"
              placeholder="Your Email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>
          <div className="app__flex">
            <input 
              type="text"
              className=" w-[100%] mt-3 bg-main text-white placeholder-white p-3 rounded-[10px] h-[55px]"
              placeholder="Subject"
              value={subject}
              onChange={handleChangeInput}
              name="subject"
            />
          </div>
          <div>
            <textarea
              className="w-[100%] mt-3 bg-main text-white placeholder-white p-3 rounded-[10px] h-[90px]"
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <div className="w-[30%] btn-container mt-[20px]  mx-auto ">
          <button
            type="button"
            className="h-[60px] w-[300px] btn border-2 border-primary text-white bg-main rounded-[10px]"
            onClick={handleSubmit}
          >
            {loading ? "Sending Message" : "Send Message"}
          </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in <span>Touch!</span>
          </h3>
        </div>
      )}
      </div>
    </>
  );
};

export default Contact