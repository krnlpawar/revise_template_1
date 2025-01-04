import React from "react";

export default function Footer() {
  const socialLinks = [
    {
      icon: "fab fa-facebook",
      link: "#",
    },
    {
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      icon: "fab fa-pinterest",
      link: "#",
    },
    {
      icon: "fab fa-linkedin",
      link: "#",
    },
  ];

  const recentList = [
    {
      title: "Aliquam eget leo praesent",
      link: "#",
    },
    {
      title: "Vel urna nunc ultricies",
      link: "#",
    },
    {
      title: "Faucibus nunc cum sociis",
      link: "#",
    },
    {
      title: "Natoque penatibus et magnis",
      link: "#",
    },
    {
      title: "Dis parturient montes",
      link: "#",
    },
  ];

  const footerLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ];

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
              {socialLinks.map((item, index) => (
                <i key={index} className={item.icon}></i>
              ))}
            </div>
          </div>
          <div className="recent-widget">
            <h3>Here is the Recent</h3>
            <ul>
              {recentList.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
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
              {Array(9)
                .fill(0)
                .map((item, index) => {
                  return (
                    <div className="featured-img" key={index}>
                      <a href="#" className="img-icon">
                        <img src="img/100x100.png" alt="" />
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            {footerLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-credit d-flex j-between">
          <div className="credit-left">
            Copyright © {new Date().getFullYear()} - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
