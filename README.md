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
Add a new `<li>` inside its `entries-list` to add another shortcut; use the site's URL or its local shortcut in the card's `href`. Styling lives in `css/hidden-entries.css`.
The directory is linked only from the gray footer link across the static site.
Keep Hidden Entries out of the header and article menus. If regenerating with
Hexo, retain the footer link to `/hidden-entries/` and preserve this page and stylesheet.

## Inventory access

Hidden Entries contains website shortcuts only; it does not collect access requests.
The inventory website handles sign-in and approved access. Existing permissions
and its separate approval service are managed independently of this directory.

## Print shortcut

`print/index.html` redirects `/print/` to Filament Home, with a manual link as fallback.
Keep it when regenerating Hexo. The inventory application remains hosted on Sites;
its existing sign-in and sharing permissions still apply.
