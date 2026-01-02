import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Services, ServicesData } from "../DynamicData/services ";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const showModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <div className="section-shell">
        <div className="container lg:px-12 mx-auto text-center">
          <h3 className="text-yellow-500 text-sm font-semibold uppercase">
            {ServicesData.title}
          </h3>
          <h2 className="text-4xl font-bold mt-2 mb-[10px]">{ServicesData.Heading}</h2>
        </div>
        <div className="p-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-12 mt-10 container lg:px-12 mx-auto ">
            {Services.map((service, index) => (
              <article
                key={index}
                onClick={() => showModal(service)}
                className="relative cursor-pointer bg-[#212428] p-8 rounded-lg
                       border-r-[1px] border-yellow-500
                       shadow-[0px_10px_4px_0px_rgba(255,255,255,0.1)]
                       transform transition-all duration-300 ease-in-out
                       hover:translate-y-2"
              >
                {/* Image */}
                <div className="mb-6">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={`Image for ${service.title}`}
                      className="w-full h-full object-cover rounded-t-lg
                             transform transition-all duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-32 bg-gray-700 rounded-t-lg"></div>
                  )}
                </div>

                {/* Featured & Price */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-yellow-500">{service.Featured}</h3>
                  <h3 className="flex items-center gap-2 text-gray-500">
                    <IoMdHeartEmpty />
                    <span className="text-sm">{service.price}</span>
                  </h3>
                </div>

                {/* Title */}
                <p
                  className="text-xl font-semibold hover:text-yellow-500
                          transform transition-all duration-300 ease-in-out"
                >
                  {service.title}
                </p>
              </article>
            ))}
          </div>

          {/* Modal */}
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            width={1200}
            footer={null}
            centered
          styles={{
            body: {
              backgroundColor: "#212428",
              padding: "2rem",
              borderRadius: "8px",
              margin: "-20px",
            },
            mask: {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
            closeIcon={
              <CloseOutlined style={{ color: "white", fontSize: "16px" }} />
            }
          >
            {selectedService && (
              <div className="flex bg-[#212428] flex-col md:flex-row gap-8 text-white">
                {/* Left Side: Image */}
                <div className="md:w-1/2">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>

                {/* Right Side: Content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <span className="text-gray-400 text-xs uppercase">
                    Featured:{" "}
                    <span className="text-yellow-500">
                      {selectedService.Featured}
                    </span>
                  </span>
                  <h2 className="text-2xl md:text-3xl  font-bold mt-4">
                    {selectedService.title}
                  </h2>
                  <p className="text-gray-300 mt-4 leading-7">
                    {selectedService.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">
                    <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-md">
                      Like This
                    </button>
                    <button className="px-4 py-2 border-r-2 border-l-2 shadow-[0_4px_6px_0px_rgba(255,255,255,0.1)] p-3 flex justify-center  transition-transform duration-300 transform hover:translate-y-[-3px] border-yellow-500 text-white hover:bg-yellow-500 hover:text-black font-medium rounded-md">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>

      {/* <div className="w-full h-[0.5px] items-center bg-[#212428] flex justify-center">
        <div className="h-[0.5px] bg-black w-7xl"></div>
      </div> */}
    </>
  );
};

export default Portfolio;
