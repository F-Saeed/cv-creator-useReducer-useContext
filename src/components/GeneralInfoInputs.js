import './sass/inputs.scss';
import { useContext } from 'react';
import { stateContext, generalInfoContext } from '../App';

const GeneralInfoInputs = (props) => {
  const { name, id } = props;
  const state = useContext(stateContext);
  const onGenralInfoChange = useContext(generalInfoContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;
    onGenralInfoChange(currentValue, id);
  };

  return (
    <div className="general-input">
      <h3>{name}:</h3>
      <input id={id} value={state.generalInfo[id]} onChange={handleChange} />
    </div>
  );
};

export default GeneralInfoInputs;
