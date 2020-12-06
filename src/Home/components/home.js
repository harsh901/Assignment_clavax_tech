import React, { Children } from 'react';
import './home.css';
import ApplicationComponent from "./applitionComponent";
import { Button, Modal } from "react-bootstrap";

class Home extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			toggle:false,
			show:false,
			setShow:false
		}
	}
	componentDidMount() {
		this.props.GetData()
	}
	studentdata = (data) => {
		let myData = []
		Object.keys(data)
		.forEach(function eachKey(key) {
			myData.push(key, "-",data[key])
		})
		alert(myData)
		// /alert(JSON.stringify(data))
	}

	render() {
		return (
			<div className="bgcl col-12">
				<h1>Application Form</h1>
				<ApplicationComponent formSubmit={this.props.formSubmit}/>
				<div className="table-responsive thumbnail" style={{marginbottom: '0px'}}>
					<table className="table table-condensed table-striped" style={{marginbottom: '0px'}}>
						<thead>
							<tr>
								<th>Sno.</th>
								<th>Student Name</th>
								<th>Email</th>
								<th>phone</th>
								<th>class</th>
								<th>Marks %</th>
								{/* <th>edit</th> */}
							</tr>
						</thead>
						{this.props.data.length!==undefined && this.props.data.map((item,i) => {
							return (
								item!==null && item.map((data,id) => {
									return (
										<tbody>
											<tr>
												<td>{id+1}</td>
												<span className="myClickableThingy" onClick={() => this.studentdata(data)}>{data.studentName}</span>
												<td>{data.email}</td>
												<td>{data.phone}</td>
												<td>{data.city}</td>
												<td>{data.percentage}</td>
												{/* <td>
													<button onClick={()=> this.props.EditData(data)}>edit</button>
												</td> */}
												<td>
												</td>
											</tr>
										</tbody>
									)
								})
							)
						})}	
					</table>
				</div>
			</div>
		)
	}
}
export default Home;