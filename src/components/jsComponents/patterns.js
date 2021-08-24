const patterns = {
  name: /^[a-zA-Z ]{0,25}$/,
  telephone: /^\d{0,14}$/,
  email: /^[A-Za-z@0-9.]{0,70}$/,
  schoolName: /^[a-zA-Z- ]{0,70}$/,
  major: /^[a-zA-Z- ]{0,70}$/,
  educationStart: /^\d{0,4}$/,
  educationEnd: /^\d{0,4}$/,
  companyName: /^[a-zA-Z- ]{0,70}$/,
  position: /^[a-zA-Z- ]{0,70}$/,
  from: /^\d{0,4}$/,
  to: /^\d{0,4}$/,
  projectName: /^[a-zA-Z- ]{0,70}$/,
  institution: /^[a-zA-Z- ]{0,70}$/,
  projectStart: /^\d{0,4}$/,
  projectEnd: /^\d{0,4}$/,
};

export default patterns;
