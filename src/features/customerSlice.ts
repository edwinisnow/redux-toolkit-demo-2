import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CustomerState = {
  value: [],
};

interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

export default customerSlice.reducer;
