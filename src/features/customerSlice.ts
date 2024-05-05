import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CustomerState = {
  value: [],
};

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerPayload {
  id: string;
  food: string;
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
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
