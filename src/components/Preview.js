import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquare,
  faAt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './sass/preview.scss';
import { useContext } from 'react';
import { cvContext } from '../App';

const Preview = React.forwardRef((props, ref) => {
  const { state, onDeleteEdu, onDeleteExp } = useContext(cvContext);

  const education = state.educationData.map((data) => {
    return (
      <div className="details" id={data.id}>
        <div className="information">
          <h2>{data.schoolName}</h2>
          <p>{data.major}</p>
        </div>
        <div className="years">
          {data.start} - {data.end}
          <div
            onClick={() => {
              onDeleteEdu(data.id);
            }}
          >
            <FontAwesomeIcon className="trash-icon" icon={faTrash} size="2x" />
          </div>
        </div>
      </div>
    );
  });

  const experience = state.experienceData.map((data) => {
    return (
      <div className="details" id={data.id}>
        <div className="information">
          <h2>{data.companyName}</h2>
          <p>{data.position}</p>
          <p id="tasks">{data.tasks}</p>
        </div>
        <div className="years">
          {data.from} - {data.to}
          <div
            onClick={() => {
              onDeleteExp(data.id);
            }}
          >
            <FontAwesomeIcon className="trash-icon" icon={faTrash} size="2x" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="preview" ref={ref}>
      <header>
        <h1>{state.generalInfo.name}</h1>
        <div className="contacts">
          <a
            href={state.generalInfo.email}
            target="_blank"
            rel="noreferrer noopener"
          >
            {state.generalInfo.email}
            <FontAwesomeIcon icon={faAt} className="fa-icon" />
          </a>
          <div>
            {state.generalInfo.telephone}
            <FontAwesomeIcon icon={faPhoneSquare} className="fa-icon" />
          </div>
          <a
            href={state.generalInfo.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {state.generalInfo.linkedin}
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
          <a
            href={state.generalInfo.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {state.generalInfo.github}
            <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
          </a>
        </div>
      </header>
      {state.educationData.length ? (
        <section className="section">
          <h2>Education</h2>
          {education}
        </section>
      ) : null}
      {state.experienceData.length ? (
        <section className="section">
          <h2>Experience</h2>
          {experience}
        </section>
      ) : null}
    </div>
  );
});

export default Preview;
