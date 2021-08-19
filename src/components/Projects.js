import './sass/experience&projects.scss';
import './sass/inputs.scss';
import { useContext } from 'react';
import { cvContext } from '../App';

const Projects = () => {
  const { state, onProjSubmit, onProjectChange } = useContext(cvContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    onProjectChange(currentValue, id);
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <form onSubmit={(event) => onProjSubmit(event)}>
        <div>
          <h3>Project Name:</h3>
          <input
            id="projectName"
            type="text"
            value={state.projects.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Institution:</h3>
          <input
            id="institution"
            type="text"
            value={state.projects.institution}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Starting Year:</h3>
          <input
            id="projectStart"
            type="text"
            value={state.projects.projectStart}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Ending Year:</h3>
          <input
            id="projectEnd"
            type="text"
            value={state.projects.projectEnd}
            onChange={handleChange}
          />
        </div>
        <div className="projectDescr-div">
          <h3>Description:</h3>
          <textarea
            id="projectDescr"
            type="text"
            rows="5"
            cols="50"
            value={state.projects.projectDescr}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default Projects;
