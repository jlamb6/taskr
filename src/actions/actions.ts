// action types
export const ADD_TASK = "ADD_TASK"
export const VIEW_TASK = "VIEW_TASK"
export const GRAB_TASK_DETAILS = "GRAB_TASK_DETAILS"

export const VIEW_LISTS = "VIEW_LISTS"
export const ADD_LIST = "ADD_LIST"

export const VIEW_BOARD = "VIEW_BOARD"

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// other constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action creators
export function addTask(taskTitle) {
    return { type: ADD_TASK, taskTitle }
}

export function grabTask(id) {
    return { type: GRAB_TASK_DETAILS, id }
}

export function addList(listTitle) {
    return { type: ADD_LIST, listTitle }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function viewTask(id) {
    return { type: VIEW_TASK, id }
}

export function viewLists(lists) {
    return {type: VIEW_LISTS, lists }
}

export function viewBoard(id) {
    return { type: VIEW_BOARD, id }
}