import React from 'react';
import './style.css';
import teamImg1 from "../../../../../static/ayaz.png";
import teamImg2 from "../../../../../static/shayan.jpg";
import teamImg3 from "../../../../../static/danyal.png";
import teamImg4 from "../../../../../static/haider.png";
import teamImg5 from "../../../../../static/haris.png";

const Team = () => {
  // Original team members array
  const teamMembers = [
    { id: 1, image: teamImg1, alt: "Team Member 1" },
    { id: 2, image: teamImg2, alt: "Team Member 2" },
    { id: 3, image: teamImg3, alt: "Team Member 3" },
    { id: 4, image: teamImg4, alt: "Team Member 4" },
    { id: 5, image: teamImg5, alt: "Team Member 5" }
  ];

  // Create infinite loop by duplicating the array twice
  const infiniteTeamMembers = [
    ...teamMembers,
    ...teamMembers
  ];

  return (
    <section className="team-section">
      <div className="team-glow"></div>
      <div className="team-container">
        <div className="team-header">
          <div className="team-badge">
            <span>Our Team</span>
          </div>

          <h2 className="team-title">
            Meet the People<br />
            Behind the Magic
          </h2>
          
          <p className="team-description">
            Our passionate team of developers, designers, and digital strategists brings years of expertise and creative vision to  every project.
          </p>
        </div>
        
        <div className="team-carousel">
          <div className="carousel-track">
            {infiniteTeamMembers.map((member, index) => (
              <div key={`${member.id}-${Math.floor(index / teamMembers.length)}`} className="team-member">
                <img src={member.image} alt={member.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;