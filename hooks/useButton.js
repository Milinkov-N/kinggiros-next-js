import { useReducer } from 'react'

export default function useButton(defaultClass) {
  const initialState = { classes: [ defaultClass ] }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add-class':
        return { classes: [...state.classes, action.className] }
      case 'remove-class':
        const { classes } = state
        const filteredClasses = classes.filter(className => className !== action.className)
        return { classes: [...filteredClasses] }
      default:
        throw new Error() 
    }
  }

  return useReducer(reducer, initialState)
}