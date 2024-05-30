export default function validation(inputs, name) {

  let errors = {};

  switch (name) {
    default:
      console.log('hola')
      break;

    case 'firstName':

      (!inputs.firstName) ? errors.firstName = 'firstName is required' : errors.firstName = '';
      if (inputs.firstName) {
        if (!/^[a-zA-Z]+$/.test(inputs.firstName)) {
          errors.firstName = 'firstName is not valid'
        } else {
          errors.firstName += '';
        }
      }
      break;
    case 'lastName':
      (!inputs.lastName) ? errors.lastName = 'lastName is required' : errors.lastName = '';
      if (inputs.lastName) {
        if (!/^[a-zA-Z]+$/.test(inputs.lastName)) {
          errors.lastName = 'lastName is not valid'
        } else {
          errors.lastName += '';
        }
      }
      break;
    case 'email':
      (!inputs.email) ? errors.email = 'email is required' : errors.email = '';
      if (inputs.email) {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
          errors.email = 'email is not valid';
        } else {
          errors.email += '';
        }
      }
      break;
    case 'username':
      (!inputs.username) ? errors.username = 'username is required' : errors.username = '';
      if (inputs.username) {
        if (inputs.username.length >= 21 && inputs.username.length <= 5 && !/^\d+$/.test(inputs.username)) {
          errors.username = 'username is not valid';
        } else {
          errors.username += '';
        }
      }
      break;
    case 'phoneNumber':
      (!inputs.phoneNumber) ? errors.phoneNumber = 'phoneNumber is required' : errors.phoneNumber = '';
      if (inputs.phoneNumber) {
        if (!(Number(inputs.phoneNumber)) || inputs.phoneNumber.length < 9 || inputs.phoneNumber.length > 14) {
          errors.phoneNumber = 'phoneNumber is not valid';
        }
        else {
          errors.phoneNumber += '';
        }
      }
      break;
    case 'nationality':
      (!inputs.nationality) ? errors.nationality = 'nationality is required' : errors.nationality = '';
      if (inputs.nationality) {
        if (/^[a-zA-Z]+$/.test(inputs.nationality)) {
          errors.nationality = 'nationality is not valid'
        } else {
          errors.nationality += '';
        }
      }
      break;
    case 'birthDate':
      (!inputs.birthDate) ? errors.birthDate = 'birthDate are required' : errors.birthDate = '';
      if (inputs.birthDate) {
        if (/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/.test(inputs.birthDate)) {
          errors.birthDate = 'birthDate is not valid';
        } else {
          errors.birthDate += '';
        }
      }
      break;

    case 'password':
      (!inputs.password) ? errors.password = 'password is required' : errors.password = ''
      if (inputs.password) {
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/.test(inputs.password)) {
          errors.password = 'password is not valid';
        } else {
          errors.password += '';
        }
      }
      break;
  }

  return errors;
}