# React Router Exercise

This is a simple React application that demonstrates the usage of React Router for creating navigation within a single-page application (SPA). The application includes basic routing, nested routing, dynamic routing with route parameters, and programmatic navigation.


## Project Structure

/src
  /Components
    Home.jsx
    About
      About.jsx
      Mission.jsx
      Vision.jsx
      OpenHours.jsx
    Contact.jsx
    Blog.jsx
  NotFound.jsx
/App.jsx
/App.css
/index.js


## Dependencies

- React
- React Router DOM

## Features

### Basic Routing
Navigate between Home, About, and Contact pages using the navigation links.

### Nested Routing
The "About" page includes nested routes for Mission, Vision, and Open Hours.

### Dynamic Routing
The "Blog" component displays dynamic content based on the route parameter (e.g., /blog/:postId).

### Programmatic Navigation
The "Home" component includes a button that, when clicked, uses programmatic navigation to redirect the user to the About page.


## Usage
Explore the different features by navigating through the pages and interacting with the dynamic content. Click the "Go to About Page" button on the Home page to see programmatic navigation in action.

## Deployment 
[Click to view the deployed page]()
