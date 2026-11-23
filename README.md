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

## Read-only access requests

The public Hidden Entries form submits directly to the dedicated intake service:
https://filament-access-ddd.dandandandandu.chatgpt.site/
No mail app or copy/paste is required. D1 stores the requests; only the owner can
read the inbox at `/admin` after ChatGPT sign-in. The inventory itself retains
its existing private Sites allowlist.

After reviewing a request, add its exact ChatGPT email in Sites sharing settings
or ask Codex to do it using the supported Sites access tool. Marking a request
handled only organizes the inbox and does not grant access. Newly invited
inventory accounts remain read-only by default.
