// Importing Required Functions
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cart slice reducer

// Configuring the Redux Store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Assign the cart slice to the state
  },
});

// Exporting the Store
export default store;
