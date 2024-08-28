const styles = {
  mainContainerProps: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    gap: '10px',
    maxWidth: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    width: '50%',
    maxWidth: '100vw',
    margin: '0 auto',
    textAlign: 'center',
    marginLeft: 'auto',
  },
  form: {
    marginTop: 3, // Using theme.spacing(3)
  },
  uploadBox: {
    display: 'flex',
    border: '1px solid gray',
    padding: 1, // Using theme.spacing(2)
    borderRadius: 6, // Using theme.shape.borderRadius
    textAlign: 'center',
    cursor: 'pointer',
  },
  submitButtonContainer: {
    marginTop: 3, // Using theme.spacing(3)
  },
  formLabel: {
    color: (theme) => theme.palette.text.primary,
  },
  formTextField: {
    borderRadius: '20px',
  },
  formProfileCaption: {
    variant: 'Subtitle 2',
    color: 'gray',
  },
  socialIcons: {
    fontSize: 'large',
    color: 'primary.main',
  },
};

export default styles;
