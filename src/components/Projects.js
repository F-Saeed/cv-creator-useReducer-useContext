import './sass/experience&projects.scss';
import './sass/inputs.scss';
import { useContext } from 'react';
import { cvContext } from './CVContextProvider';
import { Editor } from '@tinymce/tinymce-react';

const Projects = () => {
  const { state, onProjSubmit, onProjectChange } = useContext(cvContext);

  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    onProjectChange(currentValue, id);
  };

  const descrHandleChange = (newValue, editor) => {
    onProjectChange(newValue, editor.id);
  };

  return (
    <section className='projects'>
      <h2>Projects</h2>
      <form onSubmit={(event) => onProjSubmit(event)}>
        <div>
          <h3>Project Name:</h3>
          <input
            id='projectName'
            type='text'
            value={state.project.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Institution:</h3>
          <input
            id='institution'
            type='text'
            value={state.project.institution}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Starting Year:</h3>
          <input
            id='projectStart'
            type='text'
            value={state.project.projectStart}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Ending Year:</h3>
          <input
            id='projectEnd'
            type='text'
            value={state.project.projectEnd}
            onChange={handleChange}
          />
        </div>
        <div className='projectDescr-div'>
          <h3>Description:</h3>
          <Editor
            id='projectDescr'
            value={state.project.projectDescr}
            onEditorChange={descrHandleChange}
            apiKey='rlbryazfwlm9gaq1xyg33hn2jvg28o09o1unw7xwijjxawnk'
            tinymceScriptSrc={
              process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'
            }
            init={{
              height: 175,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'bold italic ' + ' bullist numlist',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
        <button type='submit'>Add Project</button>
      </form>
    </section>
  );
};

export default Projects;
