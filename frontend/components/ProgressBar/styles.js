const styles = {
  mainContainerProps: {
    display: 'flex',
    width: 'auto',
    zIndex: 1001,
  },
  accordionProps: {
    square: false,
    disableGutters: true,
    sx: {
      border: '1.5px solid',
      borderRadius: '30px !important',
      borderColor: 'primary.main',
      background: '#181A20',
    }
  },
  accordionDetailsProps: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '10px',
    },
  },
  accordionItemProps: {
    sx: {
      borderTop: '1px solid #444154',
      display: 'flex',
      alignItems: 'center',
      columnGap: 1,
    },
  },
  progressContainerProps: {
    display: 'flex',
    width: 'auto',
  },
  expandedBgProps: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(15px)',
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
