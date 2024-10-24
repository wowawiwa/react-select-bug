Setup demonstrating the React Select bug with Remix https://github.com/JedWatson/react-select/issues/5937 (Firefox, with Bitwarden extension)

## See bug

run `npm install` and `npm run dev`. On Firefox, with Bitwarden extension enabled, you should see React Select displaying weirdly, as if styles aren't applied.

Working:
<img width="2344" alt="Screenshot 2024-10-24 at 17 08 10-expected" src="https://github.com/user-attachments/assets/fb978b20-ba35-4157-8c76-c312499d07fc">

Not working:
<img width="2341" alt="Screenshot 2024-10-24 at 17 08 19-unexpected" src="https://github.com/user-attachments/assets/fc5f5116-3282-42ca-ada4-25da3c3fb263">

## Setup

I just did this:

```
npx create-remix@latest --template remix-run/remix/templates/express
```

and installed React Select:
```
npm install react-select
```
