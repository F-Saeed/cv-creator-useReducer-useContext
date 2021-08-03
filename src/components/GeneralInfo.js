import GeneralInfoInputs from './GeneralInfoInputs';
import './sass/GeneralInfo.scss';

const GeneralInfo = () => {
  return (
    <section className="general-info">
      <GeneralInfoInputs name="Name" id="name" />
      <GeneralInfoInputs name="Email" id="email" />
      <GeneralInfoInputs name="Phone Number" id="telephone" />
      <GeneralInfoInputs name="LinkedIn" id="linkedin" />
      <GeneralInfoInputs name="Github" id="github" />
    </section>
  );
};

export default GeneralInfo;
