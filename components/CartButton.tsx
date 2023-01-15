import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

export default function CartButton() {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        position: 'fixed',
        bottom: '140px',
        right: '40px',
        zIndex: 1,
      }}
    >
      <Fab
        color="default"
        sx={{
          width: '60px',
          height: '60px',
          boxShadow: 'none',
          background: 'none',
          '&:hover': {
            background: 'none',
          },
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: '40px', backgroundColor: '#d9d9d9', borderRadius: '10px', padding: '2px' }} />
      </Fab>
    </Box>
  )
}
