# fugu

This is small API written in Node.js v14.16.0.
There are two routes:
 * for login user and getting jwt token (username: test@gmail.com, password: test)
 * for  email summarizer
 

# Node.js 
As stated already this was tested on Node  v14.16.0 (so we can install nvm to use it for this version)

Open terminal inside server folder and type
```javascript
npm install
```
Rename .env.example  to .env
Inside .env files update value for OPENAI_API_KEY which you get when you register on openAI .

Type command to start the server
```javascript
npm run start
```

The comand to start server in dev mode
```javascript
npm run dev
```

The url of swagger documentation: http://localhost:3000/api-docs/
