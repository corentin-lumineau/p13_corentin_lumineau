export const selectToken = (state) => state.login.token
export const selectUserFirstName = (state) => {
  
   return  state.user.firstName
}
export const selectUserLastName = (state) => state.user.lastName
export const selectErrorMessage = (state) => state.login.errorMessage