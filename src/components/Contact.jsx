import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dxz53i5",
        "template_r36457t",
        form.current,
        "xeAnYtWA5eBelZcLR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Let's Connect: Reach out and let's start a conversation about your
              next exciting project or collaboration. I'm just a message away!
            </p>
          </div>

          <div className="row" data-aos="fade-in">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <CiLocationOn />
                  <h4>Location:</h4>
                  <p>Jarma Kohat KPK, Pakistan</p>
                </div>

                <div className="email">
                  <BsEnvelope />
                  <h4>Email:</h4>
                  <p>coder3351@gmail.com</p>
                </div>

                <div className="phone">
                  <BsPhone />
                  <h4>Call:</h4>
                  <p>+92 3349105657</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53192.57524733462!2d71.41476459162232!3d33.5654311963559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8ec241a467237%3A0xf7409abf0918f110!2sKohat%20University%20of%20Science%20and%20Technology%20Kohat%20(%20KUST%20)!5e0!3m2!1sen!2s!4v1696093094999!5m2!1sen!2s"
                  style={{ border: "0", width: "100%", height: "290px" }}
                  allowfullscreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form ref={form} onSubmit={sendEmail} className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
