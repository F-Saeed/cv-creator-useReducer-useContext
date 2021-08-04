import React, { useReducer } from 'react';
import { reducer } from './components/reducer';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './components/sass/App.scss';
import './components/sass/mainForm.scss';
import './components/sass/buttons.scss';

export const cvContext = React.createContext();

export const initialState = {
  generalInfo: {
    name: '',
    email: '',
    telephone: '',
    github: '',
    linkedin: '',
  },
  education: {
    id: uniqid(),
    schoolName: '',
    major: '',
    start: '',
    end: '',
  },
  educationData: [],
  experience: {
    id: uniqid(),
    companyName: '',
    position: '',
    from: '',
    to: '',
    tasks: '',
  },
  experienceData: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onGeneralInfoChange = (currentValue, id) => {
    if (id === 'telephone' && currentValue.match(/^\d{0,14}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { telephone: currentValue },
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
        payload: { email: currentValue },
      });
    } else if (
      id === 'github' &&
      currentValue.match(/^[A-Za-z0-9./-]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { github: currentValue },
      });
    } else if (
      id === 'linkedin' &&
      currentValue.match(/^[A-Za-z0-9./-]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { linkedin: currentValue },
      });
    }
  };

  const onEducationChange = (currentValue, id) => {
    if (id === 'schoolName' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { schoolName: currentValue },
      });
    } else if (id === 'major' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { major: currentValue },
      });
    } else if (id === 'start' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { start: currentValue },
      });
    } else if (id === 'end' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { end: currentValue },
      });
    }
  };

  const onEduSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'eduSubmit' });
  };

  const onExperienceChange = (currentValue, id) => {
    if (id === 'companyName' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { companyName: currentValue },
      });
    } else if (id === 'position' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { position: currentValue },
      });
    } else if (id === 'to' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { to: currentValue },
      });
    } else if (id === 'from' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { from: currentValue },
      });
    } else if (id === 'tasks') {
      dispatch({
        type: id,
        field: id,
        payload: { tasks: currentValue },
      });
    }
  };

  const onExpSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'expSubmit' });
  };

  const onDeleteEdu = (eduID) => {
    dispatch({
      type: 'eduDelete',
      payload: eduID,
    });
  };

  const onDeleteExp = (expID) => {
    dispatch({
      type: 'expDelete',
      payload: expID,
    });
  };

  return (
    <div className="App">
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
        }}
      >
        <div className="main-form">
          <h1>CV Creator</h1>

          <GeneralInfo />
          <Education />
          <Experience />
        </div>
        <Preview />
      </cvContext.Provider>
    </div>
  );
};

export default App;
