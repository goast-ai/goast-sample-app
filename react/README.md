# React Sample App

This react project can be used to demonstrate goast's ability to fix crashes.

## How to use this repository

1) Fork this repository if you haven't already.
2) Go to https://app.goast.ai and click the button to add a repository. Make sure to install the goast Github App in the organization where this repository exists (Probably just on your user).
3) Copy this stack trace to put into goast (Or you can click the `React: TypeError` button in goast in the `Sample stack traces` section)

```
Uncaught TypeError: Cannot read properties of null (reading 'first')
    at DisplayUser (DisplayUser.jsx:8:33)
    at renderWithHooks (react-dom.development.js:16305:18)
    at updateFunctionComponent (react-dom.development.js:19588:20)
    at beginWork (react-dom.development.js:21601:16)
    at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)
    at HTMLUnknownElement.sentryWrapped (helpers.ts:98:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
    at invokeGuardedCallback (react-dom.development.js:4277:31)
    at beginWork$1 (react-dom.development.js:27451:7)
    at performUnitOfWork (react-dom.development.js:26557:12)
    at workLoopSync (react-dom.development.js:26466:5)
    at renderRootSync (react-dom.development.js:26434:7)
    at performSyncWorkOnRoot (react-dom.development.js:26085:20)
    at flushSyncCallbacks (react-dom.development.js:12042:22)
    at react-dom.development.js:25651:13
```

4) Click `Generate Fix`

## About the stack trace

This example is a frontend error where a React component is referencing some state that is unexpectedly null.

## Run this sample

If you want to see the crash in action, you can run this sample yourself by installing the dependencies with `npm install` and then running `npm run dev`. 

## Sentry integration

If you want crashes to go to your sentry integration add a `.env.local` file with your DSN. Something like this: `VITE_SENTRY_DSN="<your dsn>"`