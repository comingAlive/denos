const start = Date.now();
const globalStylesPath = "styles/globals.css";

const cmdVer = ["yarn", "-v"];
const preWindows = ["cmd", "/c"];

let packageManager = ["yarn", "add", "-D"];

try {
  const process = Deno.run({
    cmd: Deno.build.os === "windows" ? [...preWindows, ...cmdVer] : cmdVer,
    stdout: "piped",
    stderr: "piped",
  });
  const output = await process.output(); // "piped" must be set
  if (!output.length) {
    packageManager = ["npm", "i", "--save-dev "];
  }
  await process.status();
} catch (e) {
  packageManager = ["npm", "i", "--save-dev "];
}
if (Deno.args[0] === "--npm") {
  packageManager = ["npm", "i", "--save-dev "];
}

console.log(packageManager[0] + " package manager was detected");

const cmd = [
  "tailwindcss@3.0.0-alpha.1",
  "postcss@latest",
  "autoprefixer@latest",
];

const process = Deno.run({
  cmd:
    Deno.build.os === "windows"
      ? [...preWindows, ...packageManager, ...cmd]
      : [...packageManager, ...cmd],
});
await process.status();

try {
  await Deno.readDirSync("styles");
} catch (_e) {
  await Deno.mkdirSync("styles");
  console.log("styles directory was created");
}

try {
  await Deno.readTextFileSync(globalStylesPath);
} catch (_e) {
  await Deno.writeTextFileSync(globalStylesPath, "");
  console.log("globals.css file was created");
}

const globalStyles = Deno.readTextFileSync(globalStylesPath);
if (globalStyles.includes("@tailwind")) {
} else {
  const file = await Deno.open(globalStylesPath, {
    write: true,
    create: true,
  });
  const imports =
    "@tailwind base;\n" +
    "@tailwind components;\n" +
    "@tailwind utilities;\n\n";
  Deno.writeTextFileSync(globalStylesPath, imports + globalStyles);
  file.close();
  console.log("tailwind imports were added");
}

try {
  await Deno.readTextFileSync("postcss.config.js");
} catch (_e) {
  await Deno.writeTextFileSync(
    "postcss.config.js",
    "module.exports = {\n" +
      "  plugins: {\n" +
      "    tailwindcss: {},\n" +
      "    autoprefixer: {},\n" +
      "  },\n" +
      "};\n"
  );
  console.log("postcss.config.js file was created");
}

try {
  await Deno.readTextFileSync("tailwind.config.js");
} catch (_e) {
  await Deno.writeTextFileSync(
    "tailwind.config.js",
    "module.exports = {\n" +
      "  content: [\n" +
      '    "./pages/**/*.{js,jsx,ts,tsx}",\n' +
      '    "./components/**/*.{js,jsx,ts,tsx}",\n' +
      "  ],\n" +
      "  darkMode: \"class\", // or 'media' or 'class'\n" +
      "  theme: {\n" +
      "    extend: {},\n" +
      "  },\n" +
      "  plugins: [],\n" +
      "};\n"
  );
  console.log("tailwind.config.js file was created");
}

try {
  await Deno.readTextFileSync(globalStylesPath);
} catch (_e) {
  await Deno.writeTextFileSync(globalStylesPath, "");
  console.log("globals.css file was created");
}

try {
  await Deno.readDirSync("pages");
} catch (_e) {
  await Deno.mkdirSync("pages");
  console.log("pages directory was created");
}

try {
  await Deno.readTextFileSync(globalStylesPath);
} catch (_e) {
  await Deno.writeTextFileSync(globalStylesPath, "");
  console.log("globals.css file was created");
}

const fileNames: string[] = [];

for await (const dirEntry of Deno.readDirSync("pages")) {
  if (dirEntry.name.indexOf("_app.") === 0) {
    fileNames.push(dirEntry.name);
    const appFile = Deno.readTextFileSync("pages/" + dirEntry.name);
    const imports = 'import "../styles/globals.css";\n\n';
    if (appFile.includes("styles/globals")) {
    } else {
      const file = await Deno.open("pages/" + dirEntry.name, {
        write: true,
        create: true,
      });
      Deno.writeTextFileSync("pages/" + dirEntry.name, imports + appFile);
      file.close();
      console.log("styles import was added to _app");
    }
  }
}
if (!fileNames.length) {
  await Deno.writeTextFileSync(
    "pages/_app.tsx",
    "export default function MyApp({ Component, pageProps }) {\n" +
      "  return <Component {...pageProps} />;\n" +
      "}\n"
  );
  console.log("_app.tsx file was created");
}

try {
  const appJsx = Deno.readTextFileSync("pages/_app.tsx");
  if (appJsx.includes("styles/globals.css")) {
  } else {
    const file = await Deno.open("pages/_app.tsx", {
      write: true,
      create: true,
    });
    const imports = 'import "../styles/globals.css";\n\n';
    Deno.writeTextFileSync("pages/_app.tsx", imports + appJsx);
    file.close();
    console.log("tailwind imports were added");
  }
} catch (e) {
  const appTsx = Deno.readTextFileSync("pages/_app.tsx");
  if (appTsx.includes("styles/globals.css")) {
  } else {
    const file = await Deno.open("pages/_app.tsx", {
      write: true,
      create: true,
    });
    const imports = 'import "../styles/globals.css";\n\n';
    Deno.writeTextFileSync("pages/_app.tsx", imports + appTsx);
    file.close();
    console.log("tailwind imports were added");
  }
}

const end = Date.now();
console.log(`
tailwind.css was successfully installed in ${(end - start) / 1000} seconds
`);

export {};
