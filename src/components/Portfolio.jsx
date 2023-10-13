import { BiLink } from "react-icons/bi";
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
