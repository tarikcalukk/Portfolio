import React from "react";
import { FaLinkedin, FaGithub, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const email = "tarik.caluk@gmail.com"; 
  const linkedinLink = "https://www.linkedin.com/in/tarik-caluk/"; 
  const githubLink = "https://github.com/tarikcalukk";
  const facebookLink = "https://www.facebook.com/tarik.caluk.5";

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
            href={`mailto:${email}?subject=Hello&body=I would like to connect with you`}
            className="group w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300"
          >
            <FaEnvelope className="w-12 h-12 group-hover:scale-110 transform transition-all" />
          </a>
        </div>

        <div className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-6">Send me a message</h2>
          <form
            action={`mailto:${email}`}
            method="post"
            encType="multipart/form-data"
            className="flex flex-col"
          >
            <label htmlFor="name" className="text-white mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mb-4 p-3 text-gray-800 rounded"
              required
            />

            <label htmlFor="message" className="text-white mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="mb-4 p-3 text-gray-800 rounded"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
