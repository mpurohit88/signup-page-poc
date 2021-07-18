import {
  Button
} from '@material-ui/core';

export const PrimaryButton = ({ text, onClick, className }) => (
  <Button type="submit" fullWidth variant="contained" className={className} color="primary" onClick={onClick} >
    {text}
  </Button>
)