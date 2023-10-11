import about_img from "../assets/img/jon-about-1.png";
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              As a highly skilled software engineer specializing in web
              development, I bring a wealth of expertise to the table.
              Proficient in a wide range of technologies including HTML, CSS,
              JavaScript, TypeScript, React, Next.js, Tailwind CSS, Material UI,
              and Bootstrap, I have a proven track record of delivering
              responsive and user-friendly web applications. My strengths lie in
              problem-solving, performance optimization, and effective
              collaboration with cross-functional teams to consistently deliver
              exceptional web solutions.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={about_img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Front End Web Developer.</h3>
              <p className="fst-italic">
                Coding Pixels into Dreams: Crafting captivating web experiences,
                one line of code at a time.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>15 March 2001</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Website:</strong>
                      <span>https://jon17.netlify.app/</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+923349105657</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Kohat KPK, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Age:</strong>
                      <span>22</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong>{" "}
                      <span>BS Software Engineering</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>coder3351@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                As a Front End Web Developer, I'm your passionate partner in
                crafting captivating online experiences. With expertise in HTML,
                CSS, JavaScript, Bootstrap, Tailwind CSS, ReactJS, and Redux, I
                transform visions into visually stunning, user-friendly
                websites. I thrive on exceeding expectations and ensuring both
                clients and users are thrilled with the results. Let's turn your
                digital dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
