import React from 'react';
import Link from 'next/link';

import { useIntl } from 'react-intl';

import { languages } from '../i18n/config';

const LanguageMenu = (props) => {
	const intl = useIntl();

	const classes = ['text-sm', 'md:text-base', 'm-0.5', 'p-0.5'];

	return (
		<div className="flex flex-wrap content-end text-gray-300">
			{languages.map((lang, index) => {
				const current = ['uppercase', intl.locale === lang ? 'text-blue-600' : ''];
				return (
					<Link key={index} href={'/' + lang} onClick={() => intl.locale('en')}>
						<a className={classes.concat(current).join(' ').trim()}>{lang}</a>
					</Link>
				);
			})}
		</div>
	);
};

export default LanguageMenu;
