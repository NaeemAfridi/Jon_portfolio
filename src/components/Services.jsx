import { BsBarChart } from "react-icons/bs";
import { MdOutlineDeveloperMode, MdOutlineSupportAgent } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { BiSolidCustomize } from "react-icons/bi";
const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Discover a world of possibilities with our expertise in web
              development. We offer a range of services to empower your digital
              presence
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <MdOutlineDeveloperMode />
              </div>
              <h4 className="title">
                <a href="">Web Design and Development</a>
              </h4>
              <p className="description">
                Craft visually stunning and functionally seamless websites using
                HTML, CSS, JavaScript, ReactJS, Redux Toolkit, Tailwind CSS, and
                Bootstrap.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon resposive-icon">
                <DiResponsive />
              </div>
              <h4 className="title">
                <a href="">Responsive Solutions</a>
              </h4>
              <p className="description">
                Ensure your website looks and performs flawlessly across all
                devices, delivering an exceptional user experience.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon">
                <BsBarChart />
              </div>
              <h4 className="title">
                <a href="">Performance Optimization</a>
              </h4>
              <p className="description">
                Fine-tune your web applications for speed and efficiency,
                enhancing user satisfaction and search engine ranking.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon">
                <FaShopify />
              </div>
              <h4 className="title">
                <a href="">E-commerce Solutions</a>
              </h4>
              <p className="description">
                Launch and optimize online stores, boosting sales and customer
                engagement with cutting-edge e-commerce technologies.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon">
                <BiSolidCustomize />
              </div>
              <h4 className="title">
                <a href="">Custom Development</a>
              </h4>
              <p className="description">
                Tailor-made solutions to meet your unique business needs, from
                dynamic web applications to interactive user interfaces.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon support">
                <MdOutlineSupportAgent />
              </div>
              <h4 className="title">
                <a href="">Maintenance and Support</a>
              </h4>
              <p className="description">
                Keep your web assets up-to-date and secure with our ongoing
                maintenance and support services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
