import {INCREMENT} from './Constants';

initState = {
  count: 0,
};
export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};
