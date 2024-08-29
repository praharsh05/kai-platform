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
    variant: 'Body 2',
    color: '#BDBDBD',
  },
  socialSection: {
    padding: '17px 20px 17px 0',
  },
  socialIcons: {
    fontSize: 'large',
    color: 'primary.main',
  },
  uploadTextPrimary: {
    fontSize: '18px',
    color: '#BDBDBD',
  },
  uploadTextSecondary: {
    fontSize: '18px',
    color: (theme) => theme.palette.primary.main,
  },
  bioTextSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'right',
    padding: '12px 20px 0 20px',
  },
  bioCaptionPrimary: {
    fontSize: '16px',
    color: '#444154',
  },
  bioCaptionSecondary: {
    fontSize: '16px',
    color: (theme) => theme.palette.text.primary,
  },
};

export default styles;
