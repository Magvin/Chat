import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';

// Utils
import { validation } from '../../../utils/validation';

export default withFormik({
  validate: (values) => {
    const errors = {};
    Object.keys(values).filter((key) => validation[key] && validation[key](errors, values[key], values.location));

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(LoginForm);
