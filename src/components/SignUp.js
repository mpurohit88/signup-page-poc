import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import { userProfileSave } from '../redux/user/action';

import { PrimaryButton, InputBox, Heading, LockAvatar } from './materialUI';

const inputFields = [
  { name: "firstName", id: "firstName", label: "First Name", autoComplete: "fname", type: "input" },
  { name: "lastName", id: "lastName", label: "Last Name", autoComplete: "lname", type: "input" },
  { name: "email", id: "email", label: "Email Address", autoComplete: "email", type: "email" },
  { name: "password", id: "password", label: "Password", autoComplete: "current-password", type: "password" }
]

export default function SignUp({ classes }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.checkValidity()) {
      dispatch(userProfileSave(data));
      history.push('/signin');
    }
  }

  const handleOnChange = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  }

  return (
    <>
      <LockAvatar classes={classes} />
      <Heading text="Sign up" />
      <form className={classes.form} onSubmit={handleSubmit} >
        <Grid container spacing={2}>
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
        </Grid>

        <PrimaryButton text={"Sign Up"} className={classes.submit} />

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