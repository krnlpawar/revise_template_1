import React from "react";

export default function Team() {
  return (
    <section className="team-details">
      <div className="container">
        <div className="details-wrap d-flex j-between">
          <div className="left-side">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              facere modi voluptatum ut tempore asperiores inventore nulla iure
              voluptas unde.
            </p>
            <div className="details-person d-flex">
              <i className="fas fa-equals"></i>
              <div className="details-person-wrap">
                <h3>Visit on our location</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto veritatis quibusdam facilis repudiandae, cumque ex
                  placeat deserunt repellat ea culpa?
                </p>
              </div>
            </div>
            <div className="details-person d-flex">
              <i className="fas fa-info-circle"></i>
              <div className="details-person-wrap">
                <h3>More about us</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto veritatis quibusdam facilis repudiandae, cumque ex
                  placeat deserunt repellat ea culpa?
                </p>
              </div>
            </div>
          </div>
          <div className="right-side img-icon">
            <a href="#">
              <img src="img/480x300.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
