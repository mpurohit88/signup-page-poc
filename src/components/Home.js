import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { signOut } from '../redux/auth/action';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(state => state.auth);
  const { profile } = useSelector(state => state.user);

  if (!isLoggedIn) {
    history.push("/signin");
  }

  const handleOnClick = () => {
    dispatch(signOut());
  }

  useEffect(() => {

  });

  const displyaProfile = () => {
    return Object.entries(profile || {}).map((obj) => {
      return <div>{obj[0]}: {obj[1]}</div>;
    })
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