import React from 'react';

class ApplicationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation(value){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["studentName"]){
           formIsValid = false;
           errors["studentName"] = "Cannot be empty";
        }
  
        if(typeof fields["studentName"] !== "undefined"){
           if(!fields["studentName"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["studentName"] = "Only letters";
           }        
        }

        // father
        if(!fields["fatherName"]){
            formIsValid = false;
            errors["fatherName"] = "Cannot be empty";
         }
   
         if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z]+$/)){
               formIsValid = false;
               errors["name"] = "Only letters";
            }        
         }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

       //Phone
       if(!fields['phone']) {
           formIsValid = false;
           errors["phone"] = "cannot be empty";
       }
        if(typeof fields["phone"] !== "undefined") {
            var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            console.log("in typeof",filter.test(value.phone))
            if(value.phone.length !== 10) {
                formIsValid = false;
                errors["phone"] = "10 digit number  ";
            }

        }

        //DOB
        if(!fields['dob']) {
            formIsValid = false;
            errors["dob"] = "Date of birth cannot be empty"
        }
        if(typeof fields["dob"] !== "undefined") {
            let date = value.dob
            let myDate = new Date(date);
            console.log(myDate)
            let today = new Date();
            if(myDate > today) {
                formIsValid = false;
                errors['dob'] = "please enter valid date of birth"
            }
        }

        // Date Enrolled
        if(!fields['dateEnrolled']) {
            formIsValid = false;
            errors["dateEnrolled"] = "Date cannot be empty"
        }
        if(typeof fields["dateEnrolled"] !== "undefined") {
            let date = value.dob
            let myDate = new Date(date);
            console.log(myDate)
            let today = new Date();
            if(myDate > today) {
                formIsValid = false;
                errors['dateEnrolled'] = "Please enter valid date enrolled"
            }
        }

        // Select Class
        if(!fields['selectClass']) {
            formIsValid = false;
            errors["selectClass"] = "please Select Class"
        }

        // Percentage
        if(!fields['percentage']) {
            formIsValid = false;
            errors["percentage"] = "please enter percentage"
        }
        if(typeof fields["percentage"] !== "undefined") {
            if(value.percentage < 0) {
                formIsValid = false;
                errors['percentage'] = "percentage must be greater than 0"
            } else if(value.percentage > 100) {
                formIsValid = false;
                errors["percentage"] = "percentage not greater than 100"
            }
        }

        //pin
        if(!fields["pin"]) {
            formIsValid = false;
            errors["pin"] = "please enter pin"
        }
        if(typeof fields["pin"] !== undefined) {
            if(value.pin.length !== 6) {
                formIsValid = false;
                errors["pin"] = "please enter 6 digit pin"
            }
        }
        this.setState({errors: errors});
       return formIsValid;
    }

    handleChange(field, e){    
        let fields = this.state.fields;
        fields[field] = e.target.value;   
        this.setState({fields});
    }

    contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation(this.state.fields)){
            this.props.formSubmit(this.state.fields)
        }else{
           alert("Form has errors.")
        }
  
    }

    render() {
        return (
            <div>
                <div>           
                   <form name="information" className="information">
                        <div className="col-md-6">
                          <fieldset>
                                <input ref="studentName" type="text" size="30" placeholder="studentName" onChange={this.handleChange.bind(this, "studentName")} value={this.state.fields["studentName"]}/>
                                <span style={{color: "red"}}>{this.state.errors["studentName"]}</span> <br/>
                                <input ref="fatherName" type="text" size="30" placeholder="fatherName" onChange={this.handleChange.bind(this, "fatherName")} value={this.state.fields["fatherName"]}/>
                                <span style={{color: "red"}}>{this.state.errors["fatherName"]}</span><br/>
                                <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                <span style={{color: "red"}}>{this.state.errors["email"]}</span><br/>
                                <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                <span style={{color: "red"}}>{this.state.errors["phone"]}</span><br/>
                                <input refs="phone" type="number" size="30" placeholder="Pin" onChange={this.handleChange.bind(this, "pin")} value={this.state.fields["pin"]}/>
                                <span style={{color: "red"}}>{this.state.errors["pin"]}</span><br/>
                                <label>
                                    Date of Birth :-
                                    <input refs="dob" type="date" placeholder="DOB" onChange={this.handleChange.bind(this, "dob")} value={this.state.fields["dob"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["dob"]}</span>
                                </label><br/>
                                <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/><br/>
                                <input refs="city" type="text" size="30" placeholder="city" onChange={this.handleChange.bind(this, "city")} value={this.state.fields["city"]}/><br/>
                                <input refs="state" type="text" size="30" placeholder="state" onChange={this.handleChange.bind(this, "state")} value={this.state.fields["state"]}/><br/>
                                <label>
                                    Date Enrolled:-
                                    <input refs="dateEnrolled" type="date" size="30" placeholder="DateEnrolled" onChange={this.handleChange.bind(this, "dateEnrolled")} value={this.state.fields["dateEnrolled"]}/>
                                    <span style={{color: "red"}}>{this.state.errors["dateEnrolled"]}</span>
                                </label><br/>
                                <label>
                                    Select Class:-
                                    <select placeholder="Select Class" value={this.state.gender} onChange={this.handleChange.bind(this,"selectClass")} value={this.state.fields["selectClass"]}>
                                        <option name="selectClass">Select Class</option>
                                        <option name="selectClass">5th</option>
                                        <option name="selectClass">6th</option>
                                        <option name="selectClass">7th</option>
                                        <option name="selectClass">8th</option>
                                        <option name="selectClass">9th</option>
                                        <option name="selectClass">10th</option>
                                    </select>
                                    <span style={{color: "red"}}>{this.state.errors["selectClass"]}</span>
                                </label><br/>
                                <input refs="percentage" type="number" size="30" placeholder="Percentage" onChange={this.handleChange.bind(this, "percentage")} value={this.state.fields["percentage"]}/>
                                <span style={{color: "red"}}>{this.state.errors["percentage"]}</span><br/>
                            </fieldset>
                        </div>
                    </form>
                </div>
                <button onClick={(e) => this.contactSubmit(e)}>Submit</button>
            </div>
        )
    }
}
export default ApplicationComponent;