import uniqid from 'uniqid';
import { initialState } from '../App';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'field': {
      return { ...state, [action.field]: action.payload };
    }
    case 'name':
    case 'email':
    case 'telephone':
    case 'linkedin':
    case 'github': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'schoolName':
    case 'major':
    case 'educationStart':
    case 'educationEnd': {
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    }
    case 'eduSubmit': {
      return {
        ...state,
        educationData: [...state.educationData, state.education],
        education: {
          ...initialState.education,
          id: uniqid(),
        },
      };
    }
    case 'eduDelete': {
      return {
        ...state,
        educationData: state.educationData.filter(
          (edu) => edu.id !== action.payload
        ),
      };
    }
    case 'companyName':
    case 'position':
    case 'from':
    case 'to':
    case 'expDescr': {
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };
    }
    case 'expSubmit': {
      console.log(state);
      return {
        ...state,
        experienceData: [...state.experienceData, state.experience],
        experience: {
          ...initialState.experience,
          id: uniqid(),
        },
      };
    }
    case 'expDelete': {
      console.log(state);
      return {
        ...state,
        experienceData: state.experienceData.filter(
          (exp) => exp.id !== action.payload
        ),
      };
    }
    case 'projectName':
    case 'institution':
    case 'projectStart':
    case 'projectEnd':
    case 'projectDescr': {
      return {
        ...state,
        projects: {
          ...state.projects,
          ...action.payload,
        },
      };
    }
    case 'projSubmit': {
      console.log(state);
      return {
        ...state,
        projectsData: [...state.projectsData, state.projects],
        projects: {
          ...initialState.projects,
          id: uniqid(),
        },
      };
    }
    case 'projDelete': {
      console.log(state);
      return {
        ...state,
        projectsData: state.projectsData.filter(
          (proj) => proj.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
