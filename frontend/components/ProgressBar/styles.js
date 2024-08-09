const styles = {
  mainContainerProps: {
    display: 'flex',
    width: 'auto',
    borderRadius: '20px',
    border: '1.5px solid',
    borderColor: 'primary.main',
    sx: {
      background: '#181A20',
    },
  },
  progressCheckerBoxProps: {
    display: 'flex',
    width: 'auto',
  },
  backdropProps: {
    sx: {
      backdropFilter: 'blur(5px)',
    },
  },
  iconButtonProps: {
    sx: {
      marginLeft: '1rem',
    },
  },
  menuProps: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
    marginThreshold: 0,
    slotProps: {
      paper: {
        sx: {
          width: '525px',
        },
      },
    },
  },
};

export default styles;
