import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPolicy } from '../modules/createPolicy/policyAction';

const renderField = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={placeholder}/>
    </div>
    { touched && (error && <div className="text-help">{error}</div>)}
  </div>
);

class UserForm extends Component {
  constructor(props) {
    super(props)

    this.handleData = this.handleData.bind(this);
  }
  handleData(e) {
    console.log(e)
    // this.props.createPolicy
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleData(e))}>
        <Field name="firstName" label="First Name" component={renderField} type="text" placeholder="first name" />
        <Field name="age" label="Age" component={renderField} type="text" placeholder="age"/>
        <Field name="location" label="location" component={renderField} type="text" placeholder="location"/>
        <Field name="healthCondition" label="Health Condition" component={renderField} type="text" placeholder="health condition"/>
        <div>
          <label>Gender</label>
          <div>
            <Field name="gender" component="select">
              <option></option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Field>
          </div>
        </div>
        <div>
          <label>Health Conditions:</label>
          <div>
            <label>allergies: </label>
            <Field name="allergies" component="input" label="allergies" type="checkbox"/>
          </div>
          <div>
            <label>sleep apnea: </label>
            <Field name="sleepApnea" component="input" type="checkbox"/>
          </div>
          <div>
            <label>heart disease: </label>
            <Field name="heartDisease" component="input" type="checkbox"/>
          </div>
          <div>
            <label>high cholesterol: </label>
            <Field name="highChol" component="input" type="checkbox"/>
          </div>
          <div>
            <label>asthma: </label>
            <Field name="asthma" component="input" type="checkbox"/>
          </div>
          <div>
            <label>none: </label>
            <Field name="none" component="input" type="checkbox"/>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default connect(null, { createPolicy })(reduxForm({
  form: 'userForm'
})(UserForm));


{/*<Field name="days" label='Days' component={({ input, label }) => {
  return (
    <div className='days-container'>
      <span className='label'>{label}</span>
      {[ 'mon', 'tue', 'wed', 'thu', 'friday'].map((name, index) =>
          <Checkbox label={name} checked={input.value[name]} key={index} onChange={checked => {
            const setter = {};
            setter[name]=checked;
            input.onChange({...input.value, ...setter})}} />
      )}
    </div>
  )
}}/>*/}