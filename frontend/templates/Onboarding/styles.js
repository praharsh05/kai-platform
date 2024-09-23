const current = 0;

const styles = {
  mainGridProps: {
    container: true,
    item: true,
    display: 'flex',
    position: 'relative',
    paddingTop: '6rem',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonProps: {
    variant: 'contained',
    sx: (theme) => ({
      marginTop: '2rem',
      width: current === 0 ? '330px' : '590px',
      height: '45px',
      color: theme.palette.primary,
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '18px',
      textTransform: 'none',
      zIndex: 1,
    }),
  },
};

export default styles;
