import { createSlice } from '@reduxjs/toolkit';

export function logUser(email, password, e) {
    e.preventDefault();
    return  async (dispatch, getState) => {
        try {
            const response =   await fetch(`http://localhost:3001/api/v1/user/login`, {
                                method: 'POST',
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({email: email, password: password}) 
                                })
            const data =  await response.json()
            dispatch(actions.resolved(data))
        } catch(error) {
            dispatch(actions.rejected(error))
        }
    }
}

export function signOut(e) {
    e.preventDefault()
    return (dispatch, getState) => {
        const token = getState().login.token
        if(token !== '') {
            dispatch(actions.logOut())
        }
    }
    
}

const initialState = {
  token: "",
  status: "void",
  errorMessage: ""
}


const { actions, reducer } = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resolved: {
            prepare: (result) => ({
                payload: { result }
            }),
            reducer: (draft, action) => {
               draft.status = 'resolved'
               draft.token = action.payload.result.body.token

               if(draft.errorMessage !== "") {
                draft.errorMessage = ""
               }
               
            }
        },
        rejected: {
            prepare: (result) => ({
                payload: { result }
            }),
            reducer: (draft) => {
                draft.status = 'rejected'
                draft.errorMessage = "Nom d'utilisateur ou mot de passe incorrect"
            }
        },
        logOut: {
            reducer: (draft) => {
                draft.token = ''
                draft.status = 'void'
            }
        }
    }
})

export default reducer;