import { SET_VISIBILITY_FILTER, VisibilityFilters, ADD_LIST, VIEW_LISTS, GRAB_TASK_DETAILS, VIEW_BOARD } from '../actions/actions'
import { ADD_TASK, SORT } from "../actions/actions"
import { combineReducers } from 'redux'
import { object } from '../../../../../Microsoft/TypeScript/3.5/node_modules/@types/prop-types';

const dateOne = new Date("9/1/2019");

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    board: {
        id: "111",
        name: "Web Development",
        desc: "This board is for project management relating to software development",
        members: [
            "Jake Lamb"
        ],
        user: {
            id: "43234",
            name: "Jacob Lamb",
            initials: "JL"
        },
    },
    lists: {
        curListID: 11111,
        curTaskID: 11111,
        lists: [
            {
                name: "In Progress",
                id: "123",
                boardPosition: "1",
                tasks: [
                    {
                        id: "1233",
                        title: "Go to store",
                        dateCreated: dateOne,
                        members: ["Jake Lamb"],
                        activity: [`Created on ${dateOne}.`],
                        checklist: []
                    },
                    {
                        id: "1234",
                        title: "Work on homework",
                        dateCreated: dateOne,
                        members: ["Jake Lamb"],
                        activity: [`Created on ${dateOne}.`],
                        checklist: []
                    },
                    {
                        id: "12345",
                        title: "Go to work",
                        dateCreated: dateOne,
                        members: ["Jake Lamb"],
                        activity: [`Created on ${dateOne}.`],
                        checklist: []
                    }
                ]
            },
            {
                name: "Complete",
                id: "124",
                boardPosition: "2",
                tasks: [
                    {
                        id: "11234",
                        title: "Go to church",
                        dateCreated: dateOne,
                        members: ["Jake Lamb"],
                        activity: [`Created on ${dateOne}.`],
                        checklist: []
                    },
                    {
                        id: "11235",
                        title: "Sleeeeeeep",
                        dateCreated: dateOne,
                        members: ["Jake Lamb"],
                        activity: [`Created on ${dateOne}.`],
                        checklist: []
                    }
                ]
            }
        ]
    }
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

function board(state = initialState.board, action) {
    switch (action.type) {
        case VIEW_BOARD:
            return state
        default:
            return state
    }
}

function lists(state = initialState.lists, action) {
    switch (action.type) {
        case ADD_LIST:
            const newList = {
                name: action.title,
                id: `${state.curListID++}`,
                tasks: []
            }
            console.log("logging from add list reducer")
            console.log(newList);
            return Object.assign({}, state, {lists: [...state.lists, newList]})
        case ADD_TASK:
            const newTask = {
                id: `${state.curTaskID++}`,
                title: action.title,
                dateCreated: dateOne,
                members: [],
                activity: [`Created on ${dateOne}.`],
                checklist: []
            }
            const newListArr = state.lists.map(list => {
                if (list.id === action.listId) {
                    list.tasks.push(newTask);
                }
                return list;
            });
            console.log("logging from add task reducer")
            console.log(newListArr);
            return Object.assign({}, state, {lists: newListArr})
        case SORT:
            const changedList = (action.listIdStart === action.listIdEnd) ? false : true;
            if (changedList) {
                //update both lists
                let startList = state.lists.filter(list => list.id === action.listIdStart)[0];
                let endList = state.lists.filter(list => list.id === action.listIdEnd)[0];
                const task = startList.tasks.slice(action.indexStart, action.indexStart + 1);
                startList.tasks.splice(action.indexStart, 1);
                endList.tasks.splice(action.indexEnd, 0, ...task);
                const newState = state.lists.map(list => {
                    if (list.id === action.listIdStart) return startList;
                    else if (list.id === action.listIdEnd) return endList;
                    else return list;
                });
                return Object.assign({}, state, {lists: newState})
            }
            else {
                //update one list and return
                let curList = state.lists.filter(list => list.id === action.listIdStart)[0];
                const task = curList.tasks.slice(action.indexStart, action.indexStart + 1);
                curList.tasks.splice(action.indexStart, 1);
                curList.tasks.splice(action.indexEnd, 0, ...task);
                const newState = state.lists.map(list => {
                    if (list.id === action.listIdStart) return curList;
                    else return list;
                });
                return Object.assign({}, state, {lists: newState})
            }
        default:
            return state
    }
}

const taskApp = combineReducers({
  visibilityFilter,
  lists,
  board
})

export default taskApp