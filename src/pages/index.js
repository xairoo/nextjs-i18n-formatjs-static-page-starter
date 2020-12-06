import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useIntl } from 'react-intl';

import { getSortedLangsData } from '../lib/lang';

export default function Home({ allLangsData }) {
	const router = useRouter();
	const intl = useIntl();

	useEffect(() => {
		const { pathname } = router;
		if (pathname == '/') {
			router.push('/' + intl.locale.substring(0, 2));
		}
	});

	return null;
}

/*
export async function getStaticProps() {
	const allLangsData = getSortedLangsData();
	return {
		props: {
			allLangsData,
		},
	};
}
*/
