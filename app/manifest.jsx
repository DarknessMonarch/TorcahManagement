export default function manifest() {
    return {
      name: 'Torcah',
      short_name: 'Torcah',
      description: 'Webapp for managing properties, delivery, rentals, drivers, users',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }