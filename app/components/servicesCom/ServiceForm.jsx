"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ProjectForm({ selectedService, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); 
  // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        "service_00huznw", // ✅ service ID
        "template_tu91qap", // ✅ template ID
        {
          name: formData.name,
          email: formData.email,
          projectTitle: formData.projectTitle,
          message: formData.message,
          service: selectedService,
        },
        "Yt7duJ8PkQlj2j1w7" // ✅ public key
      )
      .then(
        () => {
          setStatus("success");
          setTimeout(() => {
            onClose();
          }, 1500); // auto-close after 1.5s
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="absolute  inset-0 dark:invert  -hue-rotate-180  bg-white/80 flex items-center justify-center  z-50">
      <div className="bg-white text-black max-w-lg   ring-1 ring-cyan-500/40 mx-10 hover:ring-cyan-400 rounded-lg p-10 lg:py-20 lg:px-12  py-14  gap-10 shadow absolute">
        <button
          onClick={onClose}
          className="absolute scale-125 top-3 right-3 text-teal-600 cursor-pointer hover:invert "
        >
          ✕
        </button>
        <h2 className="text-xl lg:text-3xl md:text-2xl text-teal-800 text-center font-bold mb-4">
          Service Picked : {selectedService} 
        </h2>

        <form className="space-y-4 items-center flex flex-col justify-center mx-auto w-full mt-10 " onSubmit={handleSubmit}>
    
          <input
            required
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange} className="outline-none w-full p-3 rounded border-none ring-1 hover:ring-teal-600 hover:text-teal-700 font-semibold ring-black/30  placeholder:text-black/60"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="outline-none w-full p-3 rounded border-none ring-1 hover:ring-teal-600 hover:text-teal-700 font-semibold  ring-black/30  placeholder:text-black/60"
          />
          <input
            required
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
             className="outline-none w-full p-3 rounded border-none ring-1 hover:ring-teal-600 hover:text-teal-700 font-semibold ring-black/30  placeholder:text-black/60"
          />
          <textarea
            required
            name="message"
            placeholder="Brief Detail / Summary "
            value={formData.message}
            onChange={handleChange}
            className="outline-none w-full p-3 rounded border-none ring-1 hover:ring-teal-600 hover:text-teal-700 font-semibold ring-black/30 h-32 placeholder:text-black/60"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full mx-auto font-semibold p-3 rounded text-white transition 
              ${status === "loading" ? "bg-teal-400 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600 "}`}
          >
            {status === "loading"
              ? "Submitting..."
              : status === "success"
              ? "Submitted! I Will Contact You Soon"
              : status === "error"
              ? "❌ Failed, Try Again"
              : "Submit Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
