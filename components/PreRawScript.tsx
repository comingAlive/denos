const PreRawScript = () => {
  return (
    <pre className="w-full mx-auto text-base">
      {"const start = Date.now();\n" +
        'const globalStylesPath = "styles/globals.css";\n' +
        "\n" +
        'const cmdVer = ["yarn", "-v"];\n' +
        'const preWindows = ["cmd", "/c"];\n' +
        "\n" +
        'let packageManager = ["pnpm", "add", "-D"];\n' +
        "\n" +
        "try {\n" +
        "  const process = Deno.run({\n" +
        '    cmd: Deno.build.os === "windows" ? [...preWindows, ...cmdVer] : cmdVer,\n' +
        '    stdout: "piped",\n' +
        '    stderr: "piped",\n' +
        "  });\n" +
        '  const output = await process.output(); // "piped" must be set\n' +
        "  if (!output.length) {\n" +
        '    packageManager = ["npm", "i", "--save-dev "];\n' +
        "  }\n" +
        "  await process.status();\n" +
        "} catch (e) {\n" +
        '  packageManager = ["npm", "i", "--save-dev "];\n' +
        "}\n" +
        'if (Deno.args[0] === "--npm") {\n' +
        '  packageManager = ["npm", "i", "--save-dev "];\n' +
        "}\n" +
        'if (Deno.args[0] === "--yarn") {\n' +
        '  packageManager = ["yarn", "add", "-D "];\n' +
        "}\n" +
        "\n" +
        'console.log(packageManager[0] + " package manager was detected");\n' +
        "\n" +
        "const cmd = [\n" +
        '  "tailwindcss@latest",\n' +
        '  "postcss@latest",\n' +
        '  "autoprefixer@latest",\n' +
        "];\n" +
        "\n" +
        "const process = Deno.run({\n" +
        '  cmd: Deno.build.os === "windows"\n' +
        "    ? [...preWindows, ...packageManager, ...cmd]\n" +
        "    : [...packageManager, ...cmd],\n" +
        "});\n" +
        "await process.status();\n" +
        "\n" +
        "try {\n" +
        '  await Deno.readDirSync("styles");\n' +
        "} catch (_e) {\n" +
        '  await Deno.mkdirSync("styles");\n' +
        '  console.log("styles directory was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        "  await Deno.readTextFileSync(globalStylesPath);\n" +
        "} catch (_e) {\n" +
        '  await Deno.writeTextFileSync(globalStylesPath, "");\n' +
        '  console.log("globals.css file was created");\n' +
        "}\n" +
        "\n" +
        "const globalStyles = Deno.readTextFileSync(globalStylesPath);\n" +
        'if (globalStyles.includes("@tailwind")) {\n' +
        "} else {\n" +
        "  const file = await Deno.open(globalStylesPath, {\n" +
        "    write: true,\n" +
        "    create: true,\n" +
        "  });\n" +
        '  const imports = "@tailwind base;\\n" +\n' +
        '    "@tailwind components;\\n" +\n' +
        '    "@tailwind utilities;\\n\\n";\n' +
        "  Deno.writeTextFileSync(globalStylesPath, imports + globalStyles);\n" +
        "  file.close();\n" +
        '  console.log("tailwind imports were added");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        '  await Deno.readTextFileSync("postcss.config.js");\n' +
        "} catch (_e) {\n" +
        "  await Deno.writeTextFileSync(\n" +
        '    "postcss.config.js",\n' +
        '    "module.exports = {\\n" +\n' +
        '      "  plugins: {\\n" +\n' +
        '      "    tailwindcss: {},\\n" +\n' +
        '      "    autoprefixer: {},\\n" +\n' +
        '      "  },\\n" +\n' +
        '      "};\\n",\n' +
        "  );\n" +
        '  console.log("postcss.config.js file was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        '  await Deno.readTextFileSync("tailwind.config.js");\n' +
        "} catch (_e) {\n" +
        "  await Deno.writeTextFileSync(\n" +
        '    "tailwind.config.js",\n' +
        '    "module.exports = {\\n" +\n' +
        '      "  content: [\\n" +\n' +
        "      '    \"./pages/**/*.{js,jsx,ts,tsx}\",\\n' +\n" +
        "      '    \"./components/**/*.{js,jsx,ts,tsx}\",\\n' +\n" +
        '      "  ],\\n" +\n' +
        "      \"  darkMode: \\\"class\\\", // or 'media' or 'class'\\n\" +\n" +
        '      "  theme: {\\n" +\n' +
        '      "    extend: {},\\n" +\n' +
        '      "  },\\n" +\n' +
        '      "  plugins: [],\\n" +\n' +
        '      "};\\n",\n' +
        "  );\n" +
        '  console.log("tailwind.config.js file was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        "  await Deno.readTextFileSync(globalStylesPath);\n" +
        "} catch (_e) {\n" +
        '  await Deno.writeTextFileSync(globalStylesPath, "");\n' +
        '  console.log("globals.css file was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        '  await Deno.readDirSync("pages");\n' +
        "} catch (_e) {\n" +
        '  await Deno.mkdirSync("pages");\n' +
        '  console.log("pages directory was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        "  await Deno.readTextFileSync(globalStylesPath);\n" +
        "} catch (_e) {\n" +
        '  await Deno.writeTextFileSync(globalStylesPath, "");\n' +
        '  console.log("globals.css file was created");\n' +
        "}\n" +
        "\n" +
        "const fileNames: string[] = [];\n" +
        "\n" +
        'for await (const dirEntry of Deno.readDirSync("pages")) {\n' +
        '  if (dirEntry.name.indexOf("_app.") === 0) {\n' +
        "    fileNames.push(dirEntry.name);\n" +
        '    const appFile = Deno.readTextFileSync("pages/" + dirEntry.name);\n' +
        "    const imports = 'import \"../styles/globals.css\";\\n\\n';\n" +
        '    if (appFile.includes("styles/globals")) {\n' +
        "    } else {\n" +
        '      const file = await Deno.open("pages/" + dirEntry.name, {\n' +
        "        write: true,\n" +
        "        create: true,\n" +
        "      });\n" +
        '      Deno.writeTextFileSync("pages/" + dirEntry.name, imports + appFile);\n' +
        "      file.close();\n" +
        '      console.log("styles import was added to _app");\n' +
        "    }\n" +
        "  }\n" +
        "}\n" +
        "if (!fileNames.length) {\n" +
        "  await Deno.writeTextFileSync(\n" +
        '    "pages/_app.tsx",\n' +
        '    "export default function MyApp({ Component, pageProps }) {\\n" +\n' +
        '      "  return <Component {...pageProps} />;\\n" +\n' +
        '      "}\\n",\n' +
        "  );\n" +
        '  console.log("_app.tsx file was created");\n' +
        "}\n" +
        "\n" +
        "try {\n" +
        '  const appJsx = Deno.readTextFileSync("pages/_app.tsx");\n' +
        '  if (appJsx.includes("styles/globals.css")) {\n' +
        "  } else {\n" +
        '    const file = await Deno.open("pages/_app.tsx", {\n' +
        "      write: true,\n" +
        "      create: true,\n" +
        "    });\n" +
        "    const imports = 'import \"../styles/globals.css\";\\n\\n';\n" +
        '    Deno.writeTextFileSync("pages/_app.tsx", imports + appJsx);\n' +
        "    file.close();\n" +
        '    console.log("tailwind imports were added");\n' +
        "  }\n" +
        "} catch (e) {\n" +
        '  const appTsx = Deno.readTextFileSync("pages/_app.tsx");\n' +
        '  if (appTsx.includes("styles/globals.css")) {\n' +
        "  } else {\n" +
        '    const file = await Deno.open("pages/_app.tsx", {\n' +
        "      write: true,\n" +
        "      create: true,\n" +
        "    });\n" +
        "    const imports = 'import \"../styles/globals.css\";\\n\\n';\n" +
        '    Deno.writeTextFileSync("pages/_app.tsx", imports + appTsx);\n' +
        "    file.close();\n" +
        '    console.log("tailwind imports were added");\n' +
        "  }\n" +
        "}\n" +
        "\n" +
        "const end = Date.now();\n" +
        "console.log(`\n" +
        "tailwind.css was successfully installed in ${(end - start) / 1000} seconds\n" +
        "`);\n" +
        "\n" +
        "export {};\n"}
    </pre>
  );
};
export default PreRawScript;
