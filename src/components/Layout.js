import Head from 'next/head';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import LanguageMenu from './LanguageMenu';

const Layout = function ({ children, home }) {
	const intl = useIntl();
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
					rel="stylesheet"
				/>
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta name="og:title" content={'siteMeta.title'} />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>
					{intl.formatMessage({
						id: 'siteMeta.title',
					})}
				</title>
			</Head>
			<LanguageMenu />
			<header>
				<h1>
					{intl.formatMessage({
						id: 'siteMeta.title',
					})}
				</h1>
				{home ? (
					<>
						<h1>
							{intl.formatMessage({
								id: 'site',
							})}
							: /
						</h1>
					</>
				) : (
					<>
						<h1>
							{intl.formatMessage({
								id: 'site',
							})}
							: [lang]
						</h1>
					</>
				)}
			</header>

			<main>{children}</main>

			{!home && (
				<Link href="/">
					<a className="text-blue-600">
						{intl.formatMessage({
							id: 'backTo',
						})}{' '}
						/
					</a>
				</Link>
			)}
		</>
	);
};
export default Layout;
