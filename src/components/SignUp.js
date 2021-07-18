import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { PrimaryButton, InputBox, Heading, LockAvatar } from './materialUI';

const inputFields = [
  { name: "firstName", id: "firstName", label: "First Name", autoComplete: "fname" },
  { name: "lastName", id: "lastName", label: "Last Name", autoComplete: "lname" },
  { name: "email", id: "email", label: "Email Address", autoComplete: "email" },
  { name: "password", id: "password", label: "Password", autoComplete: "current-password" }
]

export default function SignUp({ classes, onClickHandler }) {
  return (
    <>
      <LockAvatar classes={classes} />
      <Heading text="Sign up" />
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          {
            inputFields.map(inputField => {
              return <InputBox id={inputField.name}
                label={inputField.label}
                name={inputField.name}
                autoComplete={inputField.autoComplete} />
            })
          }
        </Grid>

        <PrimaryButton text={"Sign Up"} className={classes.submit} onClick={onClickHandler} />

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/signin" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}