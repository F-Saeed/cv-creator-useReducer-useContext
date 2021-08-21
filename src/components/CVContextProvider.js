import React, { useReducer } from 'react';
import { reducer } from './reducer';

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

  const onGeneralInfoChange = (currentValue, id) => {
    if (id === 'telephone' && currentValue.match(/^\d{0,14}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (id === 'name' && currentValue.match(/^[a-zA-Z ]{0,25}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { name: currentValue },
      });
    } else if (id === 'email' && currentValue.match(/^[A-Za-z@0-9.]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (id === 'github' || id === 'linkedin') {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    }
  };

  const onEducationChange = (currentValue, id) => {
    if (
      (id === 'schoolName' || id === 'major') &&
      currentValue.match(/^[a-zA-Z- ]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (
      (id === 'educationStart' || id === 'educationEnd') &&
      currentValue.match(/^\d{0,4}$/)
    ) {
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

  const onDeleteEdu = (eduID) => {
    dispatch({
      type: 'eduDelete',
      payload: eduID,
    });
  };

  const onExperienceChange = (currentValue, id) => {
    if (
      (id === 'companyName' || id === 'position') &&
      currentValue.match(/^[a-zA-Z- ]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (
      (id === 'from' || id === 'to') &&
      currentValue.match(/^\d{0,4}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (id === 'expDescr') {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    }
  };

  const onExpSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'expSubmit' });
  };

  const onDeleteExp = (expID) => {
    dispatch({
      type: 'expDelete',
      payload: expID,
    });
  };

  const onProjectChange = (currentValue, id) => {
    if (
      (id === 'projectName' || id === 'institution') &&
      currentValue.match(/^[a-zA-Z- ]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (
      (id === 'projectStart' || id === 'projectEnd') &&
      currentValue.match(/^\d{0,4}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    } else if (id === 'projectDescr') {
      dispatch({
        type: id,
        field: id,
        payload: { [id]: currentValue },
      });
    }
  };

  const onProjSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'projSubmit' });
  };

  const onDeleteProj = (projID) => {
    dispatch({
      type: 'projDelete',
      payload: projID,
    });
  };

  return (
    <cvContext.Provider
      value={{
        state,
        onGeneralInfoChange,
        onEducationChange,
        onEduSubmit,
        onExperienceChange,
        onExpSubmit,
        onDeleteEdu,
        onDeleteExp,
        onProjectChange,
        onProjSubmit,
        onDeleteProj,
      }}
    >
      {props.children}
    </cvContext.Provider>
  );
};

export { initialState, cvContext, CVContextProvider };
