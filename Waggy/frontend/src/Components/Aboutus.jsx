import React from "react";

function Aboutus() {
  return (
    <>
      {/* About Us Banner */}
      <section id="aboutus-banner" style={{ background: "#F9F3EC" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-4 fw-bold mb-3">About Waggy</h1>
              <p className="fs-5 text-muted">
                Waggy is your trusted partner for all things pet! Our mission is
                to provide the best products, advice, and care for your furry
                friends.
              </p>
            </div>
            <div className="col-md-5 text-md-end d-none d-md-block">
              <img
                src="images/insta3.jpg"
                alt="Illustration of pets and people"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: 220, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <img
                src="images/blog-large.jpg"
                alt="Waggy founders and pets"
                className="img-fluid rounded-4 shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="fs-5 text-muted">
                Founded in 2023 by passionate pet lovers, Waggy started as a
                small shop with a big dream: to make pet care easy, affordable,
                and joyful for everyone.
              </p>
              <ul className="list-unstyled fs-5">
                <li>✅ Wide range of quality pet products</li>
                <li>✅ Expert advice and pet tips</li>
                <li>✅ Fast & reliable delivery</li>
                <li>✅ Friendly support that cares</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Meet Our Team</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                img: "reviewer-1.jpg",
              },
              {
                name: "Aman Verma",
                role: "Product Manager",
                img: "reviewer-2.jpg",
              },
              {
                name: "Riya Singh",
                role: "Customer Support",
                img: "reviewer-3.jpg",
              },
            ].map((member, idx) => (
              <div className="col-md-4 col-lg-3" key={idx}>
                <div className="card border-0 shadow text-center h-100 team-card">
                  <img
                    src={`images/${member.img}`}
                    alt={member.name}
                    className="card-img-top rounded-4"
                    style={{ height: 260, objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-1">{member.name}</h5>
                    <p className="text-muted mb-2">{member.role}</p>
                    <div>
                      <a href="#" className="me-2 text-primary">
                        <iconify-icon icon="ri:facebook-fill" />
                      </a>
                      <a href="#" className="me-2 text-info">
                        <iconify-icon icon="ri:twitter-fill" />
                      </a>
                      <a href="#" className="me-2 text-danger">
                        <iconify-icon icon="ri:instagram-fill" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Why Choose Waggy?</h2>
          <div className="row g-4">
            {[
              {
                icon: "mdi:truck-fast",
                title: "Fast Delivery",
                desc: "Get your pet products delivered quickly and safely to your doorstep.",
                color: "text-primary",
              },
              {
                icon: "mdi:star-circle",
                title: "Quality Products",
                desc: "We offer only the best and most trusted brands for your pets.",
                color: "text-warning",
              },
              {
                icon: "mdi:account-heart",
                title: "Customer Care",
                desc: "Our support team is always ready to help you with any questions or concerns.",
                color: "text-danger",
              },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="bg-white rounded-4 shadow p-4 text-center h-100">
                  <iconify-icon
                    icon={feature.icon}
                    width="40"
                    className={`mb-3 ${feature.color}`}
                  />
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
