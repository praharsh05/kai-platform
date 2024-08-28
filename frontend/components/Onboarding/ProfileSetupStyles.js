const styles = {
  // .profileSetup {
  //   background-color: #1e1e2e;
  //   color: white;
  //   padding: 40px;
  //   border-radius: 10px;
  //   width: 400px;
  //   text-align: center;
  // }

  // .h2 {
  //   color: #a259ff;
  //   margin-bottom: 20px;
  // }

  // .formGroup {
  //   display: flex;
  //   gap: 20px;
  //   margin-bottom: 20px;
  // }

  // .input[type="text"] {
  //   background-color: #2b2b3a;
  //   border: 1px solid #444;
  //   border-radius: 5px;
  //   color: white;
  //   padding: 10px;
  //   width: 100%;
  // }

  // .socialLinks input {
  //   margin-bottom: 10px;
  // }

  // .profileImage {
  //   background-color: #2b2b3a;
  //   border: 1px solid #444;
  //   border-radius: 5px;
  //   color: white;
  //   padding: 20px;
  //   margin-bottom: 20px;
  //   text-align: left;
  // }

  // .textarea {
  //   background-color: #2b2b3a;
  //   border: 1px solid #444;
  //   border-radius: 5px;
  //   color: white;
  //   padding: 10px;
  //   width: 100%;
  //   height: 100px;
  //   margin-bottom: 20px;
  // }

  // .nextButton {
  //   background-color: #a259ff;
  //   color: white;
  //   border: none;
  //   border-radius: 5px;
  //   padding: 10px 20px;
  //   cursor: pointer;
  // }
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
    border: '1px dashed gray',
    padding: 2, // Using theme.spacing(2)
    borderRadius: 1, // Using theme.shape.borderRadius
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
};

export default styles;
