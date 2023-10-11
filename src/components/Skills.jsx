import { useEffect, useState } from "react";
const Skills = () => {
  // State variables to store the percentage values for each skill
  const [htmlPercentage, setHtmlPercentage] = useState(0);
  const [cssPercentage, setCssPercentage] = useState(0);
  const [jsPercentage, setJsPercentage] = useState(0);
  const [reactPercentage, setReactPercentage] = useState(0);
  const [reduxPercentage, setReduxPercentage] = useState(0);
  const [bootstrapPercentage, setBootstrapPercentage] = useState(0);
  const [tailwindPercentage, setTailwindPercentage] = useState(0);
  const [nextjsPercentage, setNextjsPercentage] = useState(0);

  // Function to animate the progress bars
  const animateProgressBars = () => {
    setHtmlPercentage(100);
    setCssPercentage(90);
    setJsPercentage(75);
    setReactPercentage(80);
    setReduxPercentage(80);
    setBootstrapPercentage(90);
    setTailwindPercentage(90);
    setNextjsPercentage(30);
  };

  // Use useEffect to trigger the animation once the component is mounted
  useEffect(() => {
    animateProgressBars();
  }, []);

  return (
    <>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              My passion shines through in every line of HTML, every style in
              CSS, every interactive feature in JavaScript, and every dynamic
              solution with ReactJS and Redux. I'm a maestro of Tailwind CSS and
              Bootstrap, weaving innovation and aesthetics into every project.
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">{htmlPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={htmlPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${htmlPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  CSS <i className="val">{cssPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={cssPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${cssPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">{jsPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={jsPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${jsPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Tailwind CSS<i className="val">{tailwindPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={tailwindPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${tailwindPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="progress">
                <span className="skill">
                  Bootstrap <i className="val">{bootstrapPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={bootstrapPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${bootstrapPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  React Js <i className="val">{reactPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={reactPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${reactPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Redux <i className="val">{reduxPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={reduxPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${reduxPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>

              <div className="progress">
                <span className="skill">
                  Next Js<i className="val">{nextjsPercentage}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={nextjsPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${nextjsPercentage}%` }} // Set width based on percentage value
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
