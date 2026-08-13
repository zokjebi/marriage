import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  base: "/marriage/",
  server: {
    // true -> IPv4/IPv6 모두 바인딩. '0.0.0.0'은 IPv4만 바인딩해서
    // 윈도우에서 localhost(::1)로 접속하면 404가 난다.
    host: true,
    // base 때문에 루트(/)가 아니라 /marriage/ 로 열어야 한다.
    open: true,
  },
});
