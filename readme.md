# This is a template for a back-end restful API

### It contains the following libraries as default dependencies:

- [mongodb](https://www.npmjs.com/package/mongodb)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [joi](https://www.npmjs.com/package/joi)
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)
- [uuid](https://www.npmjs.com/package/uuid)

### Requirements

- [mongodb version 6.0 or later](https://www.mongodb.com/)
- [node.js](https://nodejs.org/en)

## Usage

- Development mode -> auto-reloads when a file in the app is modified.

```bash
npm run dev
```

- Non development mode -> need to re-run after modify a script.

```bash
npm start
```

## !Attention!

This template comes with a [.env](.env) file that normally you <span style="color: red"> do not </span>  want to <span style="color: orange"> commit </span> case it usually
is a file that you store <span style="color: green"> API keys </span>  and or other sensitive information.

You probally want to add a line to the .gitinore file with the text below  <span style="color: red"> so it wont </span> be <span style="color: yellow"> pushed </span> to your repository on the next commit.

```bash
.env
```
