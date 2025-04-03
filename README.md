netlify.toml file in dist/todo/browser (to avoid cors error)

[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "https://your-shell-host.netlify.app"
    Access-Control-Allow-Methods = "GET, POST, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type"


2)dist/shell/browse  _headers file

/remoteEntry.json
  Access-Control-Allow-Origin: https://your-shell-host.netlify.app
  Access-Control-Allow-Methods: GET
  Access-Control-Allow-Headers: Content-Type

/Component-S7B7SZMN.js
  Access-Control-Allow-Origin: https://your-shell-host.netlify.app
  Access-Control-Allow-Methods: GET
  Access-Control-Allow-Headers: Content-Type


dist/todo/browse  _headers file

/remoteEntry.json
  Access-Control-Allow-Origin: https://your-shell-host.netlify.app
  Access-Control-Allow-Methods: GET
  Access-Control-Allow-Headers: Content-Type

/*.js
  Access-Control-Allow-Origin: https://your-shell-host.netlify.app
  Access-Control-Allow-Methods: GET
  Access-Control-Allow-Headers: Content-Type



