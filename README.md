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

## Hidden Entries

`hidden-entries/index.html` is a small directory of personal websites and tools.
Add a new `<li>` inside its `entries-list` to add another shortcut; keep the real
site URL in the card's `href`. Styling lives in `css/hidden-entries.css`.
The directory is linked from the header, article menus, and footer across the
static site. If regenerating with Hexo, also retain a `Hidden Entries` menu item
pointing to `/hidden-entries/` and preserve this page and stylesheet.
