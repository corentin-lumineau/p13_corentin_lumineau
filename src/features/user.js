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

export function editUserInformations(firstName, lastName, e) {
   
    e.preventDefault()
    return async(dispatch, getState) => {
        const token = getState().login.token

        try {
            const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
                            method: "PUT",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`
                            },
                            body: JSON.stringify({firstName: firstName, lastName: lastName}) 

            })
           
            const data = await response.json()
            
            dispatch(actions.setInformations(data))
        } catch(error) {
            console.log(error)
        }
    }
}

const initialState = {
    firstName: '',
    lastName: '',
}

const {actions, reducer} = createSlice({
    name: "user",
    initialState,
    reducers: {
        getInformations: {
            reducer: (draft, action) => {
                draft.firstName = action.payload.body.firstName
                draft.lastName = action.payload.body.lastName
            }
        },
        setInformations: {
            reducer: (draft, action) => {
                draft.firstName = action.payload.body.firstName
                draft.lastName = action.payload.body.lastName
            }
        }
    }

})

export default reducer