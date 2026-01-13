/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { HeroSectionData, Socialicons } from "../DynamicData/HeroSection";
import { ContactData } from "../DynamicData/services ";
import { Link } from "react-router-dom";

const Contact = () => {
  const [sentData, setSentData] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    setSubmitStatus(null);

    const formattedMessage = [
      "New contact form message",
      "-------------------------",
      `Name   : ${values.name}`,
      `Phone  : ${values.phone}`,
      `Email  : ${values.email}`,
      `Subject: ${values.subject}`,
      "",
      "Message:",
      values.message,
    ].join("\n");

    emailjs
      .send(
        "service_nhu1gtg",
        "template_yg2oi0j",
        {
          name: values.name,
          phone: values.phone,
          email: values.email,
          subject: values.subject,
          message: values.message,
          formattedMessage, // use this in your EmailJS template for nicer layout
        },
        "0Gqnxp7XnE9obTWe0"
      )
      .then(() => {
        setSentData(values);
        setSubmitStatus("success");
        resetForm();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setSubmitStatus("error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="section-shell flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 w-full container lg:px-12 items-start">

          {/* LEFT PROFILE CARD */}
          <div className="bg-[#24272b] p-6 rounded-xl border-l-[1px] border-yellow-500 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)]">
            <img
              src={ContactData.imageUrl}
              alt="Profile"
              className="w-full h-52 object-cover rounded-xl contact-hero-glow"
            />

            <h3 className="text-xl font-bold text-white mt-4">
              {ContactData.username}
            </h3>
            <p className="text-gray-400">{ContactData.postname}</p>
            <p className="text-gray-400 mt-2">{ContactData.description}</p>

            <p className="text-white mt-4">{ContactData.phone}</p>
            <p className="text-white">{ContactData.email}</p>

            <div className="py-6">
              <p className="text-gray-400 text-sm mb-4">
                {HeroSectionData.facebookicon}
              </p>

              <div className="flex gap-6">
                {Socialicons.map((icon) => (
                  <Link
                    key={icon.id}
                    to={icon.to}
                    target="_blank"
                    className="bg-[#212428] border border-gray-800 text-white hover:text-yellow-500 p-4 rounded-lg shadow transition-transform hover:-translate-y-1"
                  >
                    {icon.svg}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#24272b] md:col-span-2 p-6 rounded-xl border-l-[2px] border-yellow-500/40 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 block mb-2">
                        Your Name
                      </label>
                      <Field
                        name="name"
                        className="w-full p-3 rounded bg-[#212428] text-white"
                      />
                      <ErrorMessage name="name" component="div" className="text-yellow-500 text-sm mt-1" />
                    </div>

                    <div>
                      <label className="text-gray-400 block mb-2">
                        Phone
                      </label>
                      <Field
                        name="phone"
                        className="w-full p-3 rounded bg-[#212428] text-white"
                      />
                      <ErrorMessage name="phone" component="div" className="text-yellow-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-400 block mb-2">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full p-3 rounded bg-[#212428] text-white"
                    />
                    <ErrorMessage name="email" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-400 block mb-2">Subject</label>
                    <Field
                      name="subject"
                      className="w-full p-3 rounded bg-[#212428] text-white"
                    />
                    <ErrorMessage name="subject" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <div className="mt-4">
                    <label className="text-gray-400 block mb-2">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      className="w-full p-3 h-32 rounded bg-[#212428] text-white"
                    />
                    <ErrorMessage name="message" component="div" className="text-yellow-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 px-6 py-3 border border-yellow-500 text-white hover:bg-yellow-500 hover:text-black rounded-lg cursor-pointer shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center  transition-transform duration-300 transform hover:translate-y-[-3px] border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-medium rounded-md"
                  >
                    {isSubmitting ? "Sending..." : "Send Message →"}
                  </button>

                  {/* Submission status + preview card */}
                  {submitStatus === "success" && sentData && (
                    <div className="mt-6 rounded-xl border border-yellow-600/50 bg-gradient-to-br from-[#1f2a22] to-[#1a1f1d] shadow-[0_12px_30px_rgba(0,0,0,0.45)] p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-yellow-600 text-white text-sm font-semibold shadow-lg shadow-yellow-500/30">
                          ✓
                        </span>
                        <div>
                          <p className="text-white font-semibold">Message sent</p>
                          <p className="text-gray-400 text-sm">A copy was emailed to you.</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-200">
                        <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Name</p>
                          <p className="font-semibold text-white break-words">{sentData.name}</p>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Phone</p>
                          <p className="font-semibold text-white break-words">{sentData.phone}</p>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Email</p>
                          <p className="font-semibold text-white break-words">{sentData.email}</p>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Subject</p>
                          <p className="font-semibold text-white break-words">{sentData.subject}</p>
                        </div>
                        <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-lg p-3">
                          <p className="text-gray-400 text-xs uppercase tracking-wide">Message</p>
                          <p className="font-semibold text-white whitespace-pre-line break-words">
                            {sentData.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-6 bg-[#2d1f1f] border border-red-500/60 text-red-200 rounded-lg p-4 text-sm">
                      Failed to send message. Please try again in a moment.
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
