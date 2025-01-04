import React from 'react'

export default function Portfolio() {
  return (
	<section className="portfolio-box">
	<div className="container">
	  <div className="description-title-box-wrap">
		<div className="description-title-box">
		  <p>Mollis eu commodo eu dui quisque</p>
		  <h2>Our Portfolio</h2>
		</div>
		<div className="portfolio-switch">
		  <span> Web Design</span> | <span>Logo Design</span> |
		  <span>Programming</span> | <span>SEO</span>
		</div>
	  </div>
	  <div className="portfolio-item">
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
		<div className="single-portfolio">
		  <a href="#" className="img-icon">
			<img src="img/480x300.png" alt=""
		  /></a>
		</div>
	  </div>
	</div>
  </section>
  )
}
