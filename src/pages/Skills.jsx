const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>

      <div className="skill">
        <span>HTML</span>
        <div className="bar"><div style={{ width: "95%" }}></div></div>
      </div>

      <div className="skill">
        <span>CSS</span>
        <div className="bar"><div style={{ width: "90%" }}></div></div>
      </div>

      <div className="skill">
        <span>React</span>
        <div className="bar"><div style={{ width: "85%" }}></div></div>
      </div>
    </section>
  );
};

export default Skills;
