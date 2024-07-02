# Wordpress Engineering Handbook based on Astro + Starlight

## 🚀 Project Structure

Inside you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
        ├── css/
        ├── images/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Steps to add a new guide.

1. Create a new `.mdx` file in the `src/content/docs/` directory.
2. Add the [frontmatter]([frontmatter](https://starlight.astro.build/reference/frontmatter/)) to the top of the file. Here is an example:
```md
---
title: "New Guide"
description: "This is a new guide"
template: doc # This is the template for the guide, you can use `doc` or `splash`
---
```
3. Add the content to the file.
4. (Optional) Add the link to the guide in the `src/content/docs/index.mdx` file.
5. Update the listing in `astro.config.mjs` to include the new guide.

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/) or read [the Astro documentation](https://docs.astro.build).
