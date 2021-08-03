import uniqid from 'uniqid';
import { initialState } from '../App';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'field': {
      return { ...state, [action.field]: action.payload };
    }
    case 'name': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'email': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'telephone': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'linkedin': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'github': {
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          ...action.payload,
        },
      };
    }
    case 'schoolName': {
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    }
    case 'major': {
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    }
    case 'start': {
      return {
        ...state,
        education: {
          ...state.education,
          ...action.payload,
        },
      };
    }
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
    case 'companyName': {
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };
    }
    case 'position': {
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };
    }
    case 'from': {
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };
    }
    case 'to': {
      return {
        ...state,
        experience: {
          ...state.experience,
          ...action.payload,
        },
      };
    }
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
