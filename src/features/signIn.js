import { createSlice } from '@reduxjs/toolkit';


/* J'ai pour le moment utilisé la syntaxe ES6 classique du fetch avec la chaîne de fetch pour le traitement asynchrone car je n'arrive pas à faire fonctionner le try/catch qui
serait pourtant plus simple à gérer et plus lisible */
export function logUser(email, password) {
    //Je retourne un thunk pour pouvoir utiliser directement la fonction logUser dans mon composant signin et avoir à disposition le dispatch.
    
    return  (dispatch, getState) => {
      const testFetch = fetch(`http://localhost:3001/api/v1/user/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password}) 
            })
            .then((response) => {
                return  response.json();
            }).then((data) => {
                return data
            })

        // Je stocke dans une variable le traitement de la promise et je retourne le résultat -> problème : dans le reducer le payload arrive en promise

         let result = testFetch.then((data) => {
            /*Je parviens à console.log le token ici -> l'objectif serait de lancer le dispacth de l'action connect avec la data en paramètre
             à ce niveau de traitement de la promise mais la fonction ne se lance pas.
             */
            console.log(data.body);
            return result;
        })
        // Pour le moment j'appelle le dispatch ici mais il devrait se retrouver dans le traitement de la fonction asynchone.
        dispatch(actions.connect(result)) 
    }
   
}

const initialState = {
  token: ""
}


const {actions, reducer } = createSlice({
    name: 'login',
    initialState,
    reducers: {
        connect: {
            prepare: (result) => ({
                payload: { result }
            }),
            reducer: (draft, action) => {
                /*Ici je récupère le résultat de l'action connect dans action.payload (qui est pour le moment une promise donc inutilisable en l'état) 
                et je met à jour le state token puis je redirige vers la page du user.
                En cas d'erreur, je renvoie un message d'erreur (pas demandé mais gérable) */
               debugger;
               
            }
        },
        rejected: {

        }
    }
})

export const { connect } = actions; 
export default reducer;