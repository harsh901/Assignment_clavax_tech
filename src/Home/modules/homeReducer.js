import axios from 'axios';
import {url} from "../../config.json";

//---------------------CONSTANTS---------------------------
export const FETCHING_DATA = 'FETCHING_DATA';
export const RECEIVING_DATA = 'RECEIVING_DATA';
export const ERROR = 'ERROR';
export const GET_DATA = 'GET_DATA';
export const EDIT_DATA = "EDIT_DATA";


//--------------------ACTION-------------------------------

export function sendingData(status) {
	return {
		type: FETCHING_DATA,
		fetching: status
	}
}
export function receivingData(response) {
	return {
		type: RECEIVING_DATA,
		receivingData: response
	}
}
export function errorData(status) {
	return {
		type: ERROR,
		error: status
	}
}
export function getData(data) {
	return {
		type:GET_DATA,
		data:data
	}
}
export function editing(value) {
	return {
		type:EDIT_DATA,
		edit:value
	}
}


//------------------------FUNCTION-------------------------
export const formSubmit = (data) => {
	return (dispatch) => {

		let localData = []
		dispatch(sendingData(true));
		if(data) {
			localData.push(data)
			localStorage.setItem('value',JSON.stringify(localData));
			dispatch(receivingData(localData))
			window.location.reload()
			localData = JSON.parse(localStorage.getItem('value')); 
		} else {
			dispatch(errorData(data))
		}
	}
}
 
export const GetData = () => {
	return (dispatch) => {
		let array = [];
		let value = JSON.parse(localStorage.getItem('value'))
		array.push(value)
		dispatch(getData(array))
	}	
}

export const EditData = (data) => {
	console.log(data)
	return (dispatch) => {
		dispatch(editing(data))
	}
}



//----------------------ACTION HANDLERS -------------------
const ACTION_HANDLERS = {
	[FETCHING_DATA]: (state, action) => {
		return {
		  ...state,
		  fetching: action.fetching
		};
	},
	[RECEIVING_DATA]:(state,action) => {
		return {
			...state,
			receivingList:action.receivingList
		}
	},
	[ERROR]:(state,action) => {
		return {
			...state,
			error:action.error
		}
	},
	[GET_DATA]:(state,action) => {
		return {
			...state,
			data:action.data
		}
	},
	[EDIT_DATA]:(state,action) => {
		return {
			...state,
			edit:action.edit
		}
	}
};





//------------------INITIAL STATES-----------------------------

const initialState = {
	fetching:false,
	receivingData:[],
	error:false,
	data:[],
	edit:[]
}


export default function homeReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state,action) :state;
}