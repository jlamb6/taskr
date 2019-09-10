import { SET_VISIBILITY_FILTER, VisibilityFilters, ADD_LIST, VIEW_LISTS, GRAB_TASK_DETAILS } from '../actions/actions'
import { ADD_TASK } from "../actions/actions"
import { combineReducers } from 'redux'

const initialState = {
    lists: [
        {
            name: "In Progress",
            id: "123",
            boardPosition: "1",
            tasks: [
                "123", "234", "345"
            ]
        },
        {
            name: "In Queue",
            id: "1234",
            boardPosition: "2",
            tasks: [
                "234", "345"
            ]
        }
    ],
    tasks: [
        {
            id: "123",
            title: "Go to store"
        },
        {
            id: "234",
            title: "Buy Milk"
        },
        {
            id: "345",
            title: "Pick up drugs"
        }
    ]
}

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function tasks(state = initialState.tasks, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          taskTitle: action.taskTitle,
          completed: false
        }
      ]
    case GRAB_TASK_DETAILS:
        return [
            {
                task: state.filter(cur => cur.id === action.id)[0]
            }
        ]
    default:
      return state
  }
}

function lists(state = initialState.lists, action) {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                {
                    name: action.listTitle
                }
            ]
        case VIEW_LISTS:
            return [
                ...state
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