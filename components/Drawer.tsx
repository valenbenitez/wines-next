import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { Button } from '@mui/material'
import Link from 'next/link'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

interface DrawerProps {
  state: any
  setState: any
  toggleDrawer: any
  input: any
  setInput: any
}

export default function TemporaryDrawer({ state, setState, toggleDrawer, input, setInput }: DrawerProps) {
  const [url, setUrl] = React.useState('')

  React.useEffect(() => {
    console.log('cauu')
  }, [])

  React.useEffect(() => {}, [url])

  function generateLink() {
    let link = 'https://api.whatsapp.com/send/?phone=541164029852&text='
    if (input.length > 0) {
      console.log('hola')
      input.map((item: any) => {
        link = link + `Nombre%3A+${item.name}%2C+Cantidad%3A+${item.quantity}.+`
      })
    }
    link = link + '&type=phone_number&app_absent=0'
    setUrl(link)
  }

  return (
    <React.Fragment>
      <Drawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)}>
        <Box
          sx={{ width: 250, textAlign: 'center' }}
          onKeyDown={toggleDrawer('left', false)}
          onClick={toggleDrawer('left', false)}
        >
          <div style={{ marginTop: '8px' }}>
            <label style={{ fontFamily: 'Montserrat' }}>Carrito</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {Array.isArray(input) &&
              input.map((item: any) => (
                <div
                  key={item.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '6px',
                    marginBottom: '6px',
                    border: '2px solid #d9d9d9',
                    borderRadius: '10px',
                    textAlign: 'start',
                    width: '80%',
                    padding: '10px',
                  }}
                >
                  <label style={{ fontFamily: 'Roboto', marginBottom: '6px' }}>Nombre: {item.name}</label>
                  <label style={{ fontFamily: 'Roboto', marginTop: '6px' }}>Cantidad: {item.quantity}</label>
                </div>
              ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'center', marginTop: '12px' }}>
            {Object.values(input).length > 0 && (
              <Link target="_blank" href={url}>
                <Button onClick={generateLink} variant="contained" color="success">
                  Encargar orden
                </Button>
              </Link>
            )}
          </div>
        </Box>
      </Drawer>
    </React.Fragment>
  )
}
