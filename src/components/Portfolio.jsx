import { BiPlus, BiLink } from "react-icons/bi";
import p1 from "../assets/img/portfolio/portfolio-1.png";
import p2 from "../assets/img/portfolio/portfolio-2.png";
import p3 from "../assets/img/portfolio/portfolio-3.png";
import p4 from "../assets/img/portfolio/portfolio-4.png";
import p5 from "../assets/img/portfolio/portfolio-5.png";
import p6 from "../assets/img/portfolio/portfolio-6.png";
import p7 from "../assets/img/portfolio/portfolio-7.png";
import p8 from "../assets/img/portfolio/portfolio-8.png";
import p9 from "../assets/img/portfolio/portfolio-9.png";

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
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p1} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p2} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p3} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 2"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p4} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p5} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 2"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p6} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 3"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p7} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src={p8} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p9} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <BiPlus />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <BiLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
