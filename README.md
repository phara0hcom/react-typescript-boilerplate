# (WIP) React-TypeScript-Boilerplate

This is my attempt at a boilerplate still WIP. **Use at your own peril.**

## WARNING!

Included some css with dark/light theming, might remove it since you don't want to remove it every time you start a new project. Still thinking what is better a full color theme where you can change the colors or keep it as empty as possible. Right now I'm leaning to option one.

## TODO (subject to change)

- [x] Dev server
- [x] Hello World
- [x] scss modules and imports
- [x] Update webpack to v5
- [x] Improve webpack build production script
- [x] GitHub Pages deploy script
- [x] Webpack use .env.development.local
- [ ] Cypress testing
- [ ] add some modules
  - [ ] Navbar
  - [ ] Buttons
    - [ ] Standard button
    - [ ] icon button
  - [ ] table
  - [ ] modal
- [ ] Full color theming or remove it

<br>

## Install

```shell
npm install
```

## Scrips

Scrips that are available<br>
<br>

### Start

Starts dev server and opens browser with hot reload.

```shell
npm start
```

<br>

### Build

```shell
npm run build
```

<br>

## GitHub Pages

When this project is pushed to the `main` branch it will automatically deploy to GitHub pages.

Want to add environment variables see the next section.

If you rather not have it happen you can change the branch in the `./.github/workflows/main.yml` file or completely delete the folders and file.

<br>

## Environment variables

For development you can add `.env.development.local` in the root of the project.

#### `.env.development.local` :

```
YOUR_KEY_NAME=<The value of the key>
```

#### `./src/yourFile.(ts(x)|js(x))` :

```javaScript
const myKey = process.env.YOUR_KEY_NAME
```

GitHub pages Environment variables can be added by adding your environment Keys here and in you repository settings `https://github.com/< userName >/< repository >/settings/secrets` then adding them in the `./.github/workflows/main.yml` in the `build` section and un-comment `env:` and the next line like this and add you ow key(s):

```yml
- name: Build
  # Add your environment Keys here and in you repository settings
  # https://github.com/< userName >/< repository >/settings/secrets
  env:
    YOUR_KEY_NAME: ${{ secrets.YOUR_KEY_NAME_GITHUB }}
  run: |
    npm install
    npm run build
```

<br>

---

<br>
Copyright (c) 2020 Tamer Elsayed
