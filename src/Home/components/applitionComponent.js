import React from 'react';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName:'',
            fatherName:'',
            dob:'',
            address:'',
            city:'',
            state:'',
            phone:'',
            email:'',
            marksPercent:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        console.log(this.state.studentName)
        return (
            <div>
                <form>
                    <label>
                        StudentName
                            <input type="text" name="studentName" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        fatherName
                            <input type="text" name="fatherName" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        Address
                            <input type="text" name="address" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        City
                            <input type="text" name="city" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        state
                            <input type="text" name="state" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        email
                            <input type="text" name="email" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        phone
                            <input type="number" name="phone" pattern="[0-9]*" inputmode="numeric" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                    <label>
                        Percentage
                            <input type="number" name="marksPercent" onChange={(e) => this.handleChange(e)}/>
                    </label><br/>
                </form>
                <button onClick={() => this.props.formSubmit(this.state)}>Submit</button>
            </div>
        )
    }
}
export default ApplicationComponent;