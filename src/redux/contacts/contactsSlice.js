import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    formSubmit: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      //   этот способ если initialState: [], а не initialState: { contacts: [] }
      //   const index = state.findIndex(contact => contact.id === action.payload);
      //   state.splice(index, 1);

      // если initialState: [], то нужно указывать явный возврат через ретерн
      //  return (state = state.filter(contact => contact.id !== action.payload));

      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { formSubmit, deleteContact } = contactsSlice.actions;
