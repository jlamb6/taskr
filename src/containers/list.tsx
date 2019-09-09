import { connect } from "react-redux"
import { viewTask } from "../actions/actions"
import List from "../components/list/list"

const mapStateToProps = (state, listId) => {
    return {
        tasks: state.tasks.map(cur => cur.listId === listId)
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