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
			<body>{children}</body>
		</html>
	);
}
