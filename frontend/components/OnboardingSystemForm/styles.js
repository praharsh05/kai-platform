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
  selectProps: {
    sx: {
      marginTop: '8px',
      padding: '8px',
      borderRadius: '4px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      '& .MuiSelect-root': {
        fontSize: '16px',
      },
    },
  },
  nextButtonProps: {
    variant: 'contained',
    sx: (theme) => ({
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '4px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
  },
};

export default styles;
