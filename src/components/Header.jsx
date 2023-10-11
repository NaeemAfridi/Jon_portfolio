import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { FaBars } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineUser, AiOutlineFile } from "react-icons/ai";
import { BiBookContent, BiServer } from "react-icons/bi";
import { SlEnvolope } from "react-icons/sl";
import Jon from "../assets/img/jon-profile.png";
const Header = () => {
  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      <FaBars className="mobile-nav-toggle d-xl-none" />

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
              <a href="index.html">Naeem Jon</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter">
                <BsTwitter />
              </a>
              <a href="#" className="facebook">
                <BsFacebook />
              </a>
              <a href="#" className="instagram">
                <BsInstagram />
              </a>
              <a href="#" className="google-plus">
                <BsGithub />
              </a>
              <a href="#" className="linkedin">
                <BsLinkedin />
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <AiOutlineHome /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <AiOutlineUser /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <AiOutlineFile />
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <BiBookContent /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <BiServer /> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
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
