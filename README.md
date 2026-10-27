# DDD personal website

Published at https://waste-didi.github.io/.

This repository contains the generated static Hexo website. GitHub Pages publishes
`master` from the repository root; `.nojekyll` keeps the files unchanged.
Internal navigation and assets use relative paths to support local previews and hosting.

To preview locally, run `python3 -m http.server 8000` from this directory and open
http://localhost:8000/. No build or dependency installation is required.

Commit changes and push `master` to publish. If regenerating with Hexo, configure
`url: https://waste-didi.github.io` and
`root: /` in the source site's `_config.yml` before deployment.
