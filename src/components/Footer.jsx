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
            <Link
              to="https://www.instagram.com/naeem_afridi01/"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </Link>
            <Link
              to="https://github.com/NaeemAfridi"
              className="google-plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </Link>
            <Link
              to="www.linkedin.com/in/naeem-afridi-298a27222"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
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
