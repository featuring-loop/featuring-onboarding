import localFont from 'next/font/local';

import type { AppProps } from 'next/app';
import { QueryProvider } from '@/shared/provider/QueryProvider';

const pretendard = localFont({
	src: '../fonts/PretendardVariable.woff2',
	variable: '--font-family',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryProvider>
			<style jsx global>{`
				:root {
					--font-family: ${pretendard.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</QueryProvider>
	);
}
