import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import usePluginImport from "vite-plugin-importer";
import ViteComponents from "unplugin-vue-components/vite";
import {
  AntDesignVueResolver,
  ElementPlusResolver,
  NaiveUiResolver,
} from "unplugin-vue-components/resolvers";
import { generateModifyVars } from "./build/style/generateModifyVars";
// import { LayuiVueResolver } from "@layui/layui-vue";

export default defineConfig(({ command, mode, ssrBuild }) => {
  // 可以根据不同环境自定义配置
  const IS_PROD = mode === "production";
  const { APP_HTTP_URL, APP_HTTP_PORT, APP_API_HTTP, APP_DIST_DIR } = loadEnv(
    mode,
    process.cwd(),
    ""
  );
  return {
    // base: "/dist/",
    plugins: [
      vue(),
      vueJsx(),
      // ElementPlus({
      //   // options
      // }),
      ViteComponents({
        dirs: ["./", "./components", "src/components"],
        directoryAsNamespace: true,
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: true,
          }),
          ElementPlusResolver({
            importStyle: "css",
          }),
          NaiveUiResolver(),
          // LayuiVueResolver(),
        ],
        // include: [/@layui/],
        //  extensions: ['vue'],
        // include: [/\.vue$/, /\.vue\?vue/,/[\\/]node_modules[\\/]/],
      }),
      //tsx用
      usePluginImport({
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
      }),
    ],
    resolve: {
      // 配置别名，注意：需要在tsconfig配置中同步
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    // 开发者相关的服务配置
    server: {
      host: APP_HTTP_URL, //调试网址
      port: Number(APP_HTTP_PORT), // 调试端口
      open: true, // 是否在运行时自动打开浏览器
      cros: true, //跨域设置
      // 代理配置
      proxy: {
        "^/api": {
          target: APP_API_HTTP,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
    // 编译配置
    esbuild: {
      // 生产环境删除 console、debugger 语句
      drop: IS_PROD ? ["debugger", "console"] : [],
    },
    // 打包构建时的配置
    build: {
      sourcemap: !IS_PROD, // 非生产环境生成 sourcemap
      outDir: APP_DIST_DIR,
      // assetsDir: APP_DIST_DIR+'static/img/', // 指定生成静态资源的存放路径
      // Rollup 打包配置
      rollupOptions: {
        // external: ['vue', 'element-plus'], // 确保外部化处理那些你不想打包进库的依赖
        // output: {
        //   globals: {
        //     vue: 'Vue', // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        //     'element-plus': 'elementPlus',
        //   },
        // },
        brotliSize: false, // 不统计
        target: "esnext",
        minify: "esbuild", // 混淆器，terser构建后文件体积更小
        plugins: [
          // visualizer({ open: true, gzipSize: true })
        ],
      },
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true, //css 拆分
      assetsInlineLimit: 5000, //小于该值 图片将打包成Base64
      minify: false, //是否禁用最小化混淆，esbuild打包速度最快，'terser'打包体积最小。
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  };
});
