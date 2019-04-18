# parcel-plugin-springmustache

## Exemple de configuration
```json
"scripts": {
    "start": "parcel src/main/resources/templates/*.mustache  --no-cache --out-dir=target/classes/static/bundle --public-url=/bundle/",
    "build": "parcel build src/main/resources/templates/*.mustache --no-cache --out-dir=target/classes/static/bundle --public-url=/bundle/"
  },
```
