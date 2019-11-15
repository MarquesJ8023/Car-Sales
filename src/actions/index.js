import * as types from '../Actiontypes';

export const addItem = (item) => {
  console.log('action creator was invoked');
  return { type: types.ADD_FEATURE, payload: item };
};

// write an action creator for update title
export const removeItem = item => {
  return {
    type: types.REMOVE_FEATURE,
    payload: item
  };
};
