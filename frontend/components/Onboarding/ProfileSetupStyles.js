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
    padding: '0 20px 12px 20px',
    color: (theme) => theme.palette.text.primary,
  },
  formTextField: {
    borderRadius: '20px',
  },
  formProfileCaption: {
    variant: 'Subtitle 2',
    color: 'gray',
  },
  socialSection: {
    padding: '17px 20px 17px 0',
  },
  socialIcons: {
    fontSize: 'large',
    color: 'primary.main',
  },
};

export default styles;
