import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="social-links mb-3 mob-links text-center">
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
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>JonTech</span>
            </strong>
          </div>
        </div>
      </footer>

      {/* <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a> */}
    </div>
  );
};

export default Footer;
