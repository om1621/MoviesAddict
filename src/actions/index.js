export const updateSearchValues = (crieteriaType, genreValue, searchValue) => ({
    type: "SET_SEARCHVALUES",
    payload: {
        crieteriaType: crieteriaType,
        genreValue: genreValue,
        searchValue: searchValue
    }
});

export const updateIds = (ids) => ({
    type: "SET_IDS",
    payload: {
       ids: ids
    }
});

export const updateMovie = (id) => ({
    type: "SET_MOVIE",
    payload: {
       id: id
    }
});