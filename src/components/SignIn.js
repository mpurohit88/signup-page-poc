import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { PrimaryButton, InputBox, Heading, LockAvatar } from './materialUI';

const inputFields = [
  { name: "email", id: "password", label: "Email Address", autoComplete: "email" },
  { name: "password", id: "password", label: "Password", autoComplete: "current-password" }
]

export default function SignIn({ classes, onClickHandler }) {
  return (
    <>
      <LockAvatar classes={classes} />
      <Heading text="Sign in" />
      <form className={classes.form} noValidate>
        {
          inputFields.map(inputField => {
            return <InputBox id={inputField.name}
              label={inputField.label}
              name={inputField.name}
              autoComplete={inputField.autoComplete} />
          })
        }

        <PrimaryButton text={"Sign In"} className={classes.submit} onClick={onClickHandler} />
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