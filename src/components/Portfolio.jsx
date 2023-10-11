import { BiLink } from "react-icons/bi";
import p1 from "../assets/img/portfolio/portfolio-1.png";

import { Link } from "react-router-dom";
import { portfolioData } from "../utils/portfolioData";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Crafted with a passion for web development, my portfolio showcases
              a journey marked by creativity and technical expertise. Through
              projects encompassing HTML, CSS, JavaScript, ReactJS, Redux,
              Tailwind CSS, and Bootstrap, I demonstrate a commitment to
              delivering outstanding digital experiences. Explore my work and
              experience the fusion of innovation and precision.
            </p>
          </div>

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">React</li>
                <li data-filter=".filter-card">HTML/CSS</li>
                <li data-filter=".filter-web">MERN</li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {portfolioData.map((project, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 portfolio-item filter-app"
              >
                <div className="portfolio-wrap">
                  <img src={project.img} className="img-fluid" alt="" />
                  <div className="portfolio-links">
                    <Link
                      to={project.link}
                      title="More Details"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BiLink />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p2} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p3} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p4} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p5} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p6} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p7} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="https://cosmic-baklava-58c11d.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="More Details"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p8} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    href="portfolio-details.html"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p9} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to="https://soladd.com/"
                    title="More Details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLink />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
