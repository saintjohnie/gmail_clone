import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const {
  openSendMessage,
  closSendMessage,
  selectedMail,
} = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedEmail = (state) => state.mail?.selectedMail;

export default mailSlice.reducer;
