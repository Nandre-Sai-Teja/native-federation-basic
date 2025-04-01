netlify.toml file in dist/todo/browser (to avoid cors error)

[[headers]]
  for = "/*"
  [headers.values]
    Access-Control-Allow-Origin = "https://your-shell-host.netlify.app"
    Access-Control-Allow-Methods = "GET, POST, OPTIONS"
    Access-Control-Allow-Headers = "Content-Type"
