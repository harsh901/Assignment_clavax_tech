import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {formSubmit,GetData,EditData} from "./modules/homeReducer";
import Home from "./components/home";

const mapStateToProps = (state) => {
	return {
		fetching:state.home.fetching,
		receivingList:state.home.receivingList,
		error:state.home.error,
		data:state.home.data,
		edit:state.home.edit
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		formSubmit:(data) => dispatch(formSubmit(data)),
		GetData:() => dispatch(GetData()),
		EditData:(value) => dispatch(EditData(value))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home));