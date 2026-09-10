# Product List

A small React + TypeScript application that fetches products from the [DummyJSON Products API](https://dummyjson.com/products) and displays them in a responsive product list.

## Features

- Fetches product data from DummyJSON on initial render.
- Displays product title, description, image, and price.
- Shows a loading state while the request is in progress.
- Shows an error state with a **Retry** action when the request fails.
- Uses `AbortController` to cancel an in-flight request when a new request starts or the component is unmounted.
- Uses `styled-components` for component-level styling.
- Includes basic responsive behavior for tablet and laptop viewports.
- Written in TypeScript.

## Tech stack

- React
- TypeScript
- Vite
- styled-components
- DummyJSON REST API

## Project structure

```text
src/
├── App.tsx
├── main.tsx
├── hooks/
│   └── useFetchData.ts
├── types/
│   └── types.ts
└── ui/
    ├── MainView.tsx
    └── MainView.styled.tsx
```

### Main files

#### `src/main.tsx`

The application entry point. It creates the React root and renders the app inside `React.StrictMode`.

#### `src/App.tsx`

The top-level application component. It currently renders `MainView`.

#### `src/hooks/useFetchData.ts`

Contains the `useProducts` custom hook. The hook is responsible for:

- Fetching products.
- Tracking the request status.
- Storing the returned products.
- Cancelling previous/in-flight requests.
- Exposing a `refetch` function.

The hook exposes:

```ts
{
  products: Product[];
  status: Status;
  refetch: () => Promise<void>;
}
```

#### `src/types/types.ts`

Defines the `Product` interface, request `Status` enum, and return type for `useProducts`.

#### `src/ui/MainView.tsx`

Contains the main product-list UI and handles the loading, error, and success states.

#### `src/ui/MainView.styled.tsx`

Contains the styled-components used by the product list and its responsive layout.

## API

The application uses:

```text
GET https://dummyjson.com/products
```

The application expects the API response to contain a `products` array whose items include:

```ts
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}
```

## Getting started

### Prerequisites

Make sure you have a recent version of Node.js installed.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will start the local development server and provide the URL in the terminal.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Application states

The product request is represented by four states:

| State | Behavior |
|---|---|
| `INITIAL` | Initial state before the request has completed |
| `LOADING` | Displays a loading message |
| `SUCCESS` | Displays the product list |
| `ERROR` | Displays an error message and Retry button |


## Design considerations

The application keeps data fetching in a custom hook and presentation in `MainView`, which is a good separation for a small project:

```text
MainView
   │
   └── useProducts()
          │
          ├── API request
          ├── request status
          ├── products
          └── refetch()
```

This structure makes the fetching logic reusable without coupling it directly to the product-list UI.

## License

No license is currently specified for this project.
