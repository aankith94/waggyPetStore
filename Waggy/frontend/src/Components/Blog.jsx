import React from "react";

function Blog() {
  return (
    <>
      {/* Blog Banner */}
      <section id="blog-banner" style={{ background: "#F9F3EC" }}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-2 fw-bold mb-3">Latest Blog Posts</h1>
              <p className="fs-4 text-muted">
                Tips, stories, and advice for pet lovers. Stay updated with the
                latest trends and care guides for your furry friends!
              </p>
            </div>
            <div className="col-md-5 text-md-end d-none d-md-block">
              <img
                src="images/blog1.jpg"
                alt="Blog Banner"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: 220, objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="blog-list" className="my-5">
        <div className="container">
          <h2 className="display-5 fw-semibold mb-4 text-center">
            Featured Articles
          </h2>
          <div className="row g-4">
            {/* Blog Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <img
                    src="images/blog1.jpg"
                    className="img-fluid rounded-4"
                    alt="10 Reasons to be helpful towards any animals"
                  />
                  <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-primary text-white rounded-3 small">
                    20 Feb
                  </span>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2">
                    10 Reasons to be helpful towards any animals
                  </h4>
                  <p className="text-muted mb-3">
                    At the core of our practice is the idea that cities are the
                    incubators of our greatest achievements, and the best hope
                    for a sustainable future.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-sm rounded-pill px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <img
                    src="images/blog2.jpg"
                    className="img-fluid rounded-4"
                    alt="How to know your pet is hungry"
                  />
                  <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-primary text-white rounded-3 small">
                    21 Feb
                  </span>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2">
                    How to know your pet is hungry
                  </h4>
                  <p className="text-muted mb-3">
                    Learn the signs and behaviors that show your pet needs food,
                    and how to maintain a healthy feeding schedule.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-sm rounded-pill px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <img
                    src="images/blog3.jpg"
                    className="img-fluid rounded-4"
                    alt="Best home for your pets"
                  />
                  <span className="position-absolute top-0 start-0 m-3 px-3 py-1 bg-primary text-white rounded-3 small">
                    22 Feb
                  </span>
                </div>
                <div className="card-body">
                  <h4 className="card-title fw-bold mb-2">
                    Best home for your pets
                  </h4>
                  <p className="text-muted mb-3">
                    Discover how to create a safe, comfortable, and loving
                    environment for your pets at home.
                  </p>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-sm rounded-pill px-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-5">
            <nav>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item active">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Subscribe for Pet Tips & Stories</h2>
          <p className="mb-4">
            Join our newsletter for the latest blog updates, offers, and pet
            care tips!
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control rounded-start"
                  placeholder="Enter your email"
                />
                <button className="btn btn-dark rounded-end">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
