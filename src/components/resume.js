import React, { Component } from 'react';
import Contact from './contact';
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
      educations: [],
      education: {
        schoolName: '',
        schoolLocation: '',
        course: '',
        startYear: '',
        endYear: ''
      },
      experiences: [],
      experience: {
        organization: '',
        position: '',
        jobLocation: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    };

    this.handleNew = this.handleNew.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  async handleNew(e) {
    e.preventDefault();
    let obj = e.target.parentNode.id;
    let objArray = `${obj}s`
    let blankObj = {}
    Object.keys(this.state[obj]).map(key => {
      return blankObj[key] = ''
    })
    await this.setState({ [objArray]: this.state[objArray].concat(this.state[obj]), [obj]: blankObj });
    console.log(this.state[objArray], this.state[obj])
  }

  handleSave(e) {
    e.preventDefault();
    this.removeDisplay(document.querySelector('form'));
    this.addDisplay(document.querySelector('.edit'));
  }

  handleEdit() {
    this.addDisplay(document.querySelector('form'));
    this.removeDisplay(document.querySelector('.edit'));
  }

  removeDisplay = (ele) => {
    ele.classList.add('no-display');
  };

  addDisplay = (ele) => {
    ele.classList.remove('no-display');
  };

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
      <div className="container">
        <Contact props={this.state} />
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
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={this.handleChange}
          />
          <label htmlFor="interests">Interests (separate by comma):</label>
          <input
            type="textarea"
            id="interests"
            value={interests}
            onChange={this.handleChange}
          />
          <label htmlFor="skills">Skills (separate by comma):</label>
          <input
            type="textarea"
            id="skills"
            value={skills}
            onChange={this.handleChange}
          />
          <fieldset id="education">
            <legend>Education</legend>
            <label htmlFor="schoolName">School:</label>
            <input
              type="text"
              id="schoolName"
              value={education.schoolName}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="schoolLocation">Location:</label>
            <input
              type="text"
              id="schoolLocation"
              value={education.schoolLocation}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="course">Course or Degree:</label>
            <input
              type="text"
              id="course"
              value={education.course}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="startYear">Start Year:</label>
            <input
              type="number"
              id="startYear"
              value={education.startYear}
              min="1900"
              max="2050"
              onChange={this.stateObjectChange}
            />
            <label htmlFor="endYear">End Year:</label>
            <input
              type="number"
              id="endYear"
              value={education.endYear}
              min="1900"
              max="2050"
              onChange={this.stateObjectChange}
            />
            <button className="newEducation" onClick={this.handleNew}>
              Add additional education
            </button>
          </fieldset>
          <fieldset id="experience">
            <legend>Experience</legend>
            <label htmlFor="organization">Organization or Company:</label>
            <input
              type="text"
              id="organization"
              value={experience.organization}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              value={experience.position}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="jobLocation">Location:</label>
            <input
              type="text"
              id="location"
              value={experience.jobLocation}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="month"
              id="startDate"
              value={experience.startDate}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="endDate">End Date:</label>
            <input
              type="month"
              id="endDate"
              value={experience.endDate}
              onChange={this.stateObjectChange}
            />
            <label htmlFor="description">Description:</label>
            <input
              type="textarea"
              id="description"
              value={experience.description}
              onChange={this.stateObjectChange}
            />
            <button className="newEducation" onClick={this.handleNew}>
              Add additional experience
            </button>
          </fieldset>
          <input type="submit" value="Save" onClick={this.handleSave} />
        </form>
        <button className="edit no-display" onClick={this.handleEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default Resume;
