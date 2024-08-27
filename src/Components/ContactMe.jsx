import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactMe() {
  const [data,setData] = useState({
    from_name:"",
    from_email:"",
    message:""
  })
  const [loader,setLoader] = useState(false);

  const serviceId = "service_bmt7ahi"
  const templateId = "template_ok9px3q"
  const publicKey = "OcKHvkzktsMKBc00g"

  const sendEmail = (e)=>{
    e.preventDefault();
    setLoader(true);
    const templateParams={
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
    }

    emailjs.send(serviceId,templateId, templateParams).then(
      (response) => {
        setLoader(false);
        toast.success('SUCCESS!', response.status, response.text);
      },
      (error) => {
        setLoader(false);
        toast.error('FAILED...', error);
      },
    );
  }

  useEffect(()=>{
    emailjs.init({publicKey: publicKey})
  },[])

  return (
    <div className="bg-black text-white py-15 w-full py-12" id="contactme">
      <div className="container mx-auto px-8">
        <h2 className="text-center font-bold text-4xl mb-8">Contact Me</h2>
        <div className="container flex flex-col justify-center items-center mt-12 gap-20 md:flex-row">
          <form onSubmit={sendEmail} className="flex flex-col gap-4 w-1/4">
            <label>Name</label>
            <input 
              type="text" 
              name="from_name" 
              value={data.from_name} 
              onChange={(e) => setData((prev) => ({ ...prev, from_name: e.target.value }))}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-gray-400" 
              required  
            />
            <label>Email</label>
            <input 
              type="email" 
              name="from_email" 
              value={data.from_email} 
              onChange={(e) => setData((prev) => ({ ...prev, from_email: e.target.value }))}
              className="p-2 bg-gray-800 text-white border border-gray-600 rounded" 
              required
            />
            <label>Message</label>
            <textarea 
              name="message" 
              value={data.message} 
              onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
              className="p-2 bg-gray-800 text-white border border-gray-600 rounded" 
              required
            />
            { loader ?
             "Sending..."
             :
            <input 
              type="submit" 
              value="Send" 
              className={`bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-4 py-2 mt-4 transform transition-transform duration-200 hover:scale-95 font-semibold}`} 
            />
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;