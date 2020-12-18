import React, { Component } from 'react';
// import Contact from './components/contact';
// import Sidebar from './components/sidebar';

class Resume extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      website: '',
      interests: '',
      skills: '',
      education: {
        schoolName: '',
        schoolLocation: '',
        course: '',
        startYear: '',
        endYear: ''
      },
      experience: {
        organization: '',
        position: '',
        jobLocation: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stateObjectChange = this.stateObjectChange.bind(this);
  }

  handleChange(e) {
    let field = e.target;
    this.setState({ [field.id]: field.value });
  }

  stateObjectChange(e) {
    let field = e.target;
    let obj = field.parentNode.id;
    let newObj = { ...this.state[obj] };
    newObj[field.id] = field.value;
    this.setState({ [obj]: newObj });
  }

  handleClick(e) {
    e.preventDefault();
    alert('Wll done!');
  }

  render() {
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
    } = this.state;

    return (
      <div>
        {/* <Overview tasks={this.state.tasks} /> */}
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <label htmlFor="linkedin">LinkedIn:</label>
          <input
            type="url"
            id="linkedin"
            value={linkedin}
            onChange={this.handleChange}
          />
          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={this.handleChange}
          />
          <label htmlFor="interests">Interests</label>
          <input
            type="textarea"
            id="interests"
            value={interests}
            onChange={this.handleChange}
          />
          <input type="submit" onClick={this.handleClick}></input>
          <label htmlFor="skills">Skills</label>
          <input
            type="textarea"
            id="skills"
            value={skills}
            onChange={this.handleChange}
          />
          <fieldset id="education">
            <legend>Education</legend>
            <label htmlFor="schoolName">School</label>
            <input
              type="text"
              id="schoolName"
              value={education.schoolName}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="schoolLocation">Location</label>
            <input
              type="text"
              id="schoolLocation"
              value={education.schoolLocation}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="course">Course or Degree</label>
            <input
              type="text"
              id="course"
              value={education.course}
              onChange={this.stateObjectChange}
            />
            <label for="startYear">Start Year</label>
            <input
              type="number"
              id="startYear"
              value={education.startYear}
              min="1900"
              max="2050"
              onChange={this.stateObjectChange}
            />
            <label htmlFor="endYear">End Year</label>
            <input
              type="number"
              id="endYear"
              value={education.endYear}
              min="1900"
              max="2050"
              onChange={this.stateObjectChange}
            />
          </fieldset>
          <fieldset id="experience">
            <legend>Experience</legend>
            <label htmlFor="organization">Organization or Company</label>
            <input
              type="text"
              id="organization"
              value={experience.organization}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              value={experience.position}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="jobLocation">Location</label>
            <input
              type="text"
              id="location"
              value={experience.jobLocation}
              onChange={this.stateObjectChange}
            />
            <label for="startDate">Start Date</label>
            <input
              type="month"
              id="startDate"
              value={experience.startDate}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="month"
              id="endDate"
              value={experience.endDate}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="textarea"
              id="description"
              value={experience.description}
              onChange={this.stateObjectChange}
            />
          </fieldset>
          <label htmlFor="experience">Experience</label>
          <input
            type="textarea"
            id="experience"
            value={experience}
            onChange={this.handleChange}
          />
          <input type="submit" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default Resume;
