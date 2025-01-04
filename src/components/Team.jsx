import React from "react";

export default function Team() {
	const aboutData = [
		{
			icon: 'fas fa-equals',
			title: 'Visit on our location',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis quibusdam facilis repudiandae, cumque ex placeat deserunt repellat ea culpa?',
		},
		{
			icon: 'fas fa-info-circle',
			title: 'More about us',
			description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto veritatis quibusdam facilis repudiandae, cumque ex placeat deserunt repellat ea culpa?',
		},
	]
  return (
    <section className="team-details">
      <div className="container">
        <div className="details-wrap d-flex j-between">
          <div className="left-side">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              facere modi voluptatum ut tempore asperiores inventore nulla iure
              voluptas unde.
            </p>
			{aboutData.map((item, index) => (
				<div className="details-person d-flex" key={index}>
					<i className={item.icon}></i>
					<div className="details-person-wrap">
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</div>
			))}
          </div>
          <div className="right-side img-icon">
            <a href="#">
              <img src="img/480x300.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
