import {
  BsEmojiSmile,
  BsPeople,
  BsHeadset,
  BsJournalRichtext,
} from "react-icons/bs";

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Celebrating Our Successes: Explore the impressive facts that define
            our journey – from delighted clients to innovative projects,
            around-the-clock support, and our passionate team of dedicated
            professionals.
          </p>
        </div>

        <div className="row">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <BsEmojiSmile />
              <span className="count">50</span>
              <p>
                <strong>Happy Clients</strong> satisfaction as my ultimate goal.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <BsJournalRichtext />
              <span className="count">20</span>
              <p>
                <strong>Projects</strong> Turning Ideas into Stunning Realities.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <BsHeadset />
              <span className="count">24/7</span>
              <p>
                <strong>Hours Of Support</strong> I'm always here.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="count-box">
              <BsPeople />
              <span className="count">3</span>
              <p>
                <strong>Hard Workers</strong> Fueling Excellence with Passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
