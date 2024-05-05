import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: ["Selena"],
};

interface ReservationState {
  value: string[];
}

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (
      state: ReservationState,
      action: PayloadAction<string>
    ) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
