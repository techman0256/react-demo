import React from 'react';
import './Profile.css';

function Profile() {
  const user = {
    name: "John Doe",
    profilePicture: "https://via.placeholder.com/150",
    coverPhoto: "https://via.placeholder.com/800x200",
    bio: "Software Engineer at XYZ Company",
    contact: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Main St, City, Country"
    },
    experience: [
      { company: "XYZ Company", role: "Software Engineer", duration: "Jan 2020 - Present" },
      { company: "ABC Corp", role: "Junior Developer", duration: "Jun 2018 - Dec 2019" }
    ],
    education: [
      { institution: "University of Example", degree: "BSc in Computer Science", duration: "2014 - 2018" }
    ]
  };

  return (
    <div className="profile">
      <div className="cover-photo" style={{ backgroundImage: `url(${user.coverPhoto})` }}></div>
      <div className="profile-picture">
        <img src={user.profilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <h1>{user.name}</h1>
        <p className="bio">{user.bio}</p>
        <div className="contact-info">
          <p><strong>Email:</strong> {user.contact.email}</p>
          <p><strong>Phone:</strong> {user.contact.phone}</p>
          <p><strong>Address:</strong> {user.contact.address}</p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          {user.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <p><strong>{exp.role}</strong> at {exp.company}</p>
              <p>{exp.duration}</p>
            </div>
          ))}
        </div>
        <div className="education">
          <h2>Education</h2>
          {user.education.map((edu, index) => (
            <div key={index} className="education-item">
              <p><strong>{edu.degree}</strong> from {edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
