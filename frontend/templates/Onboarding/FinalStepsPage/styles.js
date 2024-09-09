const styles = {
  mainContainerProps: {
    container: true,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3rem',
    gap: '15px',
  },
  finalStepMessageProps: {
    variant: 'h4',
    fontWeight: 'bold',
    color: (theme) => theme.palette.text.primary,
  },
  subMessageProps: {
    fontSize: '20px',
    color: (theme) => theme.palette.text.primary,
  },
  stepsContainerProps: {
    container: true,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '600px',
  },
  stepItemProps: {
    sx: {
      borderBottom: '1px solid #444154',
      display: 'flex',
      alignItems: 'center',
      columnGap: 1,
      padding: '10px',
    },
  },
  stepLabelProps: {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: (theme) => theme.palette.text.primary,
  },
};

export default styles;
