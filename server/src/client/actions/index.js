export const FETCH_USERS = 'fetch_user';        
export const fetchUsers = () => async (dispatch, getState, api ) => {   // api referred to the axios instance from the client or server
    console.log('fetchUser is called')
    const res = await api.get('/users') 

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    })
};

export const FETCH_ADMIN = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');

    dispatch({
        type: FETCH_ADMIN,
        payload: res
    });
};