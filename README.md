# Paradise Nursery

Paradise Nursery is an online plant shop built with React and Redux Toolkit.
Browse houseplants by category, add them to your cart, adjust quantities,
remove items and see live totals.

## Features
- Landing page with company name, About Us text and a "Get Started" button
- Product listing: 3 categories x 6 plants, each with thumbnail, name, price
- "Add to Cart" disables after adding and updates the cart icon count
- Cart page: per-plant subtotal, cart total, +/- quantity, delete,
  Checkout ("Coming Soon") and Continue Shopping
- Navbar (Home, Plants, Cart) on the listing and cart pages

## Run
```bash
npm install
npm run dev
```

## Structure
`src/App.jsx`, `AboutUs.jsx`, `ProductList.jsx`, `CartItem.jsx`, `CartSlice.jsx`, `store.jsx`, `App.css`
