// vite.config.js
import { defineConfig } from "file:///D:/RentEase/RentEase/node_modules/vite/dist/node/index.js";
import react from "file:///D:/RentEase/RentEase/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tailwindcss from "file:///D:/RentEase/RentEase/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/RentEase/RentEase/vite.config.js";
var vite_config_default = defineConfig({
  server: {
    host: '0.0.0.0'
  },
  preview: {
    port: 8080
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  resolve: {
    alias: {
      "/@/": new URL("src/", __vite_injected_original_import_meta_url).pathname
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxSZW50RWFzZVxcXFxSZW50RWFzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUmVudEVhc2VcXFxcUmVudEVhc2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1JlbnRFYXNlL1JlbnRFYXNlL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcclxuXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnL0AvJzogbmV3IFVSTCgnc3JjLycsIGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8saUJBQWlCO0FBSjZILElBQU0sMkNBQTJDO0FBT3RNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsWUFBWSxDQUFDO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPLElBQUksSUFBSSxRQUFRLHdDQUFlLEVBQUU7QUFBQSxJQUMxQztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
