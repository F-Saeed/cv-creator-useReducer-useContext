import './sass/inputs.scss';
import { useContext } from 'react';
import { cvContext } from './CVContextProvider';

const GeneralInfoInputs = (props) => {
  const { name, id } = props;
  const { state, onInfoChange } = useContext(cvContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;
    onInfoChange(currentValue, id);
  };

  return (
    <div className='general-input'>
      <h3>{name}:</h3>
      <input id={id} value={state.generalInfo[id]} onChange={handleChange} />
    </div>
  );
};

export default GeneralInfoInputs;
