export function toggleReducer(state, action) {
  switch (action.type) {
    case 'ACTIVE': {
      return {
        ...state,
        active: true
      }
    }
    case 'HIDE': {
      return {
        ...state,
        active: false
      }
    }
    default:
      return state
  }
}