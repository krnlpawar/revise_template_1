import React from 'react'

export default function Footer() {
  return (
	<footer>
	<div className="container">
	  <div className="footer-widget">
		<div className="about-widget">
		  <h3>About us</h3>
		  <p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
			porro est iste? Nulla cupiditate beatae ducimus, reprehenderit
			consequuntur odit cum!
		  </p>
		  <div className="social-widget">
			<i className="fab fa-facebook"></i>
			<i className="fab fa-instagram"></i>
			<i className="fab fa-twitter"></i>
			<i className="fab fa-pinterest"></i>
			<i className="fab fa-linkedin"></i>
		  </div>
		</div>
		<div className="recent-widget">
		  <h3>Here is the Recent</h3>
		  <ul>
			<li>Aliquam eget leo praesent</li>
			<li>Vel urna nunc ultricies</li>
			<li>Faucibus nunc cum sociis</li>
			<li>Natoque penatibus et magnis</li>
			<li>Dis parturient montes</li>
		  </ul>
		</div>
		<div className="contact-widget">
		  <h3>Contact us form</h3>
		  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		  <input type="text" placeholder="name" />
		  <input type="text" placeholder="Email" />
		  <input type="submit" value="Submit" />
		</div>
		<div className="featured-widget">
		  <h3>featured widget</h3>
		  <div className="featured-wrap">
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
			<div className="featured-img">
			  <a href="#" className="img-icon">
				<img src="img/100x100.png" alt=""
			  /></a>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="footer-menu">
		<ul>
		  <li>
			<a href="#"><i className="fas fa-home"></i></a>
		  </li>
		  <li><a href="#">About</a></li>
		  <li><a href="#">Contact</a></li>
		  <li><a href="#">Terms</a></li>
		  <li><a href="#">Privacy</a></li>
		  <li><a href="#">Cookies</a></li>
		  <li><a href="#">Disclaimer</a></li>
		</ul>
	  </div>
	  <div className="footer-credit d-flex j-between">
		<div className="credit-left">
		  Copyright © 2018 - All Rights Reserved - www.alsiam.com
		</div>
		<div className="credit-right">Template By Al Siam World</div>
	  </div>
	</div>
  </footer>
  )
}
