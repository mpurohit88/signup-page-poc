import {
  Typography
} from '@material-ui/core';

const Heading = ({ text }) => (
  <Typography component="h1" variant="h5">
    {text}
  </Typography>
)

export { Heading };