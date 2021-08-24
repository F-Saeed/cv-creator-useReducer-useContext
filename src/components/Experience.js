import './sass/experience&projects.scss';
import './sass/inputs.scss';
import { useContext } from 'react';
import { cvContext } from './CVContextProvider';
import { Editor } from '@tinymce/tinymce-react';

const Experience = () => {
  const { state, onExpSubmit, onInfoChange } = useContext(cvContext);
  const { companyName, position, from, to, expDescr } = state.experience;

  const handleChange = (event) => {
    onInfoChange(event.target.value, event.target.id);
  };

  const descrHandleChange = (newValue, editor) => {
    onInfoChange(newValue, editor.id);
  };

  return (
    <section className='experience'>
      <h2>Work Experience</h2>
      <form onSubmit={(event) => onExpSubmit(event)}>
        <div>
          <h3>Company Name:</h3>
          <input
            id='companyName'
            type='text'
            value={companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Position Title:</h3>
          <input
            id='position'
            type='text'
            value={position}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>From:</h3>
          <input id='from' type='text' value={from} onChange={handleChange} />
        </div>
        <div>
          <h3>To:</h3>
          <input id='to' type='text' value={to} onChange={handleChange} />
        </div>
        <div className='expDescr-div'>
          <h3>Description:</h3>
          <Editor
            id='expDescr'
            value={expDescr}
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
        <button type='submit'>Add Experience</button>
      </form>
    </section>
  );
};

export default Experience;
