import { useRef } from 'react';
import { CVContextProvider } from './components/CVContextProvider';
import { useReactToPrint } from 'react-to-print';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Preview from './components/Preview';
import './components/sass/App.scss';
import './components/sass/mainForm.scss';
import './components/sass/buttons.scss';

const App = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='App'>
      <CVContextProvider>
        <div className='main-form'>
          <h1>CV Creator</h1>

          <GeneralInfo />
          <Education />
          <Experience />
          <Projects />
        </div>
        <Preview ref={componentRef} />

        <button id='print' onClick={handlePrint}>
          Download PDF
        </button>
      </CVContextProvider>
    </div>
  );
};

export default App;
