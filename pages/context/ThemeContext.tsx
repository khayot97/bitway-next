// context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') setDarkMode(true);
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.body.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useCustomTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useCustomTheme must be used within ThemeProvider');
	return context;
};
