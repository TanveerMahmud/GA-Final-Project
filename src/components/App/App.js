import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Homepage from '../Homepage/Homepage'
import Search from '../Search/Search'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Details from '../Details/Details'
import PageNotFound from '../PageNotFound/PageNotFound'

import './App.css'
import { ThemeProvider } from '@emotion/react'
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material'

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        {/* ******for Dark Theme****** */}
        {/* Note: wrapping the App compoenent with dark theme does not work on the individual compoenents. So every compoenent has this dark theme wrapper. */}
        <CssBaseline />
        {/* ******NAVBAR****** */}
        <AppBar position='static' sx={{ mb: '1rem' }}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Typography
                variant='h6'
                compoenent='div'
                sx={{ flexGrow: 1, textTransform: 'uppercase' }}
              >
                Space Explorer
              </Typography>

              <Stack direction='row' spacing={2} className='navBar'>
                <Button>
                  <NavLink to='/' className='navButtons'>
                    Home
                  </NavLink>
                </Button>
                <Button>
                  <NavLink to='/search' className='navButtons'>
                    Search
                  </NavLink>
                </Button>
                <Button>
                  <NavLink to='/about' className='navButtons'>
                    About
                  </NavLink>
                </Button>
                <Button>
                  <NavLink to='/contact' className='navButtons'>
                    Contact
                  </NavLink>
                </Button>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>

      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail/:nasaID' element={<Details />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
