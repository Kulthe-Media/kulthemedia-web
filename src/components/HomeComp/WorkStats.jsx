import React from "react";
import workenv from "../../assets/work-env.jpg";

const WorkStats = () => {
  const statsData = [
    {
      number: 15,
      label: "Years of Experience",
      description:
        "Our clients are companies, branches, and startups that keep the world going around. We make their visions come to life.",
    },
    {
      number: 116,
      label: "Enterprise Projects",
      description: "",
    },
    {
      number: "87+",
      label: "Happy Customers",
      description: "",
    },
    {
      number: "$114K+",
      label: "Saved by Clients",
      description: "",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center items-start py-12 lg:py-24 space-x-0 md:space-x-3">
        <div className="hidden lg:inline">
          <img
            src={workenv}
            alt="A work environment at Kulthe Media"
            className="max-w-2xl rounded-3xl shadow-xl"
          />
        </div>
        <div className="flex flex-col">
          {statsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#333] shadow-xl rounded-3xl p-6 mb-4"
            >
              <div className="flex space-x-4 justify-start items-center">
                <h1 className="text-3xl md:text-6xl font-bold">
                  {item.number}
                </h1>
                <p className="text-xl md:text-4xl font-medium capitalize max-w-sm">
                  {item.label}
                </p>
              </div>

              <p className="max-w-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkStats;
