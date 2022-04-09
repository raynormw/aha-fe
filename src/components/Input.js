import TextField from '@mui/material/TextField';

export const Input = (props) => {
  return (
      <TextField
        value={props.name}
        onChange={props.handleChange}
        id="outlined-basic"
        variant="outlined"
        placeholder="Keyword"
        sx={{
          width: '100%',
          border: '3px solid rgba(255, 255, 255, 0.5)',
          boxSizing: 'border-box',
          borderRadius: '6px',
          marginTop: '20px',
          marginBottom: '30px',
          color: '#FFFFFF',
        }}
      />
  );
}
