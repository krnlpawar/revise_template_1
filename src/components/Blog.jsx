import React from "react";

export default function Blog() {
  const blogData = [
    {
      img: "img/480x300.png",
      title: "How a website Work",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
    {
      img: "img/480x300.png",
      title: "Learn Algorithom",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
    {
      img: "img/480x300.png",
      title: "Be a Programmer",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
    {
      img: "img/480x300.png",
      title: "How a website Work",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
    {
      img: "img/480x300.png",
      title: "Learn Algorithom",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
    {
      img: "img/480x300.png",
      title: "Be a Programmer",
      admin: "admin",
      date: "06 April 2021",
      description:
        "Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla vivamus mattis massa vitae metus proin nunc maecenas vel nulla vivamus mattis massa vitae.",
    },
  ];
  return (
    <section className="post-box">
      <div className="container">
        <div className="description-title-box">
          <p>Mollis eu commodo eu dui quisque</p>
          <h2>Our Blog Post</h2>
        </div>
        <div className="post-wrap">
          {blogData.map((item, index) => {
            return (
              <div className="single-post" key={index}>
                <div className="post-img">
                  <a href="#" className="img-icon">
                    <img src={item.img} alt="" />
                  </a>
                </div>
                <h2>{item.title}</h2>
                <span className="post-admin">
                  <i className="fas fa-user-tie"></i> {item.admin}
                </span>
                <span className="post-date">{item.date}</span>
                <p className="description">{item.description}</p>
                <a href="#" className="simple-link">
                  read more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
