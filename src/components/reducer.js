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
    case 'start':
    case 'end': {
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
    case 'tasks': {
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
          (edu) => edu.id !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
