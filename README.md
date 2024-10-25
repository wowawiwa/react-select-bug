Demonstrate **React Select** failing to render properly when re-rendering the `<head>` tag (or its parent, `<html>`) in a Remix context.

Unfortunately, re-rendering the `<head>` tag is not uncommon and can happen for reasons independent from your app.
For instance, a browser extension (e.g. Bitwarden) can cause hydratation to fail: The browser console shows `Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering` and renders the whole page again, which triggers the above-mentioned issue.

## See bug

- run `npm install` and `npm run dev`.
- Either click the button
- Or, on Firefox, with Bitwarden extension enabled, it should also cause the problem.

Before clicking the button (with Bitwarden disabled)
<img width="1512" alt="Screenshot 2024-10-25 at 17 37 17" src="https://github.com/user-attachments/assets/ea48d310-c922-43fa-b80d-2a87828610f0">

After clicking the button, React Select displays not as before:
<img width="1512" alt="Screenshot 2024-10-25 at 17 37 23" src="https://github.com/user-attachments/assets/58ac4ba5-a096-4403-8a64-cf518eea3df3">

When clicking the React Select input, the display is even less normal
<img width="1512" alt="Screenshot 2024-10-25 at 17 37 31" src="https://github.com/user-attachments/assets/b741a1d8-64ce-4ab0-a0fe-84115b092833">


## Setup

The setup is the simplest possible:

Bootstrap Remix:
```
npx create-remix@latest
```

Install React Select:
```
npm install react-select
```

(I also testes with the classic compiler, it does the same.)
