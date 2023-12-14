
 const  formValidation = (inputValues) => {

    const errors = {};

  const firstname_pattern = /^[A-Za-z]+$/i;
  const lastname_pattern = /^[A-Za-z]+$/i;
  const email_pattern = /^[^\s@]+@[^\s]+\.[^\s@]{2,6}$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

  if (inputValues.firstname === "") {
    errors.firstname = "firstname is require";
  } else if (!firstname_pattern.test(inputValues.firstname)) {
    errors.firstname = "firstname is not correct";
  }
  if (inputValues.lastname === "") {
    errors.lastname = "lastname is require";
  } else if (!lastname_pattern.test(inputValues.lastname)) {
    errors.lastname = "lastname is not correct";
  }

  if (inputValues.email === "") {
    errors.email = "Email is require";
  } else if (!email_pattern.test(inputValues.email)) {
    errors.email = "Email is not correct";
  }

  if (inputValues.password === "") {
    errors.password = "Password is require";
  } else if (!password_pattern.test(inputValues.password)) {
    errors.password = "Password must have minimum 8 characters, one uppercase letter, one lowercase letter, one number and one special character(@,$,!,%,*,?,&)";
  }

  return errors;
}

export default   formValidation 

/*
Minimum eight characters, at least one letter and one number:
"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

Minimum eight characters, at least one letter, one number and one special character:
"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

 */