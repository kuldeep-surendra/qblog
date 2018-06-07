import React, { Component } from 'react';
import { Button, TextInput, FormFields, Label, FormField, PasswordInput, Box, Select } from 'grommet';
import { loginModalOperation } from '../../actions';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

const renderInput = ({input, valueField, label, meta: {touched, error, warning}}) => {
  var errMsg = touched && error;
  return (<FormField error={errMsg ? errMsg : ''} size='medium' label={label}>
    <TextInput {...input}
      pad='medium'
      value={valueField}
      onDOMChange={input.onChange}
    />
  </FormField>)
}

const renderPassword = ({input, valueField, label, meta: {touched, error, warning}}) => {
  var errMsg = touched && error;
  return (<FormField error={errMsg ? errMsg : ''} size='medium'>
    <PasswordInput {...input}
      pad='medium'
      className='passwordStyle'
      value={valueField}
      placeholder='password'
      onChange={input.onChange}
    />
  </FormField>)
}

const renderSelect = ({input, valueField, label, meta: {touched, error, warning}}) => {
  var errMsg = touched && error;
  return (<FormField error={errMsg ? errMsg : ''} size='medium' label={label}>
    <Select placeHolder='None'
      inline={false}
      placeholder='Role'
      options={['Admin', 'User']}
      onChange={input.onChange}
      value={input.value.value || 'User'}
    />
    </FormField>)
}

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required'
  } else if (isNaN(Number(values.phoneNumber))) {
    errors.phoneNumber = 'Must be a number'
  } else if (Number(values.phoneNumber.length) !== 10) {
    errors.phoneNumber = 'Should be 10 digit'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 5) {
    errors.password = 'Should be min 5 digit'
  } else if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Required'
  } else if (values.password != values.passwordConfirmation){
    errors.passwordConfirmation = 'Passwords did not match'
  }
  if(values.role && !values.role.value) {
    errors.role = 'Required'
  }
  return errors
}

class RegisterForm extends Component {

  constructor(props){
    super(props);
  }

  submit (values) {
    debugger
    return console.log(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form name='registerForm'  onSubmit={ handleSubmit(props => this.submit(props))}>
        <Box pad='small'>
        <FormFields>
          <Field name="name" component={renderInput} label='Username'/>
          <Field name="phoneNumber" component={renderInput} label='Phone Number'/>
          <Field name="email" component={renderInput} label='Email'/>
          <Field name="password" component={renderPassword}/>
          <Field name="passwordConfirmation" component={renderPassword}/>
          <Field name="role" component={renderSelect} label='Role'/>
        </FormFields><br/><br/>
        <Button type={(pristine || submitting) ? 'button' : 'submit'} label='submit' primary={true}/>
        </Box>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const { showRegisterModal } = state.login;
  return { showRegisterModal };
}

export default connect(mapStateToProps, { loginModalOperation }) (reduxForm({
  form: 'registerForm',
  fields: ['name', 'phoneNumber', 'email', 'password', 'passwordConfirmation', 'role'],
  validate
})(RegisterForm));