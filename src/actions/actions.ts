// action types
export const ADD_TASK = "ADD_TASK"
export const VIEW_TASK = "VIEW_TASK"
export const EDIT_TASK_TITLE = "EDIT_TASK_TITLE"
export const GRAB_TASK_DETAILS = "GRAB_TASK_DETAILS"

export const VIEW_LISTS = "VIEW_LISTS"
export const ADD_LIST = "ADD_LIST"
export const SORT = "SORT"
export const SORT_LIST = "SORT_LIST"

export const VIEW_BOARD = "VIEW_BOARD"
export const TOGGLE_MENU = "TOGGLE_MENU"

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const APPLY_OVERLAY = "APPLY_OVERLAY"

// other constants
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// action creators
export function addTask(title, listId) {
    return { type: ADD_TASK, title, listId }
}

export function grabTask(id) {
    return { type: GRAB_TASK_DETAILS, id }
}

export function editTaskTitle(taskId, listId, title) {
    return { type: EDIT_TASK_TITLE, taskId, listId, title }
}

export function addList(title) {
    return { type: ADD_LIST, title }
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

export function toggleMenu(isMenuOpen: boolean) {
    return { type: TOGGLE_MENU, isMenuOpen}
}

/*
    @param
    listIdStart = droppableIdStart,
    listIdEnd = droppableIdEnd,
    indexStart = droppableIndexStart,
    indexEnd = droppableIndexEnd,
    taskId = draggableId
*/
export function sort(listIdStart, listIdEnd, indexStart, indexEnd, taskId) {
    return { type: SORT, listIdStart, listIdEnd, indexStart, indexEnd, taskId }
}

export function sortList(startIndex, endIndex, listId) {
    return { type: SORT_LIST, startIndex, endIndex, listId }
}

export function applyOverlay(target: HTMLHtmlElement, containerType: string, cardId: string, listId: string, isOverlayApplied: Boolean) {
    return { type: APPLY_OVERLAY, target, containerType, cardId, listId, isOverlayApplied }
}
