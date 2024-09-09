const styles = {
  mainContainerProps: {
    display: 'flex',
    width: 'auto',
    position: 'fixed',
    top: 0,
    paddingTop: '3rem',
    zIndex: 1300,
  },
  accordionProps: {
    square: false,
    disableGutters: true,
    sx: {
      minWidth: '590px',
      maxWidth: '590px',
      border: '1.5px solid',
      borderRadius: '20px !important',
      borderColor: 'primary.main',
      background: '#181A20',
    },
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
    marginRight: '1rem',
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
  customCheckIconProps: {
    sx: {
      marginTop: '7px',
    },
  },
  stepLabelProps: {
    marginTop: '12px',
  },
};

export default styles;
