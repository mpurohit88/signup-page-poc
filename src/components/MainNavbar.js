import { AppBar, Toolbar } from '@material-ui/core';

const MainNavbar = () => (
  <AppBar
    elevation={0}
  >
    <Toolbar sx={{ height: 64 }}>
      POC | Sign Up & Sign In
    </Toolbar>
  </AppBar>
);

export default MainNavbar;