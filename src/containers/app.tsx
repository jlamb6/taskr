import { connect } from "react-redux"
import { viewLists } from "../actions/actions"
import App from "../app"

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return { lists: state.lists }
}

const mapDispatchToProps = (dispatch) => {
    return
}

const AppContainer = connect(
    mapStateToProps
)(App)

//export default AppContainer