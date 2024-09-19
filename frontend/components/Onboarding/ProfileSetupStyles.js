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
  textFieldSmall: {
    fullWidth: true,
    borderRadius: '20px',
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '30px', // Custom border radius
        height: '52px', // Custom height
        width: '294px',
      },
    },
  },
  uploadBox: {
    display: 'flex',
    border: '1px solid gray',
    padding: 1, // Using theme.spacing(2)
    borderRadius: 6, // Using theme.shape.borderRadius
    textAlign: 'center',
    cursor: 'pointer',
    // Hover effect
    sx: {
      '&:hover': {
        border: '1px solid white', // Change border color to white on hover
      },
    },
  },
  formLabel: {
    padding: '0 20px 12px 20px',
    color: (theme) => theme.palette.text.primary,
  },
  formProfileCaption: {
    variant: 'Body 2',
    color: '#BDBDBD',
  },
  socialSection: {
    padding: '17px 20px 17px 0',
    sx: {
      flexDirection: 'row',
      flexGrow: 1,
    },
  },
  socialLinkGrid: {
    sx: {
      width: '613px', // Custom width
      paddingBottom: '12px',
    },
  },
  socialIcons: {
    fontSize: 'large',
    color: 'primary.main',
    sx: {
      color: 'primary.main',
      mr: 1,
      my: 0.5,
      width: '24px',
      height: '24px',
    },
  },
  socialLinkTextField: {
    fullWidth: true,
    placeholder: '| Paste Link',
    variant: 'standard',
    sx: {
      '& .MuiInput-underline:before': {
        borderBottom: 'none', // Remove the default bottom border (underline)
      },
      '& .MuiInput-underline:after': {
        borderBottom: 'none', // Remove the focused bottom border (underline)
      },
      '& .MuiInputBase-root': {
        '&:hover:not(.Mui-disabled):before': {
          borderBottom: 'none', // Remove the bottom border on hover
        },
      },
    },
  },
  profileUploadButton: {
    sx: {
      width: '613px',
      height: '96px',
      border: '1px solid gray',
      borderRadius: '20px',
      textTransform: 'none',
    },
  },
  uploadTextPrimary: {
    fontSize: '18px',
    color: '#BDBDBD',
  },
  uploadTextSecondary: {
    fontSize: '18px',
    color: (theme) => theme.palette.primary.main,
  },
  bioTextField: {
    fullWidth: true,
    multiline: true,
    rows: '2',
    sx: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '20px', // Custom border radius
      },
    },
    InputProps: {
      style: {
        width: '613px',
        height: '97px',
        paddingTop: '0.2em',
        paddingLeft: '1.5rem',
        boxSizing: 'border-box',
        lineHeight: '1.5rem',
      },
    },
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
