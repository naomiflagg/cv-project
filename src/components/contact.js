import React from 'react';

const Contact = (props) => {
  const {
    name,
    email,
    phone,
    linkedin,
    website,
    interests,
    skills,
    education,
    experience
  } = props.props;

  return (
    <div>
      <section className="contact">
        <h2>Contact</h2>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{phone}</li>
          <li>{linkedin}</li>
          <li>{website}</li>
        </ul>
        {/* {tasks.map((task) => (
          <li key={uniqid()}>{task}</li>
        ))} */}
      </section>
      <section className="sidebar">
        <ul>
          <li>
            <h2>{interests}</h2>
          </li>
          <li>
            <h2>{skills}</h2>
          </li>
        </ul>
      </section>
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>{education.schoolName}</li>
          <li>{education.course}</li>
        </ul>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>{experience.organization}</li>
          <li>{experience.position}</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
