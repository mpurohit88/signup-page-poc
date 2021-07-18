import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { signIn } from '../redux/auth/action';

import { PrimaryButton, InputBox, Heading, LockAvatar } from './materialUI';

const inputFields = [
  { name: "email", id: "email", label: "Email Address", autoComplete: "email", type: "email" },
  { name: "password", id: "password", label: "Password", autoComplete: "password", type: "password" },
  { name: "confirmPassword", id: "confirmPassword", label: "Confirm Password", autoComplete: "confirm-password", type: "password" }
]

export default function SignIn({ classes }) {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const { profile } = useSelector(state => state.user);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      if (validatePassword()) {
        if (profile.password === data.password) {
          dispatch(signIn());
        } else {
          console.log("Password is not valid");
        }
      }
    }
  }

  function validatePassword() {
    const confirm_password = document.getElementById("confirmPassword")
    if (data.password !== data.confirmPassword) {
      confirm_password.setCustomValidity("Passwords Don't Match");
      return false;
    } else {
      confirm_password.setCustomValidity('');
      return true;
    }
  }

  const handleOnChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  }

  useEffect(() => {
    if (data.confirmPassword) {
      validatePassword();
    }
  }, [data]);

  return (
    <>
      <LockAvatar classes={classes} />
      <Heading text="Sign in" />
      <form className={classes.form} onSubmit={handleSubmit}>
        {
          inputFields.map(inputField => {
            return <InputBox
              key={inputField.id}
              id={inputField.id}
              label={inputField.label}
              name={inputField.name}
              autoComplete={inputField.autoComplete}
              type={inputField.type}
              handleOnChange={handleOnChange} />
          })
        }

        <PrimaryButton text={"Sign In"} className={classes.submit} />
        <Grid container>
          <Grid item>
            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}