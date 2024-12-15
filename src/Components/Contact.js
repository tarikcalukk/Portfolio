import React from "react";
import { FaLinkedin, FaGithub, FaFacebookF, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const email = "tarik.caluk@gmail.com"; 
  const linkedinLink = "https://www.linkedin.com/in/tarik-caluk/"; 
  const githubLink = "https://github.com/tarikcalukk";
  const facebookLink = "https://www.facebook.com/tarik.caluk.5";
  const instagramLink = "https://www.instagram.com/tarik.caluk/";

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Contact me
        </h1>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
          >
            <FaLinkedin className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-black transition-all duration-300"
          >
            <FaGithub className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>

          <a
            href={facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300"
          >
            <FaFacebookF className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>

          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-300"
          >
            <FaInstagram className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>

          <a
            href={`mailto:${email}?subject=Hello&body=I would like to connect with you`}
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
          >
            <FaEnvelope className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>
        </div>
        <div className="text-white font-bold text-2xl mb-8">
        <p>Don't hesitate to contact me:</p>
        <p className="mt-2 text-xl text-blue-400">{email}</p>
        </div>
      </div>
    </section>
  );
}
