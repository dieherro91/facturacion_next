export const ThemeSwitcher: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  return <button onClick={toggleTheme}>Cambiar Tema</button>;
};
