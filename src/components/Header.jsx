import React from 'react'

export default function Header() {
  return (
	<header className="header">
	<div className="header-top">
	  <div className="container">
		<div className="header-top-wrap d-flex j-between">
		  <div className="header-top-num">
			<i className="fas fa-mobile-alt"></i>
			<span>+88 01611210222</span>
			<i className="fas fa-envelope"></i>
			<span>alsiamworld@gmail.com</span>
		  </div>
		  <div className="header-top-menu">
			<ul>
			  <li><i className="fas fa-home"></i></li>
			  <li><i className="fab fa-hire-a-helper"></i></li>
			  <li><i className="fas fa-sign-in-alt"></i></li>
			  <li><i className="fas fa-edit"></i></li>
			  <li><i className="fas fa-search"></i></li>
			</ul>
		  </div>
		</div>
	  </div>
	</div>
	<div className="header-contact">
	  <div className="header-contact-wrap">
		<div className="container d-flex j-between">
		  <div className="contact-item d-flex">
			<i className="fas fa-phone"></i>
			<div className="contact-wrap">
			  <h3>Give us a call</h3>
			  <span>+88 01611210222</span>
			</div>
		  </div>
		  <div className="contact-item d-flex">
			<i className="fas fa-phone"></i>
			<div className="contact-wrap">
			  <h3>Send us a mail</h3>
			  <span>alsiamworld@gmail.com</span>
			</div>
		  </div>
		  <div className="contact-item d-flex">
			<i className="fas fa-phone"></i>
			<div className="contact-wrap">
			  <h3>Saturday - Friday :</h3>
			  <span>08.00am - 18.00pm</span>
			</div>
		  </div>
		  <div className="contact-item d-flex">
			<i className="fas fa-phone"></i>
			<div className="contact-wrap">
			  <h3>Visit our website</h3>
			  <span><a href="www.alsiam.com">www.alsiam.com</a></span>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </header>
  )
}
