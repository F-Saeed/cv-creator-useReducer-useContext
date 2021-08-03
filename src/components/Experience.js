import './sass/experience.scss';
import './sass/inputs.scss';
import { useContext } from 'react';
import { stateContext, experienceContext } from '../App';

const Experience = () => {
  const state = useContext(stateContext);
  const { onExpSubmit, onExperienceChange } = useContext(experienceContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    onExperienceChange(currentValue, id);
  };

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <form onSubmit={(event) => onExpSubmit(event)}>
        <div>
          <h3>Company Name:</h3>
          <input
            id="companyName"
            type="text"
            value={state.experience.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Position Title:</h3>
          <input
            id="position"
            type="text"
            value={state.experience.position}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>From:</h3>
          <input
            id="from"
            type="text"
            value={state.experience.from}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>To:</h3>
          <input
            id="to"
            type="text"
            value={state.experience.to}
            onChange={handleChange}
          />
        </div>
        <div className="tasks-div">
          <h3>Tasks:</h3>
          <textarea
            id="tasks"
            type="text"
            rows="5"
            cols="50"
            value={state.experience.tasks}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Experience</button>
      </form>
    </section>
  );
};

export default Experience;
