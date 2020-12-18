import React from 'react';
import uniqid from 'uniqid';

const Contact = (props) => {
  const {
    name,
    email,
    phone,
    linkedin,
    website,
    interests,
    skills,
    educations,
    experiences,
    education,
    experience
  } = props.props;

  return (
    <div className="resume">
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{linkedin}</li>
          <li>{website}</li>
        </ul>
      </section>
      <section className="sidebar">
        <h2>Interests</h2>
        <ul>
          {interests.split(', ').map((interest) => {
            return <li key={uniqid()}>{interest}</li>;
          })}
        </ul>
        <h2>Skills</h2>
        <ul>
          {skills.split(', ').map((skill) => {
            return <li key={uniqid()}>{skill}</li>;
          })}
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        {educations.map((education) => (
        <ul>
          <li key={uniqid()}>{education.schoolName}</li>
          <li key={uniqid()}>{education.schoolLocation}</li>
          <li key={uniqid()}>{education.coursee}</li>
          <li key={uniqid()}>{education.startYear}</li>
          <li key={uniqid()}>{education.endYear}</li>
        </ul>
        ))}
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>{experiences.organization}</li>
          <li>{experiences.position}</li>
          <li>{experiences.jobLocation}</li>
          <li>{experiences.startDate}</li>
          <li>{experiences.endDate}</li>
          <li>{experiences.description}</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
