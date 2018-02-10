import * as actionTypes from './actions';

const initialState = {
  persons: [],
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      const newPerson = {
        id: Date.now(),
        name: action.personData.name,
        age: action.personData.age,
      };

      return {
        persons: [...state.persons, newPerson],
      };
    case actionTypes.REMOVE_PERSON:
      return {
        persons: state.persons.filter(person => person.id !== action.personId),
      };
    default:
      return state;
  }
};

export default personsReducer;
