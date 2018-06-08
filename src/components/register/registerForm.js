import React, { Component } from 'react';
import { Button, TextInput, FormFields, Label, FormField, PasswordInput, Box, Select, Toast } from 'grommet';
import { registerAction } from '../../actions';
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
      value={input.value}
    />
    </FormField>)
}

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (isNaN(Number(values.phone))) {
    errors.phone = 'Must be a number'
  } else if (Number(values.phone.length) !== 10) {
    errors.phone = 'Should be 10 digit'
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
  if(!values.role) {
    errors.role = 'Required'
  }
  return errors
}

class RegisterForm extends Component {

  constructor(props){
    super(props);
  }

  submit (values) {
    values.role = values.role.value;
    delete values.passwordConfirmation;
    this.props.registerAction(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form name='registerForm'  onSubmit={ handleSubmit(props => this.submit(props))}>
        <Box pad='small'>
        <FormFields>
          <Field name="username" component={renderInput} label='Username'/>
          <Field name="phone" component={renderInput} label='Phone Number'/>
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
  const { registerSuccess } = state.register;
  return { registerSuccess };
}

export default connect(mapStateToProps, { registerAction }) (reduxForm({
  form: 'registerForm',
  fields: ['username', 'phone', 'email', 'password', 'passwordConfirmation', 'role'],
  validate
})(RegisterForm));