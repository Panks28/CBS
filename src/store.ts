import carsReducer from "./Reducers/carsReducer";
import {createStore} from "redux"


const store = createStore(carsReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>