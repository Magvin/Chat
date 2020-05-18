import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

// Utils
import validation from '../../../utils/validation';

export default withFormik({
  validate: (values) => {
    const errors = {};
    console.log(values);
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
})(RegisterForm);
