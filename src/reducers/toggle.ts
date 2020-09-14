export function toggleReducer(state: any, action: { type: any }) {
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