export default defineNuxtConfig({
  vite: {
    server: {
      allowedHosts: ['selflessly-positive-mammal.cloudpub.ru'],
      hmr: {
        clientPort: 443,  // HTTPS-порт
        protocol: 'wss',  // WebSocket Secure (для HTTPS)
        host: 'selflessly-positive-mammal.cloudpub.ru',
      },
    },
  },
  devServer: {
    port: 3000,  // Локальный порт (HTTP)
    host: '0.0.0.0',  // Разрешить доступ снаружи
  },
})