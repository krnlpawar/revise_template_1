import React from "react";

export default function Header() {
  const headerLinks = [
    { title: "Home", link: "#" },
    { title: "About", link: "#" },
    { title: "Services", link: "#" },
    { title: "Portfolio", link: "#" },
    { title: "Blog", link: "#" },
    { title: "Contact", link: "#" },
  ];

  const headerContact = [
    {
      icon: "fas fa-phone",
      title: "Give us a call",
      desc: "+88 01611210222",
    },
    {
      icon: "fas fa-phone",
      title: "Send us a mail",
      desc: "krnlpawar@gmail.com",
    },
    {
      icon: "fas fa-phone",
      title: "Saturday - Friday",
      desc: "08.00am - 18.00pm",
    },
    {
      icon: "fas fa-phone",
      title: "Visit our website",
      desc: "www.alsiam.com",
    },
  ];

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrap d-flex j-between">
            <div className="header-top-num">
              <i className="fas fa-mobile-alt"></i>
              <span>+xxx xxx xxx</span>
              <i className="fas fa-envelope"></i>
              <span>krnlpawar@gmail.com</span>
            </div>
            <div className="header-top-menu">
              <ul>
                {headerLinks.map((item, index) => {
                  return (
					<li key={index}>
						<i className={item.icon}></i>
					</li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-contact">
        <div className="header-contact-wrap">
          <div className="container d-flex j-between">
            {headerContact.map((item, index) => {
              return (
                <div className="contact-item d-flex" key={index}>
                  <i className={item.icon}></i>
                  <div className="contact-wrap">
                    <h3>{item.title}</h3>
                    <span>{item.desc}</span>
                  </div>
                </div>	
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
