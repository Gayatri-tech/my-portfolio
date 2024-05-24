import styles from "../styles/About.module.css";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <div className="inline-block">
        <h2 className={`${styles.typingStyle} text-2xl md:text-4xl`}>
          Web Developer
        </h2>
      </div>
      <img
        src="/profile.jpeg"
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <p className="md:text-lg text-sm w-3/4 m-auto">
        Hi, I'm Gayatri Rawat, a versatile frontend web developer skilled in
        HTML, CSS, JavaScript, and React.js with popular frameworks like
        Bootstrap & Tailwind CSS. Currently preparing to expand expertise to
        full stack development, including Node.js, Express.js, and MongoDB.
      </p>
    </section>
  );
};

export default About;
