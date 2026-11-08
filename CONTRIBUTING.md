# Contributing to VThink Tech Hub

Thanks for helping! This guide assumes you have never opened a pull request before.

## 1. Set up (once)

1. Create a GitHub account if you don't have one.
2. Click **Fork** at the top right of this repo. You now have your own copy.
3. Clone your fork:

   ```bash
   git clone https://github.com/YOUR-USERNAME/vthinktechhub.github.io.git
   cd vthinktechhub.github.io
   ```

## 2. Pick something to work on

- Browse issues labelled **good first issue**.
- Comment on the issue to claim it. A maintainer will assign it to you.
- Have your own idea? Open an issue first and describe it, so we can agree before you build.

## 3. Make your change

```bash
git checkout -b fix-short-description
```

- Page content lives in `index.html`, styles in `css/style.css`, behaviour in `js/main.js`.
- Images go in `assets/img/`. Keep each image under 100 KB (compress at https://squoosh.app).
- Preview locally with `python -m http.server 8000` and open http://localhost:8000.
- Check the page on a phone-sized window too.

## 4. Open a pull request

```bash
git add .
git commit -m "Short description of what you changed"
git push origin fix-short-description
```

Then open your fork on GitHub and click **Compare & pull request**. Fill in the template, link the issue (`Closes #12`), and add a screenshot if you changed anything visible.

## What makes a good contribution

- **One change per pull request.** Small PRs get reviewed and merged faster.
- **Real improvements.** Fix a bug, improve accessibility or speed, add content the hub needs. Please don't send PRs that only change whitespace or fix one typo in isolation.
- **Your own work.** Using AI tools to help is fine, but understand every line you submit and be ready to explain it in review.

## Review

A maintainer will review within a few days. You may be asked for changes; that's normal and part of learning. Once approved, your PR is merged and your name appears in the contributors list.

By contributing, you agree that your work is released under the [MIT License](LICENSE) and that you'll follow our [Code of Conduct](CODE_OF_CONDUCT.md).
