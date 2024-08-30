const styles = {
  mainGridProps: {
    container: true,
    item: true,
    display: 'flex',
    paddingTop: '2rem',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileSetupMessageBoxProps: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    // gap: '1rem',
  },
  profileTitle: {
    variant: 'h6',
    fontWeight: '500',
    color: (theme) => theme.palette.text.primary,
  },
  profileSubTitle: {
    variant: 'Body 1',
    color: (theme) => theme.palette.text.primary,
  },
  NextButtonProps: {
    variant: 'contained',
    sx: (theme) => ({
      marginTop: '2rem',
      width: '613px',
      height: '44px',
      color: theme.palette.primary,
      borderRadius: '28.89px',
      fontWeight: '700',
      textTransform: 'none',
      fontSize: '18px',
    }),
  },
};

export default styles;
