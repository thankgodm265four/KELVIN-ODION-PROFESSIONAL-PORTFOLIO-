import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default {
  integrations: [react(), tailwind()],
  site: 'https://example.com',
};
