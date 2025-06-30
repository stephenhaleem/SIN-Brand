# Style Send Swiftly

Style Send Swiftly is a modern web application designed to streamline the process of sharing and managing CSS/SCSS stylesheets. It provides an intuitive interface for uploading, editing, and distributing styles, making collaboration between developers and designers seamless.

---

## Features

- **Upload Stylesheets:** Easily upload CSS or SCSS files for sharing or editing.
- **Live Editor:** Edit stylesheets directly in the browser with syntax highlighting.
- **Version Control:** Track changes and revert to previous versions of your styles.
- **Download & Share:** Download stylesheets or share them via unique links.
- **Preview:** Instantly preview how your styles affect sample HTML content.
- **Authentication:** Secure login and registration for personalized experiences.
- **Responsive Design:** Works smoothly on desktop and mobile devices.

---

## Technologies Used

- **Frontend:** React.js, Redux, TypeScript, SCSS, Monaco Editor
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** SCSS Modules, CSS-in-JS (styled-components)
- **Deployment:** Docker, Nginx, GitHub Actions (CI/CD)
- **Testing:** Jest, React Testing Library

---

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or cloud instance)
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/style-send-swiftly.git
   cd style-send-swiftly
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   - Copy `.env.example` to `.env` and fill in your configuration (MongoDB URI, JWT secret, etc).

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the app:**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Editing the Code

- **Frontend code:** Located in `/client` directory.
  - Main entry: `/client/src`
  - Styles: `/client/src/styles`
  - Components: `/client/src/components`
- **Backend code:** Located in `/server` directory.
  - Main entry: `/server/src`
  - API routes: `/server/src/routes`
  - Models: `/server/src/models`

To make changes:

1. Edit the relevant files in the `client` or `server` directories.
2. Save your changes; the development server supports hot reloading.
3. Test your changes locally before committing.

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or support, open an issue or contact the maintainer at [obilanaeniola01@gmail.com}.

---

## Customizing and Extending the Project

This section provides detailed instructions for developers on how to modify and extend key features of Style Send Swiftly, including managing product images, gallery content, cart functionality, delivery system, and site backgrounds.

### 1. Editing and Adding Images (Products & Gallery)

#### **Product Images**

- **Location:** Product images are typically stored in `/client/public/images/products` or managed via a cloud storage service (check your `.env` for storage configs).
- **To Add a Product Image:**
  1. Place your image file in the designated folder or upload via the admin dashboard (if implemented).
  2. Update the product entry in `/server/src/models/Product.js` (or relevant schema) to reference the new image filename or URL.
  3. If using a CMS or admin panel, use the UI to upload and assign images.
- **To Change a Product Image:**
  1. Replace the existing image file with your new image (same filename), or update the product's image reference in the database.
  2. Restart the server if images are cached.

#### **Gallery Images**

- **Location:** Gallery images are usually in `/client/public/images/gallery` or managed similarly to product images.
- **To Add/Remove Gallery Images:**
  1. Add or remove image files in the gallery folder.
  2. Update the gallery data source, typically `/client/src/data/gallery.js` or via the admin dashboard.
  3. For dynamic galleries, ensure the new images are referenced in the gallery component (`/client/src/components/Gallery.js`).

#### **Best Practices:**

- Use optimized image formats (e.g., `.webp`, `.jpg`).
- Keep filenames descriptive and consistent.
- For cloud storage, update the image URLs in the database or config files.

### 2. Editing and Adding to the Cart

- **Cart Logic Location:** `/client/src/store/cartSlice.ts` (Redux slice) and `/client/src/components/Cart.js`.
- **To Add Cart Features:**
  - **Add New Product to Cart:** Update the `addToCart` action in the Redux slice. Ensure product objects include all necessary fields (id, name, price, image).
  - **Edit Cart Item:** Modify the `updateCartItem` action to allow quantity or attribute changes.
  - **Remove Item:** Use the `removeFromCart` action.
  - **UI Changes:** Edit `/client/src/components/Cart.js` to update the cart display, add new buttons, or change layout.
- **Persistence:** Cart state may be saved in `localStorage` or synced with the backend for logged-in users. Check `/client/src/utils/storage.js` or related middleware.

### 3. Editing the Delivery System

- **Backend Logic:** Delivery and order management are handled in `/server/src/routes/orderRoutes.js` and `/server/src/models/Order.js`.
- **To Add/Edit Delivery Options:**
  1. Update the order schema to include new delivery fields (e.g., delivery method, address, status).
  2. Modify the delivery logic in `/server/src/controllers/orderController.js` to handle new delivery types or workflows.
  3. Update frontend forms in `/client/src/components/Checkout.js` to collect and display delivery information.
  4. For tracking, add a delivery status field and update it as the order progresses.
- **Integrating Third-Party Delivery APIs:** Add API calls in the backend controller and update the order status based on external responses.

### 4. Adding Background Images to the Site

- **Global Background:** Edit `/client/src/styles/global.scss` or the main layout component (e.g., `/client/src/App.tsx`).
  - Example (SCSS):
    ```scss
    body {
      background-image: url("/images/backgrounds/your-background.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
    }
    ```
- **Section-Specific Backgrounds:** Update the relevant component's SCSS or styled-component definition.
- **Dynamic Backgrounds:** Pass image URLs as props to components and set them via inline styles or styled-components.

### 5. General Tips

- **Hot Reloading:** Most changes in `/client` will hot reload. For backend changes, restart the server.
- **Testing:** After edits, use the provided Jest and React Testing Library tests, or add your own in `/client/src/__tests__` and `/server/tests`.
- **Documentation:** Comment your code and update this README as you make significant changes.

For further customization or questions, refer to the codebase structure above or contact the maintainer.
