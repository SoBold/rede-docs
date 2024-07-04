import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Logo from './components/Logo/Logo';

export default {
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== '/') {
            return {
                titleTemplate: '%s - Rede Docs',
            };
        }
    },
    logo: Logo,
    project: {
        link: 'https://github.com/SoBold/rede-docs',
    },
    docsRepositoryBase: 'https://github.com/SoBold/rede-docs',
    footer: {
        text: Logo,
    },
} satisfies DocsThemeConfig;
