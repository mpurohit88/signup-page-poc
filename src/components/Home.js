import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Link from '@material-ui/core/Link';

export default function Home() {
  const history = useHistory();
  const { isLoggedIn } = useSelector(state => state);

  if (!isLoggedIn) {
    history.push("/signin");
  }

  return <><h1>Welcome Home</h1><Link href="/signin" variant="body2">
    {"Log Out"}
  </Link></>
}