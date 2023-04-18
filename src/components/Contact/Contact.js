import { useState } from 'react'
import {
  TextField,
  Button,
  FormControl,
  Typography,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Card,
  CardContent,
} from '@mui/material'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
    // send the form data to the server here
  }

  return (
    <ThemeProvider theme={darkTheme}>
      {/* ******for Dark Theme****** */}
      <CssBaseline />

      <Card style={{ maxWidth: 450, padding: '20px 5px', margin: '0 auto' }}>
        <CardContent>
          <Typography gutterBottom variant='h5'>
            Contact Us
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            mb={2}
          >
            Share your thoughts and ideas with us.
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ mb: '1rem' }}>
              <TextField
                id='name'
                label='Name'
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: '1rem' }}>
              <TextField
                id='email'
                label='Email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: '1rem' }}>
              <TextField
                id='message'
                label='Message'
                multiline
                rows={4}
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
            <Button variant='contained' color='primary' type='submit' fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}
export default Contact
