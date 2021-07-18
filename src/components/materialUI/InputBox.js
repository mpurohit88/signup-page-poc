import TextField from '@material-ui/core/TextField';

export function InputBox({ id, label, name, autoComplete, type, handleOnChange }) {
  return <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id={id}
    label={label}
    name={name}
    type={type}
    autoComplete={autoComplete}
    onChange={handleOnChange}
    autoFocus
  />
}