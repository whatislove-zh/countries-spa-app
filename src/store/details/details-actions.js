export const SET_LOADING = "@@details/SETLOADING"
export const SET_ERROR = "@@details/ST_ERROR"
export const SET_COUNTRY = "@@details/SETCOUNTRY"
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS"

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

export const clearDetails = () => ({
    type: CLEAR_DETAILS
})

export const loadCountryByName = (name) => (dispatch, _, {client, api}) => {
     dispatch(setLoading())

     client.get(api.searchByCountry(name))
     .then(({data}) => dispatch(setCountry(data[0])))
     .catch((err) => dispatch(setError(err.message)))
}