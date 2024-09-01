const styles = {
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
  kaiWordProps: {
    color: '#8653FF',
  },
};

export default styles;
