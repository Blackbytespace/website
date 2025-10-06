import type { TWebsiteConfig } from '@blackbyte/website-common';
import packageJson from './package.json' assert { type: 'json' };

export default {
  posthog: {
    projectApiKey: 'phc_t5yvxkWJDtICl40OBt4QfJmYgsT8CHfC44uNSOmyar3',
  },
  title: 'Blackbyte',
  description:
    'We are dedicated to create high quality tools and utilities to make your daily developer life better',
  welcome: {
    title: 'SugarCSS',
    description:
      'The CSS toolkit that you missed...<br />...like <span class="color-accent">a sugar in your coffee!</span>',
    withLove: `Made with <span class="color-accent">♥</span> by Blackbyte<br />on top of <a class="color-accent" href="https://lightningcss.dev" title="Lightningcss" target="_blank">Lightningcss</a>`,
  },
  version: packageJson.version,
  license: {
    name: 'MIT',
    url: 'https://github.com/Blackbytespace/sugarcss/blob/main/LICENSE.md',
  },
  repository: {
    name: 'Blackbyte',
    url: 'https://github.com/Blackbytespace',
  },
  og: {
    imageUrl:
      'https://raw.githubusercontent.com/Blackbytespace/website/refs/heads/main/assets/blackbyte-og.png',
  },
} as TWebsiteConfig;
