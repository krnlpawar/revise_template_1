import React from "react";

export default function Blog() {
  return (
    <section className="post-box">
      <div className="container">
        <div className="description-title-box">
          <p>Mollis eu commodo eu dui quisque</p>
          <h2>Our Blog Post</h2>
        </div>
        <div className="post-wrap">
          <div className="single-post">
            <div className="post-img">
              <a href="#" className="img-icon">
                <img src="img/480x300.png" alt="" />
              </a>
            </div>
            <h2>How a website Work</h2>
            <span className="post-admin">
              <i className="fas fa-user-tie"></i> admin
            </span>
            <span className="post-date">06 April 2021</span>
            <p className="description">
              Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae.
            </p>
            <a href="#" className="simple-link">
              read more
            </a>
          </div>
          <div className="single-post">
            <div className="post-img">
              <a href="#" className="img-icon">
                <img src="img/480x300.png" alt="" />
              </a>
            </div>
            <h2>Learn Algorithom</h2>
            <span className="post-admin">
              <i className="fas fa-user-tie"></i> admin
            </span>
            <span className="post-date">06 April 2021</span>
            <p className="description">
              Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae.
            </p>
            <a href="#" className="simple-link">
              read more
            </a>
          </div>
          <div className="single-post">
            <div className="post-img">
              <a href="#" className="img-icon">
                <img src="img/480x300.png" alt="" />
              </a>
            </div>
            <h2>Be a Programmer</h2>
            <span className="post-admin">
              <i className="fas fa-user-tie"></i> admin
            </span>
            <span className="post-date">06 April 2021</span>
            <p className="description">
              Et sagittis ac dignissim nec metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae metus proin nunc maecenas vel nulla
              vivamus mattis massa vitae.
            </p>
            <a href="#" className="simple-link">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
