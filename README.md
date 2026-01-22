# 🌿 Paradise Nursery – e-plantShopping

Paradise Nursery is a React-based shopping cart application for an online plant store.  
The application allows users to browse different categories of houseplants, add plants to a shopping cart, update quantities, and view total costs using Redux state management.

This project was developed as part of the **Final Project: Paradise Nursery Shopping Application**.

---

## 🚀 Features

- Landing page with a background image and **Get Started** button
- Product listing page displaying plants grouped by categories
- Shopping cart functionality using **Redux Toolkit**
- Dynamic cart icon showing total number of items
- Ability to:
  - Add plants to cart
  - Increase or decrease quantity
  - Remove items from cart
  - View subtotal per item and total cart amount
- Continue shopping and checkout (placeholder) buttons
- Responsive UI with reusable React components

---

## 🪴 Plant Categories

The application includes multiple categories of houseplants, such as:

- Air Purifying Plants  
- Aromatic Fragrant Plants  
- Insect Repellent Plants  
- Medicinal Plants  
- Low Maintenance Plants  

Each category contains **at least six unique plants**, each with:
- Thumbnail image
- Plant name
- Description
- Price
- Add to Cart button

---

## 🛒 Shopping Cart Functionality

The cart page provides:
- Total cart amount
- Individual plant subtotal
- Quantity increment and decrement buttons
- Delete button for each plant
- Continue Shopping button
- Checkout button (Coming Soon)

All cart operations are handled using **Redux Toolkit**.

---

## 🧰 Technologies Used

- **React** (functional components & hooks)
- **Redux Toolkit**
- **React Redux**
- **Vite**
- **JavaScript (ES6)**
- **CSS**
- **GitHub Pages** for deployment

---

## 📂 Project Structure

```text
e-plantShopping/
│
├── README.md
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   ├── CartSlice.jsx
│   ├── store.js
│   ├── main.jsx
│   └── index.css
