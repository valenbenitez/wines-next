import Link from 'next/link'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import WhatsApp from './icons/WhatsApp'

export default function FloatingButton() {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
        position: 'fixed',
        bottom: '80px',
        right: '40px',
        zIndex: 1,
      }}
    >
      <Link href="https://walink.co/a49d2f" target={'_blank'}>
        {/* <a target={'_blank'}> */}
        <Fab
          color="default"
          sx={{
            width: '60px',
            height: '30px',
            boxShadow: 'none',
            background: 'none',
            '&:hover': {
              background: 'none',
            },
          }}
        >
          <WhatsApp />
        </Fab>
        {/* </a> */}
      </Link>
    </Box>
  )
}
