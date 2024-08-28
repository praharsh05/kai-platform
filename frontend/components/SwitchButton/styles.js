const styles = {
  activeSwitch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: '4px',
    gap: '10px',
    width: '52px',
    height: '28px',
    background: '#3A3262',
    borderRadius: '61px',
    border: 'none',
    cursor: 'pointer',
  },

  inactiveSwitch: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '4px',
    gap: '10px',
    width: '52px',
    height: '28px',
    background: '#444154',
    borderRadius: '61px',
    border: 'none',
    cursor: 'pointer',
  },

  switchCircle: {
    width: '20px',
    height: '20px',
    background: '#FFFFFF',
    borderRadius: '50%',
    flexGrow: 0,
  },
};

export default styles;
