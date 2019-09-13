import { SET_VISIBILITY_FILTER, VisibilityFilters, ADD_LIST, VIEW_LISTS, GRAB_TASK_DETAILS, VIEW_BOARD } from '../actions/actions'
import { ADD_TASK } from "../actions/actions"
import { combineReducers } from 'redux'

const dateOne = new Date("9/1/2019");

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    board: {
        id: "111",
        name: "Web Development",
        desc: "This board is for project management relating to software development",
        members: [
            "Jake Lamb"
        ]
    },
    user: {
        id: "43234",
        name: "Jacob Lamb",
        initials: "JL"
    },
    creatingNewTask: false,
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
        },
        {
            name: "In Queue",
            id: "1235",
            boardPosition: "2",
            tasks: [
                "234", "345"
            ]
        }
    ],
    tasks: [
        {
            id: "123",
            title: "Go to store",
            dateCreated: dateOne,
            members: ["Jake Lamb"],
            activity: [`Created on ${dateOne}.`],
            checklist: []
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

function board(state = { board: initialState.board, user: initialState.user, lists: initialState.lists }, action) {
    switch (action.type) {
        case VIEW_BOARD:
            return state
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
        console.log(`results from action`);
        console.log(state.filter(cur => cur.id === action.id)[0]);
        return [
                state.filter(cur => cur.id === action.id)[0]
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
  lists,
  board
})

export default taskApp