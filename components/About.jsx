import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Web Developer</h2>
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-36 h-36 rounded-full mx-auto mb-4"
      />
      <p className="text-lg">
        Hi, I'm Gayatri Rawat, a web developer specialized in building amazing
        web applications.
      </p>
    </section>
  );
};

export default About;
