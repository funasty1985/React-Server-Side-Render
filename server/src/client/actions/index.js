export const FETCH_USERS = 'fetch_user';        
export const fetchUsers = () => async (dispatch, getState, api ) => {   // api referred to the axios instance from the client or server
    const res = await api.get('/users') 

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
};