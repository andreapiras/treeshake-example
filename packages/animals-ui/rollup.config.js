import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    output: [{ file: pkg.main, name: pkg.name, format: "umd", globals }],
    external: [
      ...Object.keys(pkg.devDependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [babel({ exclude: [/node_modules/] }), resolve()],
  },
];
