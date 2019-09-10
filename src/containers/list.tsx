import { connect } from "react-redux"
import { viewTask } from "../actions/actions"
import List from "../components/list/list"

const mapStateToProps = (state, listId) => {    
    const list = state.lists.map(cur => cur.listId === listId)[0];
    return {
        tasks: state.tasks.map(cur => list.tasks.includes(cur.id))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskClick: id => {
            dispatch(viewTask(id))
        }
    }
}

const TaskList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List)

export default TaskList