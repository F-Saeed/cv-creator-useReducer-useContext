import './sass/education.scss';
import './sass/inputs.scss';
import { useContext } from 'react';
import { stateContext, educationContext } from '../App';

const Education = () => {
  const state = useContext(stateContext);
  const { onEduSubmit, onEducationChange } = useContext(educationContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    onEducationChange(currentValue, id);
  };

  return (
    <section className="education">
      <h2>Education</h2>
      <form onSubmit={(event) => onEduSubmit(event)}>
        <div>
          <h3>School Name:</h3>
          <input
            id="schoolName"
            type="text"
            value={state.education.schoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Major:</h3>
          <input
            id="major"
            type="text"
            value={state.education.major}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Starting Year:</h3>
          <input
            id="start"
            type="text"
            value={state.education.start}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Graduation Year:</h3>
          <input
            id="end"
            type="text"
            value={state.education.end}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Information</button>
      </form>
    </section>
  );
};

export default Education;
