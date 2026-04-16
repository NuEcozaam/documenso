import { type MessageDescriptor, i18n } from '@lingui/core';

import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'Uw beveilidge omgeving om uw offertes te ondertekenen, zodat we kunnen starten met het verduurzamen van uw woning.';

  return [
    {
      title: title ? `${i18n._(title)} - NuEcozaam SIGN` : 'NuEcozaam',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'Uw beveilidge omgeving om uw offertes te ondertekenen, zodat we kunnen starten met het verduurzamen van uw woning.',
    },
    {
      name: 'author',
      content: 'Documenso, Inc.',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'NuEcozaam - Uw Partner In Verduurzaming',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@documenso',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
