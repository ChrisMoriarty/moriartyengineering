# moriartyengineering.com — publish target

This repository serves www.moriartyengineering.com through GitHub Pages. It holds
built static files only, in `site/`. The source lives in the `llc-homepage`
repository; `scripts/deploy-pages.sh` there builds the site and commits the output
here, and the workflow in `.github/workflows/deploy.yml` uploads it.

The previous Astro 4 site is in this repository's history, before the commit that
introduced this README. To roll back, revert that commit and push.
