import {
  Button
} from '@material-ui/core';

export const PrimaryButton = ({ text, onClick, className }) => (
  <Button fullWidth variant="contained" className={className} color="primary" className="downloadBtn" onClick={onClick} >
    {text}
  </Button>
)