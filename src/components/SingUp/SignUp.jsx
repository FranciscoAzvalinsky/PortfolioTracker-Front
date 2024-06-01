import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material';
import Alert from '@mui/material/Alert';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import Swal from "sweetalert2";


import { useEffect, useRef, useState } from 'react';
import intlTelInput from 'intl-tel-input'; // Importa la biblioteca correctamente
import 'intl-tel-input/build/css/intlTelInput.css'; // Importa el CSS
import 'intl-tel-input/build/css/demo.css'; // Importa el CSS

import validation from '../registerValidation'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        PortfolioTracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const phoneInputRef = useRef(null);

  useEffect(() => {
    const input = phoneInputRef.current;
    if (input) {
      intlTelInput(input, {});
    }
  }, []);

  const CustomTextField = styled(TextField)({
    '&& .MuiInputLabel-root': {
      marginLeft: '2.4rem', // Ajusta este valor según sea necesario
    },
  });


  let [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phoneNumber: '',
    nationality: '',
    birthDate: null,
    password: '',
  })

  const [errors, setErrors] = useState({});

  let [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword(!showPassword);
}

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
    let name = e.target.name
    setErrors(validation(
      userData,
      name
    ));

  }


  function onSubmit (e){
    e.preventDefault()
    if (errors){
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Hay campos no válidos.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <Alert severity="error">{errors.firstName}</Alert>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={userData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <Alert severity="error">{errors.lastName}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleChange}
                />
                {errors.email && <Alert severity="error">{errors.email}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={userData.username}
                  onChange={handleChange}
                />
                {errors.username && <Alert severity="error">{errors.username}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nationality"
                  label="Nationality"
                  name="nationality"
                  autoComplete="nationality"
                  value={userData.nationality}
                  onChange={handleChange}
                />
                {errors.nationality && <Alert severity="error">{errors.nationality}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  inputRef={phoneInputRef}
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && <Alert severity="error">{errors.phoneNumber}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Fecha de nacimiento"
                    renderInput={(params) =>
                      <TextField
                        required
                        fullWidth
                        id="birthDate"
                        type="date"
                        label="Birth Date"
                        autoComplete="birthDate"
                        name='birthDate'
                        value={userData.birthDate}
                        onChange={handleChange}
                      />}
                  />
                </LocalizationProvider>
                {errors.birthDate && <Alert severity="error">{errors.birthDate}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <IconButton
                  onClick={handleShowPassword}
                  style={{ position: 'absolute', left: '57.5%', top: '66.5%' }}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
{errors.password && <Alert severity="error">{errors.password}</Alert>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}