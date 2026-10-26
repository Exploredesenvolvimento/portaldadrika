// Service worker do Portal Drika Moraes.
// Ele só permite instalar o portal como app no celular.
// Não guarda nada em cache: o aluno sempre vê a versão mais nova e os dados do banco em tempo real.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
