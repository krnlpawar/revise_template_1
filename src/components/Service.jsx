import React from "react";

export default function Service() {
	const serviceData = [
		{
			icon: "fas fa-info-circle",
			title: "Logo Design",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
		{
			icon: "fas fa-info-circle",
			title: "SEO",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
		{
			icon: "fas fa-info-circle",
			title: "Web Design",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
		{
			icon: "fas fa-info-circle",
			title: "Wordpress Development",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
		{
			icon: "fas fa-info-circle",
			title: "Programming",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
		{
			icon: "fas fa-info-circle",
			title: "Web Development",
			desc: "Tellus lacus tempor in pharetra id imperdiet sit amet enim suspendisse potenti fusce ornare imperdiet sit amet enim suspendisse.",
			link: "read more",
		},
	]
  return (
    <section className="service-box">
      <div className="container">
        <div className="description-title-box">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <h2>Services</h2>
        </div>
        <div className="service-box-item">
			{
				serviceData.map((item, index) => (
					<div className="single-service" key={index}>
						<i className={item.icon}></i>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<a href="#" className="simple-link">
							{item.link}
						</a>
					</div>
				))
			}
        </div>
      </div>
    </section>
  );
}
