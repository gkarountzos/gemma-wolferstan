import React from "react";

const aboutText: string[] = ["Hungry cats"];

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#FEF8EE] mb-4 pt-2">About Me</h2>
      {aboutText.map((paragraph, index) => (
        <p
          key={index}
          className={`text-lg ${index > 0 ? "pt-2" : ""} text-[#FEF8EE]`}
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default About;
