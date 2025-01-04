import React from "react";

export default function Quote() {
  const quote = [
    {
      title: "Al. Siam",
      desc: "Lorem ipsum dolor sit amet.",
      span: `Himenaeos curabitur feugiat etiam in enim sed felis interdum
			lobortis phasellus nec eros ut arcu sollicitudin pellentesque
			curabitur porta justo vitae molestie semper ligula enim sed
			felis interdum lobortis phasellus nec eros ut arcu sollicitudin
			pellentesque curabitur porta justo vitae molestie semper ligula.`,
    },
  ];
  return (
    <section className="main-quote">
      <div className="container">
        <div className="quote-box d-flex">
          <img src="img/100x100.png" alt="" />
          <div className="quote-wrap">
            <h1>{quote[0].title}</h1>
            <span>{quote[0].desc}</span>
            <p>{quote[0].span}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
