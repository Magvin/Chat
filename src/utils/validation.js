/* eslint-disable no-param-reassign */
export default {
  email: (errors, values) => {
    if (!values) {
      errors.email = 'Please enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
      errors.email = 'Invalid email address';
    }
  },
  password: (errors, values, location) => {
    if (!values) {
      errors.password = 'Please enter password';
    } else if (!/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/i.test(values) && location.pathname === '/register') {
      errors.password = 'Should containe at least one letter and number. Minimum length 8 characters';
    }
  },
};
