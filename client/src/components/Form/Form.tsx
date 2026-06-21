import { 
  Box,
  Input,
  Typography,
  Stack,
  TextField
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#1A2332'
    }
  } 
});

interface FormProps {
  labels: Array<string>;
  placeholders: Array<string>;
  types: Array<string>;
  fields: Array<string>;
  setFields: React.Dispatch<React.SetStateAction<Array<string>>>;
  topChildren: React.ReactNode;
  botChildren: React.ReactNode;
};

export default function Form({ 
  labels, 
  placeholders, 
  types, 
  fields, 
  setFields,
  topChildren,
  botChildren
}: FormProps) {
  const handleFields = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    let _fields = [...fields];
    _fields[index] = e.target.value;
    setFields(_fields);
  };

  return (
    <Stack sx={{ display:'flex', flexDirection:'column' }}>
      <Box
        sx={{ 
          flex:1, 
          display: 'flex', 
          flexDirection: 'column', 
        }}
      >
        {topChildren}
        {labels.map((label, index) => (
          <TextField
            key={index}
            label={label}
            type={types[index]}
            placeholder={placeholders[index]}
            onChange={(e) => handleFields(index, e)}
          />
        ))}
        {botChildren} 
      </Box>
    </Stack>
  );
}
