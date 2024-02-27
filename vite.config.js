import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 네트워크 사용시 서버 활성화
  server: {
    host: "192.168.0.50",
    port: 8080,
  },
});
