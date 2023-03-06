import Header from '@/components/Header';
import { Inter } from 'next/font/google';

import '../styles/main.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	openGraph: {
		title: 'Focus Beauty',
		description: 'Studio kosmetologii high-tech',
		url: 'https://focusbeauty.pl',
		siteName: 'Focus Beauty',
		locale: 'pl-PL',
		type: 'website',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
