import { useEffect } from 'react';

export default function Docs({ Component, pageProps }) {
    useEffect(() => {
        document.body.className = 'rede-docs';
    });
    return <Component {...pageProps} />;
}
