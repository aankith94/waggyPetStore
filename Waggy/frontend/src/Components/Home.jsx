import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import API from "./backendRouting";
import Cookies from "js-cookie";
function Home() {
  const [data, setData] = useState([]);

  const [item, setItem] = useState("");

  const getCookie = Cookies.get("userInfo");
  const tokenn = getCookie ? JSON.parse(getCookie) : null;
  const getAllProducts = async () => {
    try {
      const dataa = await axios.get(API.ALLPRODUCT.url, data);
      setData(dataa.data.body);
    } catch (error) {
      console.log(error, "fetching all dataerror");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const addItem = async (productIdd) => {
    try {
      const dataa = await axios.post(
        API.ADDTOCART.url,
        { productId: productIdd },
        {
          headers: {
            Authorization: `Bearer ${tokenn.token}`,
          },
        }
      );
      console.log(dataa, "add to cart item data");
    } catch (error) {
      console.log(error, "add item error");
    }
  };
  return (
    <>
      <section id="banner" style={{ background: "#F9F3EC" }}>
        <div className="container">
          {/* You can convert this to Swiper as well if you want */}
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                    <img src="images/banner-img.png" className="img-fluid" />
                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        className="mb-1"
                      >
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                    <img src="images//banner-img3.png" className="img-fluid" />
                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        className="mb-1"
                      >
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide py-5">
                <div className="row banner-content align-items-center">
                  <div className="img-wrapper col-md-5">
                    <img src="images/banner-img4.png" className="img-fluid" />
                  </div>
                  <div className="content-wrapper col-md-7 p-5 mb-5">
                    <div className="secondary-font text-primary text-uppercase mb-4">
                      Save 10 - 20 % off
                    </div>
                    <h2 className="banner-title display-1 fw-normal">
                      Best destination for{" "}
                      <span className="text-primary">your pets</span>
                    </h2>
                    <a
                      href="#"
                      className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                    >
                      shop now
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        className="mb-1"
                      >
                        <use xlinkHref="#arrow-right" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination mb-5" />
          </div>
        </div>
      </section>

      <section id="categories">
        <div className="container my-3 py-5">
          <div className="row my-5">
            <div className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon className="category-icon" icon="ph:bowl-food" />
                <h5>Foodies</h5>
              </a>
            </div>
            <div className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon className="category-icon" icon="ph:bird" />
                <h5>Bird Shop</h5>
              </a>
            </div>
            <div className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon className="category-icon" icon="ph:dog" />
                <h5>Dog Shop</h5>
              </a>
            </div>
            <div className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon className="category-icon" icon="ph:fish" />
                <h5>Fish Shop</h5>
              </a>
            </div>
            <div className="col text-center">
              <a href="#" className="categories-item">
                <iconify-icon className="category-icon" icon="ph:cat" />
                <h5>Cat Shop</h5>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Clothing Carousel Section */}
      <section id="clothing" className="my-5 overflow-hidden">
        <div className="container pb-5">
          <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 className="display-3 fw-normal">Pet Clothing</h2>
            <div>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            // pagination={{ clickable: true }}
            navigation
            autoplay={true}
            modules={[Pagination, Navigation]}
            className="products-carousel"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {data.map((product) => (
              <SwiperSlide>
                <div className="card position-relative">
                  <a href="#">
                    <img
                      src={product.pic}
                      className="img-fluid rounded-4"
                      alt={product.name}
                      style={{
                        height: "300px",

                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="#">
                      <h3 className="card-title pt-4 m-0">{product.name}</h3>
                    </a>
                    <div className="card-text">
                      <h3 className="secondary-font text-primary">
                        ₹{product.price}
                      </h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a
                          href="#"
                          className="btn-cart me-3 px-4 pt-3 pb-3"
                          onClick={() => {
                            addItem(product._id);
                          }}
                        >
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ...rest of your sections (foodies, testimonial, bestselling, etc.)... */}
      {/* Keep your other sections as they are for now */}

      <section id="foodies" className="my-5">
        <div className="container my-5 py-5">
          <div className="section-header d-md-flex justify-content-between align-items-center">
            <h2 className="display-3 fw-normal">Pet Foodies</h2>
            <div className="mb-4 mb-md-0">
              <p className="m-0">
                <button className="filter-button me-4  active" data-filter="*">
                  ALL
                </button>
                <button className="filter-button me-4 " data-filter=".cat">
                  CAT
                </button>
                <button className="filter-button me-4 " data-filter=".dog">
                  DOG
                </button>
                <button className="filter-button me-4 " data-filter=".bird">
                  BIRD
                </button>
              </p>
            </div>
            <div>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
          <section id="product-list" className="my-5">
            <div className="container">
              <div className="row">
                {data.map((product, index) => (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                    key={index}
                  >
                    <div className="card h-100 shadow-sm">
                      <img
                        src={product.pic}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <p
                          className="card-text text-muted"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            minHeight: "3em",
                          }}
                        >
                          {product.description}
                        </p>
                        <h6 className="text-primary mb-3">₹{product.price}</h6>
                        <div className="mt-auto d-flex justify-content-between">
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => {
                              addItem(product._id);
                            }}
                          >
                            Add to Cart
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <iconify-icon icon="fluent:heart-28-filled" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* uyuyuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy */}
      <section id="banner-2" className="my-3" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="row flex-row-reverse banner-content align-items-center">
            <div className="img-wrapper col-12 col-md-6">
              <img src="images/banner-img2.png" className="img-fluid" />
            </div>
            <div className="content-wrapper col-12 offset-md-1 col-md-5 p-5">
              <div className="secondary-font text-primary text-uppercase mb-3 fs-4">
                Upto 40% off
              </div>
              <h2 className="banner-title display-1 fw-normal">
                Clearance sale !!!
              </h2>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="offset-md-1 col-md-10">
              <div className="swiper testimonial-swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row ">
                      <div className="col-2">
                        <iconify-icon
                          icon="ri:double-quotes-l"
                          className="quote-icon text-primary"
                        />
                      </div>
                      <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                        <p className="testimonial-content fs-2">
                          At the core of our practice is the idea that cities
                          are the incubators of our greatest achievements, and
                          the best hope for a sustainable future.
                        </p>
                        <p className="text-black">- Joshima Lin</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row ">
                      <div className="col-2">
                        <iconify-icon
                          icon="ri:double-quotes-l"
                          className="quote-icon text-primary"
                        />
                      </div>
                      <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                        <p className="testimonial-content fs-2">
                          At the core of our practice is the idea that cities
                          are the incubators of our greatest achievements, and
                          the best hope for a sustainable future.
                        </p>
                        <p className="text-black">- Joshima Lin</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row ">
                      <div className="col-2">
                        <iconify-icon
                          icon="ri:double-quotes-l"
                          className="quote-icon text-primary"
                        />
                      </div>
                      <div className="col-md-10 mt-md-5 p-5 pt-0 pt-md-5">
                        <p className="testimonial-content fs-2">
                          At the core of our practice is the idea that cities
                          are the incubators of our greatest achievements, and
                          the best hope for a sustainable future.
                        </p>
                        <p className="text-black">- Joshima Lin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="bestselling" className="my-5 overflow-hidden">
        <div className="container py-5 mb-5">
          <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
            <h2 className="display-3 fw-normal">Best selling products</h2>
            <div>
              <a
                href="#"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right" />
                </svg>
              </a>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // pagination={{ clickable: true }}
            navigation
            autoplay={true}
            modules={[Pagination, Navigation]}
            className="bestselling-swiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {data.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="card position-relative">
                  <a href="#">
                    <img
                      src={product.pic}
                      className="img-fluid rounded-4"
                      alt={product.name}
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </a>
                  <div className="card-body p-0">
                    <a href="#">
                      <h3 className="card-title pt-4 m-0">{product.name}</h3>
                    </a>
                    <div className="card-text">
                      <span className="rating secondary-font d-block mb-2">
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        <iconify-icon
                          icon="clarity:star-solid"
                          className="text-primary"
                        />
                        5.0
                      </span>
                      <h3 className="secondary-font text-primary">
                        ₹{product.price}
                      </h3>
                      <div className="d-flex flex-wrap mt-3">
                        <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                          <h5 className="text-uppercase m-0">Add to Cart</h5>
                        </a>
                        <a href="#" className="btn-wishlist px-4 pt-3">
                          <iconify-icon
                            icon="fluent:heart-28-filled"
                            className="fs-5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section
        id="register"
        style={{ background: 'url("images/background-img.png") no-repeat' }}
      >
        <div className="container ">
          <div className="row my-5 py-5">
            <div className="offset-md-3 col-md-6 my-5 ">
              <h2 className="display-3 fw-normal text-center">
                Get 20% Off on{" "}
                <span className="text-primary">first Purchase</span>
              </h2>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="email"
                    id="password1"
                    placeholder="Create Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="email"
                    id="password2"
                    placeholder="Repeat Password"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-dark btn-lg rounded-1"
                  >
                    Register it now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-blog" className="my-5">
        <div className="container py-5 my-5">
          <div className="row mt-5">
            <div className="section-header d-md-flex justify-content-between align-items-center mb-3">
              <h2 className="display-3 fw-normal">Latest Blog Post</h2>
              <div>
                <a
                  href="#"
                  className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                >
                  Read all
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    className="mb-1"
                  >
                    <use xlinkHref="#arrow-right" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 my-4 my-md-0">
              <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 className="secondary-font text-primary m-0">20</h3>
                <p className="secondary-font fs-6 m-0">Feb</p>
              </div>
              <div className="card position-relative">
                <a href="single-post.html">
                  <img
                    src="images/blog1.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-post.html">
                    <h3 className="card-title pt-4 pb-3 m-0">
                      10 Reasons to be helpful towards any animals
                    </h3>
                  </a>
                  <div className="card-text">
                    <p className="blog-paragraph fs-6">
                      At the core of our practice is the idea that cities are
                      the incubators of our greatest achievements, and the best
                      hope for a sustainable future.
                    </p>
                    <a href="single-post.html" className="blog-read">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4 my-md-0">
              <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 className="secondary-font text-primary m-0">21</h3>
                <p className="secondary-font fs-6 m-0">Feb</p>
              </div>
              <div className="card position-relative">
                <a href="single-post.html">
                  <img
                    src="images/blog2.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-post.html">
                    <h3 className="card-title pt-4 pb-3 m-0">
                      How to know your pet is hungry
                    </h3>
                  </a>
                  <div className="card-text">
                    <p className="blog-paragraph fs-6">
                      At the core of our practice is the idea that cities are
                      the incubators of our greatest achievements, and the best
                      hope for a sustainable future.
                    </p>
                    <a href="single-post.html" className="blog-read">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4 my-md-0">
              <div className="z-1 position-absolute rounded-3 m-2 px-3 pt-1 bg-light">
                <h3 className="secondary-font text-primary m-0">22</h3>
                <p className="secondary-font fs-6 m-0">Feb</p>
              </div>
              <div className="card position-relative">
                <a href="single-post.html">
                  <img
                    src="images/blog3.jpg"
                    className="img-fluid rounded-4"
                    alt="image"
                  />
                </a>
                <div className="card-body p-0">
                  <a href="single-post.html">
                    <h3 className="card-title pt-4 pb-3 m-0">
                      Best home for your pets
                    </h3>
                  </a>
                  <div className="card-text">
                    <p className="blog-paragraph fs-6">
                      At the core of our practice is the idea that cities are
                      the incubators of our greatest achievements, and the best
                      hope for a sustainable future.
                    </p>
                    <a href="single-post.html" className="blog-read">
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className="container py-5 my-5">
          <div className="row g-md-5 pt-4">
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:shopping-cart"
                  />
                </div>
                <h3 className="card-title py-2 m-0">Free Delivery</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:user-check"
                  />
                </div>
                <h3 className="card-title py-2 m-0">100% secure payment</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:tag"
                  />
                </div>
                <h3 className="card-title py-2 m-0">Daily Offer</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:award"
                  />
                </div>
                <h3 className="card-title py-2 m-0">Quality guarantee</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="insta" className="my-5">
        <div className="row g-0 py-5">
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta1.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta2.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta3.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta4.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta5.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon className="text-white" icon="la:instagram" />
            </div>
            <a href="#">
              <img
                src="images/insta6.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
