import React from "react";
import "./home.css";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";

const Home = () => {
  return (
    <div className="container mt-5">
      <p>
        Looking for the perfect way to show your loved one how much you care?
        Whether you're celebrating a special occasion or simply want to show
        your affection, our blooming flower bouquets are sure to do the trick.
        From red and pink roses to white lilies, we have something for everyone.
        Plus, our flowers are always beautifully packaged by the best florists
        in Nairobi and can be delivered same day or next day all over Kenya. So
        what are you waiting for? Say I love you better with a bouquet of
        flowers today.
      </p>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={carousel1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carousel2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={carousel3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
