import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // localhost로 띄우고 싶으면 서버를 비활성화 함
  // server: {
  //   host: "192.168.0.240",
  //   port: 8080,
  // },
});
