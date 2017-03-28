import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { createPolicy } from '../modules/createPolicy/policyAction';

const renderFieldInput = ({ input, label, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} />
    </div>
    { touched && (error && <div className="text-help">{error}</div>)}
  </div>
);

const renderCheckBoxes = ({ input, meta: { touched, error, warning } }) => (
  <div className="check_boxes">
    <label>Health Conditions:</label>
    <div>
      <label>allergies: </label>
      <Field name="allergies" component="input" type="checkbox" />
    </div>
    <div>
      <label>sleep apnea: </label>
      <Field name="sleepApnea" component="input" type="checkbox" />
    </div>
    <div>
      <label>heart disease: </label>
      <Field name="heartDisease" component="input" type="checkbox" />
    </div>
    <div>
      <label>high cholesterol: </label>
      <Field name="highChol" component="input" type="checkbox" />
    </div>
    <div>
      <label>asthma: </label>
      <Field name="asthma" component="input" type="checkbox" />
    </div>
    <div>
      <label>none: </label>
      <Field name="none" component="input" type="checkbox" />
    </div>
  </div>
);

const conditions = ['allergies', 'sleep apnea', 'heart disease', 'high cholesterol', 'asthma', 'none'];


class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleOnChange = (data) => {
    let checkedArray = [];
    console.log('data=====', data);
  }

  handleFormSubmit = (data) => {
    this.props.createPolicy(data);
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPolicy)}>
        <Field name="firstName" label="First Name" component={renderFieldInput} type="text" placeholder="first name" />
        <Field name="age" label="Age" component={renderFieldInput} type="text" placeholder="age"/>
        <Field name="location" label="location" component={renderFieldInput} type="text" placeholder="location"/>
        <Field name="healthCondition" label="Health Condition" component={renderFieldInput} type="text" placeholder="health condition"/>
        <div>
          <label>Gender</label>
          <div>
            <Field name="gender" component="select">
              <option>select one</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </Field>
          </div>
        </div>
          { 
            conditions.map((name, index) => {
              return (
                <div>
                  <label>{name}: </label>
                  <Field name={`selectBoxes.${name}`} onChange={this.handleOnChange} label={name} component="input" type="checkbox" id={name}/>
                </div>
              )
            })
          }
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

  /*<div>
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
          </div>*/