import {createStore} from 'redux';
import reducer from '../reducers/index';

const initialState = {
    page : 1,
    crieteriaType: "Name",
    genreValue: "Drama",
    searchValue: "",
    ids: [],
    options: [],
    id: 1
} 

const store = createStore(reducer, initialState);

export default store;