import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut } from '../redux/signin/action';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state);

  if (!isLoggedIn) {
    history.push("/signin");
  }

  const handleOnClick = () => {
    dispatch(signOut());
  }

  return <><h1>Welcome Home</h1><Link to="/signin" onClick={handleOnClick} variant="body2">
    {"Log Out"}
  </Link></>
}