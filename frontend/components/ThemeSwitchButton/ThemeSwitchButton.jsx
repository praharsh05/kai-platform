import { SwitchContainer, ThemeLabel, ToggleThumb } from './styles';

export default function ThemeSwitchButton({ theme, onChange }) {
  const isActive = theme === 'dark';

  return (
    <SwitchContainer
      isActive={isActive}
      onClick={() => onChange(isActive ? 'light' : 'dark')}
    >
      {isActive ? (
        <>
          <ToggleThumb isActive={isActive} />
          <ThemeLabel isActive={isActive}>Dark</ThemeLabel>
        </>
      ) : (
        <>
          <ThemeLabel isActive={isActive}>Light</ThemeLabel>
          <ToggleThumb isActive={isActive} />
        </>
      )}
    </SwitchContainer>
  );
}
