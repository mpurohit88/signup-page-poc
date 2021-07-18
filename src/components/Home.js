import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut } from '../redux/signin/action';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state.signin);
  const { profile } = useSelector(state => state.user);

  if (!isLoggedIn) {
    history.push("/signin");
  }

  const handleOnClick = () => {
    dispatch(signOut());
  }

  const displyaProfile = () => {
    for (const [key, value] of Object.entries(profile || {})) {
      return `${key}: ${value}`;
    }
  }

  return <>
    <h1>Welcome Home</h1>
    {
      displyaProfile()
    }
    <Link to="/signin" onClick={handleOnClick} variant="body2">
      {"Log Out"}
    </Link></>
}