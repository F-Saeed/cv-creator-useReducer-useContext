import React, { useReducer, useRef } from 'react';
import { reducer } from './components/reducer';
import { useReactToPrint } from 'react-to-print';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
    educationStart: '',
    educationEnd: '',
  },
  educationData: [],
  experience: {
    id: uniqid(),
    companyName: '',
    position: '',
    from: '',
    to: '',
    expDescr: '',
  },
  experienceData: [],
  projects: {
    id: uniqid(),
    projectName: '',
    institution: '',
    projectStart: '',
    projectEnd: '',
    projectDescr: '',
  },
  projectsData: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
    } else if (id === 'github') {
      dispatch({
        type: id,
        field: id,
        payload: { github: currentValue },
      });
    } else if (id === 'linkedin') {
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
    } else if (id === 'educationStart' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { educationStart: currentValue },
      });
    } else if (id === 'educationEnd' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { educationEnd: currentValue },
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
    } else if (id === 'from' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { from: currentValue },
      });
    } else if (id === 'to' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { to: currentValue },
      });
    } else if (id === 'expDescr') {
      dispatch({
        type: id,
        field: id,
        payload: { expDescr: currentValue },
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
    if (id === 'projectName' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { projectName: currentValue },
      });
    } else if (
      id === 'institution' &&
      currentValue.match(/^[a-zA-Z- ]{0,70}$/)
    ) {
      dispatch({
        type: id,
        field: id,
        payload: { institution: currentValue },
      });
    } else if (id === 'projectStart' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { projectStart: currentValue },
      });
    } else if (id === 'projectEnd' && currentValue.match(/^\d{0,4}$/)) {
      dispatch({
        type: id,
        field: id,
        payload: { projectEnd: currentValue },
      });
    } else if (id === 'projectDescr') {
      dispatch({
        type: id,
        field: id,
        payload: { projectDescr: currentValue },
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
          onProjectChange,
          onProjSubmit,
          onDeleteProj,
        }}
      >
        <div className="main-form">
          <h1>CV Creator</h1>

          <GeneralInfo />
          <Education />
          <Experience />
          <Projects />
        </div>
        <Preview ref={componentRef} />
      </cvContext.Provider>
      <button id="print" onClick={handlePrint}>
        Download PDF
      </button>
    </div>
  );
};

export default App;
