import t1 from "../assets/img/testimonials/testimonials-1.jpg";
import t2 from "../assets/img/testimonials/testimonials-2.jpg";
import t3 from "../assets/img/testimonials/testimonials-3.jpg";
import t4 from "../assets/img/testimonials/testimonials-4.jpg";
import t5 from "../assets/img/testimonials/testimonials-5.jpg";
import Carousel from "./Carousel";
const Testimonials = () => {
  const reviews = [
    {
      image: t1,
      text: "This is the first review text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      position: "CEO",
    },
    {
      image: t2,
      text: "This is the second review text. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Jane Smith",
      position: "Designer",
    },
    {
      image: t3,
      text: "This is the third review text. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      name: "Bob Johnson",
      position: "Developer",
    },
    {
      image: t4,
      text: "This is the third review text. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      name: "Bob Johnson",
      position: "Developer",
    },
    {
      image: t5,
      text: "This is the third review text. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      name: "Bob Johnson",
      position: "Developer",
    },
    // Add more reviews here
  ];

  return (
    <>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <Carousel reviews={reviews} />
          {/* <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={t1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={t2} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Enim nisi quem export duis labore cillum quae magna enim
                    sint quorum nulla quem veniam duis minim tempor labore quem
                    eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={t3} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                    multos export minim fugiat minim velit minim dolor enim duis
                    veniam ipsum anim magna sunt elit fore quem dolore labore
                    illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={t4} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Quis quorum aliqua sint quem legam fore sunt eram irure
                    aliqua veniam tempor noster veniam enim culpa labore duis
                    sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                    fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img src={t5} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
