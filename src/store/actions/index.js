// export function updateProfileParam(paramName) {
//   return {
//     type: 'PROFILE_SAVED',
//     payload: { paramName }
//   }
// }

export function updateProfileParam(paramName, value) {
  return {
    type: 'PARAM_UPDATED',
    payload: { paramName, value }
  }
}
