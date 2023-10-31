# Express Sample App

This express project can be used to demonstrate goast's ability to fix crashes.

## How to use this repository

1) Fork this repository if you haven't already.
2) Go to https://app.goast.ai and click the button to add a repository. Make sure to install the goast Github App in the organization where this repository exists (Probably just on your user).
3) Copy this stack trace to put into goast (Or you can click the `Express: TypeError` button in goast in the `Sample stack traces` section)

```
TypeError: Cannot set properties of undefined (setting 'name')
    at /workspace/goast-sample-app/express/src/server.js:20:27
    at Layer.handle [as handle_request] (/workspace/goast-sample-app/express/node_modules/express/lib/router/layer.js:95:5)
    at next (/workspace/goast-sample-app/express/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/workspace/goast-sample-app/express/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/workspace/goast-sample-app/express/node_modules/express/lib/router/layer.js:95:5)
    at /workspace/goast-sample-app/express/node_modules/express/lib/router/index.js:284:15
    at param (/workspace/goast-sample-app/express/node_modules/express/lib/router/index.js:365:14)
    at param (/workspace/goast-sample-app/express/node_modules/express/lib/router/index.js:376:14)
    at Function.process_params (/workspace/goast-sample-app/express/node_modules/express/lib/router/index.js:421:3)
    at next (/workspace/goast-sample-app/express/node_modules/express/lib/router/index.js:280:10)
```

4) Click `Generate Fix`

## About the stack trace

This example is a backend error in an express route. The main bug here is that the id from the request parameters is a string, while the id in the users array are numbers. So the comparison u.id === req.params.id will always return false, leading to an error, even if the user exists. It also doesn't check that the id used returns a valid user and it doesn't check that the updated values were correctly supplied in the request.

## Run this sample

If you want to see the crash in action, you can run this sample yourself by installing the dependencies with `npm install` and then running `npm run start`. You can then trigger the crash by running something like this: `curl -X PUT -H "Content-Type: application/json" -d '{"name": "David", "age": 40}' http://localhost:3000/users/5`.
