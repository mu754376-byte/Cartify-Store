CARTIFY FINAL STORE BUILD

Files:
- index.html: storefront home page
- all-products.html: complete product collection
- admin.html: store administration and deep customization
- assets/cartify-logo.svg: built-in CARTIFY logo
- assets/cartify-favicon.svg: CARTIFY browser icon
- assets/cart-hero.png: hero artwork

Admin includes:
- CARTIFY logo/brand name/browser title/favicon controls
- theme, colors, typography and spacing
- hero image and homepage text
- Top Selling Products selection and any rotation count
- category button editor
- contact/social details
- custom page builder for extra pages
- product management and image upload
- store backup export/import for moving local data

Important: this is a static HTML store. Admin data is stored in the browser localStorage. For a public multi-device store where customers share the same products/orders/admin data, a hosted database/backend and real payment provider are still required.


Published-data fix: assets/cartify-data.js contains the exported store data so the published site does not depend on one device's localStorage. Regenerate this file when admin data is changed and the site must be synchronized across devices.
