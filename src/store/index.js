import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './ducks/cart';
import layoutReducer from './ducks/layout';

export default configureStore({
    reducer: {
        cart: cartReducer,
        layout: layoutReducer
    }
});