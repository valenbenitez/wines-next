import React from 'react'
import { Box, Button, CardMedia, Grid } from '@mui/material'

interface CardProps {
  name: string
  price: string
  image: string
  category?: string
  bodega?: string
  input: any
  setInput: any
}

export default function Card({ name, price, image, category, bodega, input, setInput }: CardProps) {
  const [quantity, setQuantity] = React.useState(1)
  function addWine() {
    setInput([...input, { name: name, quantity: quantity }])
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginLeft: '10px',
        marginRight: '10px',
        '&:hover': {
          transform: 'scale3d(1.086, 1.086, 1)',
        },
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '16rem',
          minHeight: '14rem',
          borderRadius: '14px',
          margin: '12px',
          border: '2px solid #f5f5f5',
        }}
      >
        <CardMedia component="img" image={image} />
      </div>
      <Grid container>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <label style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '14px' }}>{name}</label>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center' }}>
          <label style={{ fontFamily: 'Roboto', fontWeight: 400, fontSize: '14px' }}>{price}</label>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', marginBottom:"8px" }}>
          <label style={{ fontFamily: 'Roboto' }}>{quantity} </label>
          <button
            style={{ borderRadius: '10px', border: '2px solid #d9d9d9', backgroundColor: '#f5f5f5', cursor: 'pointer' }}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '6px' }}>
          <Button
            onClick={addWine}
            variant="outlined"
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 400,
              fontSize: '14px',
              borderRadius: '10px',
              padding: '6px',
              cursor: 'pointer',
              textTransform: 'none',
            }}
          >
            Agregar al carrito
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
