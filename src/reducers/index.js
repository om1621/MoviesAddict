export default (state , action) => {
    
    switch(action.type){
        case "SET_SEARCHVALUES": 
            return {
                ...state,
                crieteriaType: action.payload.crieteriaType,
                genreValue: action.payload.genreValue,
                searchValue: action.payload.searchValue,
            };

        case "SET_IDS": 
            return {
                ...state,
                ids: action.payload.ids
            };

        case "SET_MOVIE": 
            return {
                ...state,
                id: action.payload.id
            };

        default:
            return state;
    }
}