import { createStore } from "redux";
import { Forecast } from "../../types/Forecast";
import Reducer from "../reducers";

const initialState: Forecast = {
    cod: '',
    message: 0,
    cnt: 0,
    list: [],
    city: {
        id: 0,
        name: '',
        coord: {
            lat: 0,
            lon: 0,
        },
        country: '',
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
    }
}

const configureStore:any = createStore(Reducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() )

export default configureStore