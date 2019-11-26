# reg-mac-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### public folder

Static assets placed in the `public` folder will simply be copied and not go through webpack.
In public/index.html or other HTML files used as templates by html-webpack-plugin, you need to prefix the link with <%= BASE_URL %>

### previewing build

```
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

### deployment

Deployment configured for github pages per [Vue deployment](https://cli.vuejs.org/guide/deployment.html#github-pages)

To set travis environment variable with github token:
`> travis env set GITHUB_TOKEN xxx`

