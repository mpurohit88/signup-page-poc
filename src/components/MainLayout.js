import {
  Switch,
  Route,
} from "react-router-dom";

import MainNavbar from './MainNavbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

const MainLayout = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>
  </>
);

export default MainLayout;