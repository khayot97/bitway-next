// import type { AppProps } from 'next/app';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import React, { useState } from 'react';
// import { light } from '../scss/MaterialTheme';
// import { ApolloProvider } from '@apollo/client';
// import { useApollo } from '../apollo/client';
// import { appWithTranslation } from 'next-i18next';
// import '../scss/app.scss';
// import '../scss/pc/main.scss';
// import '../scss/mobile/main.scss';

// const App = ({ Component, pageProps }: AppProps) => {
// 	// @ts-ignore
// 	const [theme, setTheme] = useState(createTheme(light));
// 	const client = useApollo(pageProps.initialApolloState);

// 	return (
// 		<ApolloProvider client={client}>
// 			<ThemeProvider theme={theme}>
// 				<CssBaseline />
// 				<Component {...pageProps} />
// 			</ThemeProvider>
// 		</ApolloProvider>
// 	);
// };

// export default appWithTranslation(App);

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';
import { appWithTranslation } from 'next-i18next';
import '../scss/app.scss';
import '../scss/pc/main.scss';
import '../scss/mobile/main.scss';
import { ThemeProvider } from './context/ThemeContext';
import { Component } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
	const client = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider>
				<Component {...pageProps} />
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default appWithTranslation(App);
