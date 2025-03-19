import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";

await esbuild.build({
  entryPoints: ["./svelte-render-server.js"],
  outdir: "./dist/",
  bundle: true,
  platform: "node",
  format: "esm",
  external: ["svelte"],
  sourcemap: false,
  plugins: [
    // https://github.com/EMH333/esbuild-svelte
    sveltePlugin({
      // https://svelte.dev/docs/svelte/svelte-compiler#ModuleCompileOptions
      compilerOptions: {
        generate: "server",
        // https://github.com/EMH333/esbuild-svelte/#css-output
        // Include CSS in the files
        css: "injected",
      },
    }),
  ],
});
