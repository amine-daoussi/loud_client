import { OPEN_TOAST } from './actions';

export default (state, action) => {
  switch (action.type) {
    case OPEN_TOAST:
      return {
        ...state,
        openToast: action.isOpen,
      };
    default:
      return state;
  }
};
