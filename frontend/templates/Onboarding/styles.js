const styles = {
  mainGridProps: {
    container: true,
    item: true,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMessageBoxProps: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7rem',
    gap: '10px',
  },
  welcomMessageProps: {
    variant: 'h4',
    fontWeight: 'bold',
    color: (theme) => theme.palette.text.primary,
  },
  subMessageProps: {
    fontSize: '20px',
    color: (theme) => theme.palette.text.primary,
  },
  startButtonProps: {
    variant: 'contained',
    sx: (theme) => ({
      marginTop: '7rem',
      width: '20rem',
      color: theme.palette.primary,
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '15px',
    }),
  }
}

export default styles