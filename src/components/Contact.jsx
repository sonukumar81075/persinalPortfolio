/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HeroSectionData, Socialicons } from "../DynamicData/HeroSection";
import { ContactData } from "../DynamicData/services ";
import { Link } from "react-router-dom";

const Contact = () => {
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

  const handleSubmit = (values) => {
    console.log("Form data submitted: ", values);
  };

  return (
    <>
      <div className="min-h-screen bg-[#212428] flex flex-col items-center justify-center px-6 md:pt-12  pb-24">
        <div className="max-w-7xl mx-auto pb-12 text-center ">
          <h3 className="text-yellow-500 text-sm font-semibold uppercase">
            {ContactData.title}
          </h3>
          <h2 className="text-4xl font-bold mt-2 text-white">{ContactData.Heading}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-7xl ">
          {/* Profile Card */}
          <div className="bg-[#24272b] p-6 rounded-xl border-l-[1px] border-yellow-500 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)] ">
            <img
              src={ContactData.imageUrl}
              alt="Profile"
              className="w-full h-52 object-cover rounded-xl transition-transform duration-300 "
            />

            <h3 className="text-xl font-bold text-white mt-4">
              {ContactData.username}
            </h3>
            <p className="text-gray-400">{ContactData.postname}</p>
            <p className="text-gray-400 mt-2">
             {ContactData.description}
            </p>
            <p className="text-white mt-4">
              {ContactData.phone}  
            </p>
            <p className="text-white">
            {ContactData.email}
            </p>

            <div className="py-6">
              <p className="text-gray-400 text-sm text-start mb-4">
                {HeroSectionData.facebookicon}
              </p>
              <div className="flex md:gap-6 gap-12">
                  {Socialicons.map((icon) => (
                    <Link
                      key={icon.id}
                      target="_blank"
                      to={icon.to}
                      className="bg-[#212428] border border-gray-800 text-white hover:text-yellow-500 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-4 rounded-lg transition-transform duration-300 transform hover:translate-y-[-3px]"
                    >
                      {icon.svg}
                    </Link>
                  ))}
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#24272b] md:col-span-2 p-6 rounded-xl border-l-[1px] border-yellow-500 shadow-[5px_6px_0px_0px_rgba(255,255,255,0.1)]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="grid md:grid-cols-2 gap-4 ">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-gray-400 mb-2 block"
                      >
                        {ContactData.labelname}
                      </label>
                      <Field
                        id="name"
                        type="text"
                        name="name"
                        className="w-full p-3 rounded bg-[#212428] text-white border-none focus:outline-none"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-yellow-500 text-sm mt-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-gray-400 mb-2 block"
                      >
                         {ContactData.labelnnumber}
                      </label>
                      <Field
                        id="phone"
                        type="text"
                        name="phone"
                        className="w-full p-3 rounded bg-[#212428] text-white border-none focus:outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-yellow-500 text-sm mt-2"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="email" className="text-gray-400 mb-2 block">
                    {ContactData.labelemail}
                    </label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      className="w-full p-3 rounded bg-[#212428] text-white border-none focus:outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-yellow-500 text-sm mt-2"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="subject"
                      className="text-gray-400 mb-2 block"
                    >
                     {ContactData.labelsubject}
                    </label>
                    <Field
                      id="subject"
                      type="text"
                      name="subject"
                      className="w-full p-3 rounded bg-[#212428] text-white border-none focus:outline-none"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-yellow-500 text-sm mt-2"
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="message"
                      className="text-gray-400 mb-2 block"
                    >
                       {ContactData.labelmessage}
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="w-full p-3 rounded bg-[#212428] text-white border-none focus:outline-none h-32"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-yellow-500 text-sm mt-2"
                    />
                  </div>

                  <button className="px-4 mt-6 py-3 border-r-2 border-l-2 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center  transition-transform duration-300 transform hover:translate-y-[-3px] border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-medium rounded-md">
                  {ContactData.submitbutton}
                    </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-[0.5px] items-center bg-[#212428] flex justify-center">
        <div className="h-[0.5px] bg-black w-7xl"></div>
      </div> */}
    </>
  );
};

export default Contact;
