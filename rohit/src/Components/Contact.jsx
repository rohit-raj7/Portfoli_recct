import React from 'react';
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
const phonePattern = /^[0-9]{10}$/; // 10-digit phone number



function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Validate Email
    const email = formData.get("Email");
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      setResult("");
      return;
    }

    // Validate Phone
    const phone = formData.get("Phone");
    if (!phonePattern.test(phone)) {
      toast.error("Please enter a valid phone number (10 digits).");
      setResult("");
      return;
    }

    try {
      formData.append('access_key', "d602e0c4-d3d9-4f64-a4d3-4aefd961d155");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("There was an error submitting the form.");
      setResult("");
    }
  };

  return (
    <motion.div

    initial={{ opacity:0 ,x:200  }}
      transition={{ duration:1 }}
      whileInView={{ opacity:1 ,x:0}}
      viewport={{once:true }}
    
    
    id="Contact" className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 font-light"> With Us</span>
      </h1>
      <form onSubmit={onSubmit} className="flex flex-wrap max-w-2xl mx-auto text-gray-600 pt-8 gap-4">
        <div className="w-full md:w-1/2 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="Name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="Email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="w-full md:w-1/2 text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Phone</label>
          <input
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="Phone"
            type="phone"
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="w-full text-left">
          <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded"
          type="submit"
        >
          {result ? result : "Submit"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;

