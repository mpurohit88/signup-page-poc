import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export const LockAvatar = ({ classes }) => (
  <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>
)