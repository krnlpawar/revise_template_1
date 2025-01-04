import React from "react";

export default function Block() {
  return (
    <section className="block-links">
      <div className="container d-flex j-between">
        {Array(3)
          .fill(0)
          .map((item, index) => {
            return (
              <figure key={index}>
                <a href="#" className="img-icon">
                  <img src="img/480x300.png" alt="" />
                </a>
                <figcaption>
                  <a href="#">al siam world</a>
                </figcaption>
              </figure>
            );
          })}
      </div>
    </section>
  );
}
