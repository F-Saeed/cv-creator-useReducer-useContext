import React, { useReducer } from 'react';
import { reducer } from './jsComponents/reducer';
import patterns from './jsComponents/patterns';

const cvContext = React.createContext();

const initialState = {
  generalInfo: {
    name: '',
    email: '',
    telephone: '',
    github: '',
    linkedin: '',
  },
  education: {
    schoolName: '',
    major: '',
    educationStart: '',
    educationEnd: '',
  },
  educationData: [],
  experience: {
    companyName: '',
    position: '',
    from: '',
    to: '',
    expDescr: '',
  },
  experienceData: [],
  project: {
    projectName: '',
    institution: '',
    projectStart: '',
    projectEnd: '',
    projectDescr: '',
  },
  projectsData: [],
};

const CVContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onInfoChange = (currentValue, id) => {
    if ((patterns[id] && currentValue.match(patterns[id])) || !patterns[id]) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    }
  };

  const onEduSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'eduSubmit' });
  };

  const onDeleteEdu = (type, payload) => {
    dispatch({ type, payload });
  };

  const onExpSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'expSubmit' });
  };

  const onDeleteExp = (type, payload) => {
    dispatch({ type, payload });
  };

  const onProjSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'projSubmit' });
  };

  const onDeleteProj = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <cvContext.Provider
      value={{
        state,
        onInfoChange,
        onEduSubmit,
        onExpSubmit,
        onDeleteEdu,
        onDeleteExp,
        onProjSubmit,
        onDeleteProj,
      }}
    >
      {props.children}
    </cvContext.Provider>
  );
};

export { initialState, cvContext, CVContextProvider };
