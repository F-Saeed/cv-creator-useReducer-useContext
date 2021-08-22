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
import { cvContext } from './CVContextProvider';

const Preview = React.forwardRef((props, ref) => {
  const { state, onDeleteEdu, onDeleteExp, onDeleteProj } =
    useContext(cvContext);

  const education = state.educationData.map((data) => {
    return (
      <div className='details' id={data.id}>
        <div className='information'>
          <h2>{data.schoolName}</h2>
          <p>{data.major}</p>
        </div>
        <div className='years'>
          {data.educationStart} -{' '}
          {data.educationEnd === new Date().getFullYear().toString()
            ? 'Present'
            : data.educationEnd}
          <div
            onClick={() => {
              onDeleteEdu(data.id);
            }}
          >
            <FontAwesomeIcon className='trash-icon' icon={faTrash} size='2x' />
          </div>
        </div>
      </div>
    );
  });

  const experience = state.experienceData.map((data) => {
    return (
      <div className='details' id={data.id}>
        <div className='information'>
          <h2>{data.companyName}</h2>
          <p>{data.position}</p>
          <div
            id='expDescr-preview'
            dangerouslySetInnerHTML={{ __html: data.expDescr }}
          />
        </div>
        <div className='years'>
          {data.from} -{' '}
          {data.to === new Date().getFullYear().toString()
            ? 'Present'
            : data.to}
          <div
            onClick={() => {
              onDeleteExp(data.id);
            }}
          >
            <FontAwesomeIcon className='trash-icon' icon={faTrash} size='2x' />
          </div>
        </div>
      </div>
    );
  });

  const projects = state.projectsData.map((data) => {
    return (
      <div className='details' id={data.id}>
        <div className='information'>
          <h2>{data.projectName}</h2>
          <p>{data.institution}</p>
          <div
            id='projectDescr-preview'
            dangerouslySetInnerHTML={{ __html: data.projectDescr }}
          />
        </div>
        <div className='years'>
          {data.projectStart} -{' '}
          {data.projectEnd === new Date().getFullYear().toString()
            ? 'Present'
            : data.projectEnd}
          <div
            onClick={() => {
              onDeleteProj(data.id);
            }}
          >
            <FontAwesomeIcon className='trash-icon' icon={faTrash} size='2x' />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='preview' ref={ref}>
      <header>
        <h1>{state.generalInfo.name}</h1>
        <div className='contacts'>
          <a
            href={state.generalInfo.email}
            target='_blank'
            rel='noreferrer noopener'
          >
            {state.generalInfo.email}
            <FontAwesomeIcon icon={faAt} className='fa-icon' />
          </a>
          <div>
            {state.generalInfo.telephone}
            <FontAwesomeIcon icon={faPhoneSquare} className='fa-icon' />
          </div>
          <a
            href={state.generalInfo.linkedin}
            target='_blank'
            rel='noreferrer noopener'
          >
            {state.generalInfo.linkedin}
            <FontAwesomeIcon icon={faLinkedin} className='fa-icon' />
          </a>
          <a
            href={state.generalInfo.github}
            target='_blank'
            rel='noreferrer noopener'
          >
            {state.generalInfo.github}
            <FontAwesomeIcon icon={faGithubSquare} className='fa-icon' />
          </a>
        </div>
      </header>
      {state.educationData.length ? (
        <section className='section'>
          <h2>Education</h2>
          {education}
        </section>
      ) : null}
      {state.experienceData.length ? (
        <section className='section'>
          <h2>Experience</h2>
          {experience}
        </section>
      ) : null}
      {state.projectsData.length ? (
        <section className='section'>
          <h2>Projects</h2>
          {projects}
        </section>
      ) : null}
    </div>
  );
});

export default Preview;
