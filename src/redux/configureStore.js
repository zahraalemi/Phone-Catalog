import { configureStore } from '@reduxjs/toolkit';
import phoneKatalog from './phoneKatalog';


const store = configureStore({
    reducer:{
        phoneNumber: phoneKatalog
    },
    middleware : {thunk: false}
});

export default store;