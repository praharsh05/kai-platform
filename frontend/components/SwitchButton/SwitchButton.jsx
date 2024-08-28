import styles from './styles';

const CustomSwitchButton = ({ isActive, onChange }) => {
  const handleToggle = () => {
    onChange(!isActive);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      style={isActive ? styles.activeSwitch : styles.inactiveSwitch}
      aria-pressed={isActive}
    >
      <div style={styles.switchCircle} />
    </button>
  );
};

export default CustomSwitchButton;
