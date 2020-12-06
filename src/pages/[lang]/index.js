import Link from 'next/link';

import { useIntl } from 'react-intl';

import Layout from '../../components/Layout';
import { getAllLanguageSlugs, getLanguage } from '../../lib/lang';

export default function LangIndex({ language }) {
	const intl = useIntl();

	return (
		<Layout>
			<div>
				{intl.formatMessage({
					id: 'language',
				})}
				: {language}
			</div>
			<div>{intl.formatNumber(522486246.25, { style: 'currency', currency: 'EUR' })}</div>
			<div>{intl.formatNumber(2453783.45, { style: 'decimal' })}</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getAllLanguageSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const language = getLanguage(params.lang);
	return {
		props: {
			language,
		},
	};
}
