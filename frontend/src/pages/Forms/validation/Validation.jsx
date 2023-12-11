export default function Validation(values) {
  const errors = {};

  const firstName_pattern = /^[A-Za-z]+$/i;
  const lastName_pattern = /^[A-Za-z]+$/i;
  const email_pattern = /^[^\s@]+@[^\s]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.firstName === "") {
    errors.firstName = "FirstName is require";
  } else if (!firstName_pattern.test(values.firstName)) {
    errors.firstName = "FirstName is not correct";
  }
  if (values.lastName === "") {
    errors.lastName = "LastName is require";
  } else if (!lastName_pattern.test(values.lastName)) {
    errors.lastName = "LastName is not correct";
  }

  if (values.email === "") {
    errors.email = "Email is require";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Email is not correct";
  }

  if (values.password === "") {
    errors.password = "Password is require";
  } else if (!password_pattern.test(values.password)) {
    errors.password = "Password does not match";
  }

  return errors;
}
