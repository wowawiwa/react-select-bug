Shows React Select failing to render properly when re-rendering the `<head>` tag (or its parent, `<html>`).

Unfortunately, re-rendering the `<head>` tag is not uncommon and can happen for reasons independent from your app.
For instance, a browser extension (e.g. Bitwarden) can cause hydratation to fail: The browser console shows `Uncaught Error: There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering` and renders the whole page again, which triggers the above-mentioned issue.

## See bug

- run `npm install` and `npm run dev`.
- Either click the button
- Or, on Firefox, with Bitwarden extension enabled, it should also cause the problem.

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
