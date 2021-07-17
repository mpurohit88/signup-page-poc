import {
  Button
} from '@material-ui/core';

export const DisableButton = ({ text }) => (
  <Button variant="contained" className="downloadBtn" disabled>
    {text}
  </Button>
)