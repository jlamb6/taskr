import { SET_VISIBILITY_FILTER, VisibilityFilters, ADD_LIST } from '../actions/actions'
import { ADD_TASK } from "../actions/actions"
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          taskTitle: action.taskTitle,
          completed: false
        }
      ]
    default:
      return state
  }
}

function lists(state = [], action) {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                {
                    listTitle: action.listTitle,
                    boardPosition: "1"
                }
            ]
        default:
            return state
    }
}

const taskApp = combineReducers({
  visibilityFilter,
  tasks,
  lists
})

export default taskApp