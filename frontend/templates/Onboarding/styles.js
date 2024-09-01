const styles = {
  mainGridProps: {
    container: true,
    item: true,
    display: 'flex',
    paddingTop: '6rem',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
};

export default styles;
