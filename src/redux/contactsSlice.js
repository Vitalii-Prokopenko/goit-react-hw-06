import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(value) {
        return {
          payload: {
            id: nanoid(),
            name: value.name,
            number: value.number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
