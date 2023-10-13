import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
// import { FaBars } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
import { BiBookContent, BiServer } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import Jon from "../assets/img/jon-profile.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      {/* <FaBars className="mobile-nav-toggle d-xl-none" /> */}

      {/* <!-- ======= Header ======= --> */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={Jon}
              alt="Profile-image"
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="#hero">Naeem Jon</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <Link to="#" className="twitter">
                <BsTwitter />
              </Link>
              <Link to="#" className="facebook">
                <BsFacebook />
              </Link>
              <Link to="#" className="instagram">
                <BsInstagram />
              </Link>
              <Link to="#" className="google-plus">
                <BsGithub />
              </Link>
              <Link to="#" className="linkedin">
                <BsLinkedin />
              </Link>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="scrollto">
                  <AiOutlineHome /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="scrollto">
                  <AiOutlineUser /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="scrollto">
                  <AiOutlineFile />
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="scrollto">
                  <BiBookContent /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="scrollto">
                  <BiServer /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="scrollto">
                  <SlEnvolope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
