# Grzegorz Dżyg — Portfolio

A dark, single-page portfolio presenting my work as a Java and Spring developer.
The site focuses on selected systems, the engineering decisions behind them,
and the way I approach business rules, data, testing and delivery.

**Planned live address:** [gregdzyg.onrender.com](https://gregdzyg.onrender.com)

## What the site includes

- an English-language introduction and contact section;
- four selected projects, led by the production AtelierByPT system;
- custom visual previews built specifically for each project;
- a concise description of how I think about backend development;
- responsive layouts for desktop, tablet and mobile;
- reduced-motion support, keyboard focus states and semantic page structure;
- metadata, Open Graph data, `robots.txt` and a sitemap;
- a fully static build suitable for free hosting on Render.

## Technology

- Next.js and React
- TypeScript
- Motion for restrained entrance animations
- custom CSS without a component or styling framework
- Lucide icons and locally packaged variable fonts

The production output contains static HTML, CSS and JavaScript only. It does
not require a Node.js server, database, CMS or external content API.

## Local development

Requirements: Node.js 22 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

Run the complete quality check:

```bash
npm run check
```

This command runs ESLint, TypeScript validation and a production build. The
same checks run in GitHub Actions for every push and pull request.

## Deploying to Render

Create a new **Static Site** in Render and connect this repository.

| Setting | Value |
| --- | --- |
| Build command | `npm ci && npm run build` |
| Publish directory | `out` |
| Branch | `main` |

No environment variables are required. Every push to the selected branch can
be deployed automatically.

## AI-assisted development

I defined the goal, visual direction, content, constraints and acceptance
criteria for this portfolio. Codex supported implementation, repository
inspection and technical verification. I reviewed the output, made the product
decisions and kept the final scope intentionally focused.

The workflow followed the same steps I would use for a small product:

1. define the audience, purpose and visual direction;
2. inspect the source projects and select evidence worth presenting;
3. implement one complete version rather than isolated page fragments;
4. run automated checks and review responsive behaviour;
5. polish the result before deployment.

This repository is an open example of how I use AI as a development tool while
remaining responsible for requirements, decisions and quality.

## Contact

- [LinkedIn](https://www.linkedin.com/in/gregdzyg)
- [GitHub](https://github.com/gregdzyg)
- [gregdzyg@gmail.com](mailto:gregdzyg@gmail.com)
