export const SET_LOADING = "@@details/SETLOADING"
export const SET_ERROR = "@@details/ST_ERROR"
export const SET_COUNTRY = "@@details/SETCOUNTRY"
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS"
export const SET_NEIGHBOURS = "@@details/GET_NEIGHBOURS"


const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
})

const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

const setNeighbours = (countries) => ({
    type: SET_NEIGHBOURS,
    payload: countries,
})


export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
     dispatch(setLoading())

     client.get(api.searchByCountry(name))
     .then(({data}) => dispatch(setCountry(data[0])))
     .catch((err) => dispatch(setError(err.message)))
}


export const loadNeighboursByBorder = (borders) => (dispatch, _, {client, api}) => {
    
    client.get(api.filterByCode(borders))
    .then(({data}) => {dispatch(setNeighbours(data.map((c)=> c.name)))})
    .catch(console.error)
}