import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "contact/add":
      return {
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
        filters: {
          name: state.filters.name,
        },
      };
      case "contact/delete":
      return {
        contacts: {
          items: action.payload,
        },
        filters: {
          name: state.filters.name,
        },
      };
      case "filter/change":
      return {
        contacts: {
          items: state.contacts.items,
        },
        filters: {
          name: action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
