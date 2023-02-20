import { createSlice } from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';


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

 export const authMiddleware = (store) => (next) => (action) => {
  
/*      if (actions.resolved.match(action)) {
        localStorage.setItem('isAuthenticated', 'true');
    } else if (actions.signOut.match(action)) {
        localStorage.setItem('isAuthenticated', 'false')
    }  */
    return next(action)
}

const initialState = {
  token: "",
  status: "void"
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
                /*Ici je récupère le résultat de l'action connect dans action.payload (qui est pour le moment une promise donc inutilisable en l'état) 
                et je met à jour le state token puis je redirige vers la page du user.
                En cas d'erreur, je renvoie un message d'erreur (pas demandé mais gérable) */
               draft.status = 'resolved'
               draft.token = action.payload.result.body.token
               
            }
        },
        rejected: {
            prepare: (result) => ({
                payload: { result }
            }),
            reducer: (draft, action) => {
                draft.status = 'rejected'
            }
        },
        logOut: {
            reducer: (draft, action) => {
                draft.token = ''
                draft.status = 'void'
            }
        }
    }
})

export default reducer;