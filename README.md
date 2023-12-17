# Fashion Globe

Fashion Globe is a dynamic web application designed to bring the latest fashion trends to your fingertips. Explore curated collections, discover diverse categories, and enjoy a personalized shopping experience.

## Features

- **Homepage:**
  - Explore curated collections.
  - Categories include Womens, Mens, Hats and more.

- **Category Pages:**
  - Click on a category to view detailed information and items.
  - Categories and items are dynamically fetched from Firebase.

- **Shop Page:**
  - View different categories with 4-5 featured items each.
  - Click on a category tag to see all items in that category.

- **Shopping Cart:**
  - Seamlessly manage your shopping cart using Redux.
  - Easily add, remove, and view items in your cart.

- **Checkout:**
  - Securely checkout with Stripe payment integration.
  - Experience efficient state management with Redux and Redux Saga.

- **User Authentication:**
  - Firebase authentication for personalized user experiences.
  - Maintain user-specific data for a seamless shopping journey.

## State Management with Redux

### Why Redux?

In Fashion Globe, Redux plays a crucial role in managing the application's state. Redux is used to centralize and organize the application's data, making it easier to manage and share state across different components. It provides a predictable and scalable way to handle complex state logic, ensuring a clean and maintainable codebase.

### Key Benefits of Using Redux:

1. **Predictable State:**
   - Redux follows a strict unidirectional data flow, making it easier to understand and predict how state changes in the application.

2. **Centralized State:**
   - All the application's state is stored in a single store, making it easy to track, debug, and manage the overall state of the application.

3. **Efficient Updates:**
   - Redux ensures that updates to the state are efficient by using a concept called immutability. This means that the state cannot be directly modified; instead, new copies of the state are created when changes occur.

4. **State Persistence:**
   - Redux state can be easily persisted, allowing for a smooth user experience even when the user navigates between different pages or refreshes the browser.

5. **Middleware Support:**
   - Redux middleware, such as Redux Saga, is utilized to handle asynchronous operations seamlessly. This is particularly important for tasks like fetching data from Firebase or handling side effects.

### How Redux is Integrated:

- In Fashion Globe, Redux is integrated with components that require access to shared state, such as the shopping cart and user authentication status.
- Actions trigger state changes, and reducers define how the state changes in response to these actions.
- Redux Saga is employed to handle asynchronous operations, such as fetching data or processing payments.

## Live Demo

Explore Fashion Globe: [https://fashion-globe.netlify.app/](https://fashion-globe.netlify.app/)

## How to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/akaashvaa/Fashion-Globe.git
   cd Fashion-Globe
2.  **.env :**
      add following name to the .env file:
    ```
    REACT_APP_STRIPE_PUBLISHABLE_KEY = "YOUR_KEY" 
    REACT_APP_STRIPE_PRIVATE_KEY = "YOUR_KEY"
    ```
