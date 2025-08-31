import React from "react";
import { experience } from "../data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-700 font-medium">{exp.org}</p>
              <p className="text-gray-600 mt-2">{exp.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
