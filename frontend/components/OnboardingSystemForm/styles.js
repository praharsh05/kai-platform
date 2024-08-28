const styles = {
  systemConfigContainerProps: {
    container: true,
    item: true,
    display: 'flex',
    paddingTop: '6rem',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  systemConfigHeaderProps: {
    variant: 'h3',
    fontWeight: 'bold',
    sx: {
      marginBottom: '20px',
      color: (theme) => theme.palette.text.primary,
    },
  },
  systemConfigSubProps: {
    fontSize: '24px',
    fontWeight: 'light',
    sx: {
      marginBottom: '20px',
      color: (theme) => theme.palette.text.primary,
    },
  },
  switchProps: {
    sx: {
      '& .MuiSwitch-thumb': {
        backgroundColor: '#fff',
      },
      '& .MuiSwitch-track': {
        backgroundColor: (theme) => theme.palette.primary.main,
      },
    },
  },
  labelProps: {
    variant: 'body1',
    sx: {
      fontSize: '16px',
      fontWeight: '500',
      color: (theme) => theme.palette.text.primary,
    },
  },
  RowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  themeLabelProps: {
    variant: 'body1',
    component: 'label',
    sx: {
      fontSize: '16px',
      fontWeight: '500',
      color: (theme) => theme.palette.text.primary,
      display: 'block',
      marginBottom: '8px',
    },
  },
  nextButtonProps: {
    variant: 'contained',
    sx: (theme) => ({
      marginTop: '7rem',
      width: '30rem',
      color: theme.palette.primary,
      borderRadius: '50px',
      fontWeight: 'bold',
      fontSize: '16px',
    }),
  },
  dividerLine: {
    width: '592.5px',
    height: '0px',
    border: '1px solid #444154',
    margin: '16px 0',
  },
};

export default styles;
