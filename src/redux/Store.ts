import { configureStore } from '@reduxjs/toolkit';
import sliceTransition from "../redux/sliceTransition"

const store = configureStore({
    reducer: {
        totais: sliceTransition,
    },
});

export default store;