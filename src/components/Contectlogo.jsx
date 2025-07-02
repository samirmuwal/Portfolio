import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function ContactLogo() {   
 return(
<div className="fixed bottom-4 right-10 z-50 flex flex-row gap-4">
  <a
    href="https://instagram.com/mr.samir_muwal"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-pink-500 transition"
  >
    <FaInstagram />
  </a>

  <a
    href="https://github.com/samirmuwal"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-white transition"
  >
    <FaGithub />
  </a>
  <a
    href="https://linkedin.com/in/mohammad-samir-960225211"
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-300 hover:text-blue-500 transition">
      <FaLinkedin/>
    </a>
</div>


 );
}
export default ContactLogo;