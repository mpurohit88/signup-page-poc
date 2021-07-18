import { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MainNavbar from './MainNavbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function MainLayout() {
  const classes = useStyles();
  const history = useHistory();

  const { isLoggedIn } = useSelector(state => state.signin);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/home");
    }
  }, [isLoggedIn])

  return <>
    <MainNavbar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Switch>
          <Route exact path="/">
            <SignUp classes={classes} />
          </Route>
          <Route path="/signin">
            <SignIn classes={classes} />
          </Route>
          <Route path="/signup">
            <SignUp classes={classes} />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Container>
  </>
};