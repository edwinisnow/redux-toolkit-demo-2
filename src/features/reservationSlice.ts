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
  },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
