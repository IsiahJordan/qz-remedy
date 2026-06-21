import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router'
import { 
  AppBar,
  Box,
  Typography,
  Button,
  Toolbar
} from '@mui/material'
import React from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0056A2',
      light: '#EEF0F4'
    },
    secondary: {
      main: '#EEF0F4',
      dark: '#8C95A6'
    }
  }
});

interface NavBarProps {
  navItems: { label: string; route: string }[];
}

export default function NavBar({ navItems }: NavBarProps) {
  let navigate = useNavigate();
  console.log(navItems);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'> 
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              QZ-Remedy
            </Typography>
            {navItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider> 
  );
}
