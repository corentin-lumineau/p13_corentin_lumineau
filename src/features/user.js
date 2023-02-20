import { createSlice } from '@reduxjs/toolkit';



export function setUserInformations() {
    return async (dispatch, getState) => {
        const token = getState().login.token

        try {
            const response =   await fetch(`http://localhost:3001/api/v1/user/profile`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Authorization': `Bearer ${token}`
                                },
                                })
            const data =  await response.json()
            dispatch(actions.getInformations(data))
        } catch(error) {
            dispatch(actions.rejected(error))
        }
    }
}

const initialState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
}

const {actions, reducer} = createSlice({
    name: "user",
    initialState,
    reducers: {
        getInformations: {
            reducer: (draft, action) => {
                debugger;
             /*    draft.email = 
                draft.firstName =
                draft.lastName =
                draft.password =  */
            }
        }
    }

})

export default reducer