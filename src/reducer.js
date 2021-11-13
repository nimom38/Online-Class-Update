export const initialState = {
  assignment_navbar: 'upcoming',
  exams_navbar: 'upcoming'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ASSIGNMENT_NAVBAR':
      return {
        ...state,
        assignment_navbar: action.item,
      }
    case 'TOGGLE_EXAMS_NAVBAR':
      return {
        ...state,
        exams_navbar: action.item,
      }
    default:
      return state
  }
}

export default reducer
