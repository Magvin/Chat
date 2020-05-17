import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/i.test(values.password)) {
      errors.password = 'Should containe at least one letter and number. Minimum length 8 characters';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);
