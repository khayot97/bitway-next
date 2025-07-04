// components/ThemeToggle.tsx
import React from 'react';
import { Button } from '@mui/material';
import { useCustomTheme } from '../../pages/context/ThemeContext';
const ThemeToggle = () => {
	const { darkMode, toggleDarkMode } = useCustomTheme();

	return (
		<Button onClick={toggleDarkMode} variant="outlined">
			{darkMode ? '☀️ Light' : '🌙 Dark'}
		</Button>
	);
};

export default ThemeToggle;
