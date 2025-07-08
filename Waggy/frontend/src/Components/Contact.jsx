import React from "react";

function Contact() {
  return (
    <>
      {/* Contact Banner */}
      <section id="contact-banner" style={{ background: "#F9F3EC" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-2 fw-bold mb-3">Contact Us</h1>
              <p className="fs-4 text-muted">
                We’d love to hear from you! Reach out for any queries, feedback,
                or support.
              </p>
            </div>
            <div className="col-md-5 text-md-end d-none d-md-block">
              <img
                src="images/banner-img.png"
                alt="Contact Banner"
                className="img-fluid rounded-4 shadow"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="my-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Info */}
            <div className="col-md-5">
              <div className="bg-light rounded-4 p-4 h-100 shadow-sm">
                <h3 className="fw-bold mb-3">Get in Touch</h3>
                <p className="mb-3">
                  <strong>Address:</strong> 123 Pet Street, New Delhi, India
                </p>
                <p className="mb-3">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:waggy@gmail.com">waggy@gmail.com</a>
                </p>
                <p className="mb-3">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+98034984089">+980-34984089</a>
                </p>
                <div className="mt-4">
                  <h5 className="mb-2">Follow Us</h5>
                  <a href="#" className="me-2 text-primary">
                    <iconify-icon icon="ri:facebook-fill" />
                  </a>
                  <a href="#" className="me-2 text-info">
                    <iconify-icon icon="ri:twitter-fill" />
                  </a>
                  <a href="#" className="me-2 text-danger">
                    <iconify-icon icon="ri:instagram-fill" />
                  </a>
                  <a href="#" className="me-2 text-dark">
                    <iconify-icon icon="ri:youtube-fill" />
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="col-md-7">
              <div className="bg-white rounded-4 p-4 shadow-sm">
                <h3 className="fw-bold mb-4">Send Us a Message</h3>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary px-5 py-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="my-5">
        <div className="container">
          <div
            className="rounded-4 overflow-hidden shadow-sm"
            style={{ minHeight: 300 }}
          >
            <iframe
              title="Waggy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.993236503226!2d77.2167216!3d28.6448006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1e5e6b1e7d%3A0x9e1b1e7d1e5e6b1e!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
