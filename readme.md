This repo is the reproduction repo of changed mysql default object.
The behaviour introduced in https://github.com/sidorares/node-mysql2/pull/2574 PR.

## Steps to reproduce
1. Clone this repo
2. Run `npm install`
3. Run 'docker compose up -d'
4. Run `npm start`

The output will be:
```
  [
+   [Object: null prototype] {
-   {
      total: 2
    }
  ]
```

The new `[Object: null prototype]` appeared in the output.
The reason is the new constructor of the object in the mysql2 library.
https://github.com/sidorares/node-mysql2/blob/cf3fa60842e7e359db5b1d676f93a22ad6fea082/lib/parsers/text_parser.js#L134
