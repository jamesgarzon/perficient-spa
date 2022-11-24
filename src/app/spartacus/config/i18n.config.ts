import { I18nConfig } from '@spartacus/core';
import { translationChunksConfig } from '@spartacus/assets';

export const PrfI18nConfig: I18nConfig = {
  i18n: {
    backend: {
      loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
    },
    chunks: translationChunksConfig,
    fallbackLang: 'en',
  },
};
