import TextField from '@material-ui/core/TextField';

export function InputBox({ id, label, name, autoComplete }) {
  return <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id={id}
    label={label}
    name={name}
    autoComplete={autoComplete}
    autoFocus
  />
}