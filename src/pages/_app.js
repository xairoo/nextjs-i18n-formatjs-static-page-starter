import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import flatten from 'flat';
import getUserLocale from 'get-user-locale';

import { languages, defaultLanguage } from './../i18n/config';

import '../styles/global.css';

const App = function ({ Component, pageProps }) {
	const userLocale = getUserLocale() && getUserLocale().substr(0, 2) ? getUserLocale().substr(0, 2) : false;

	const siteLocale = languages.includes(pageProps.language) ? pageProps.language : false;
	const lsLocale =
		typeof window !== 'undefined' && localStorage.getItem('lng') ? localStorage.getItem('lng') : false;
	const browserLocale = languages.includes(userLocale) ? userLocale : false;

	let language = defaultLanguage;
	if (siteLocale) {
		language = siteLocale;
	} else if (lsLocale) {
		language = lsLocale;
	} else if (browserLocale) {
		language = browserLocale;
	}

	if (typeof window !== 'undefined') {
		localStorage.setItem('lng', language);
	}

	const options = {
		locale: language,
		defaultLocale: defaultLanguage,
		messages: require('../locales/' + language + '/translation.json'),
	};

	options.messages = flatten(options.messages);

	return (
		<IntlProvider {...options}>
			<Component {...pageProps} />
		</IntlProvider>
	);
};

function loadLocaleData(locale) {
	console.log('loadLocaleData');
	switch (locale) {
		case 'de':
			return import('../locales/de/translation.json');
		default:
			return import('../locales/de/translation.json');
	}
}

export default App;
