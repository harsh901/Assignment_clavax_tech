import React, { Children } from 'react';
import './home.css';
import ApplicationComponent from "./applitionComponent";

class Home extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			toggle:false
		}
	}
	componentDidMount() {
		this.props.GetData()
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
								<th>edit</th>
							</tr>
						</thead>
						{this.props.data.length!==undefined && this.props.data.map((item,i) => {
							return (
								item!==null && item.map((data,id) => {
									return (
										<tbody>
											<tr>
												<td>{id}</td>
												<td>{data.studentName}</td>
												<td>{data.email}</td>
												<td>{data.phone}</td>
												<td>{data.city}</td>
												<td>{data.marksPercent}</td>
												<td>
													<button onClick={()=> this.props.EditData(data)}>edit</button>
												</td>
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