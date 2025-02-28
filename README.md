## Technologies Used
- Next.js: A React framework for building fast and efficient web applications.
- Prisma: A database toolkit that simplifies database access and management.
- MongoDB: A NoSQL database used to store video data and user information.
- Redux Toolkit: A state management library that helps manage the application's global state.
- UseSWR: A React hook for data fetching, caching, and revalidation, providing a simple and efficient way to manage remote data in your application.
- Tailwind CSS: A utility-first CSS framework for creating stylish and responsive designs with ease.
- NextAuth: A library for authentication in Next.js applications, integrated with Google and GitHub for user authentication.
- Rechart, Chart, MUI...

## SOURCE CODE WALKTHROUGH
In this demo, we used Redux for state management; Zustand, useSWR and ContextAPI are alternatives based on scalability.

# Styles: 
- global stylesheets to be applied across all components and pages, ensuring consistent styling across all components.
# Components:
- Houses reusable UI components.
# Hooks:
- Contains custom React hooks that encapsulate reusable logic.
- Encapsulates business logic or complex state management that can be reused across multiple components.
# Interfaces:
- Ensures type safety by defining the shape of data structures, which helps prevent runtime errors.
# Lib:
- Contains utility functions and libraries, modules like fetcher.js, serverAuth.js, or prismadb.js.
# Pages:
- Contains the application's pages (routes); Next.js page files like index.tsx, auth.tsx, or 404.tsx.
# Prisma:
- Contains Prisma database schema and migration files.
# .env and .env.local:
- Environment variable files such as .env and .env.local where sensitive or environment-specific data is needed.
# Redux :
- redux setup if the application gets bigger
# Sample-Redux-Comp :
- Components integrated with redux if the application gets bigger


EXTRA FEATURES :
1. Next.js 404 Page: I implemented a custom 404.js page inside the pages directory to provide a branded and user-friendly error page that replaces the default Next.js 404 handler.  

2. Basic Auth in Next.js: I implemented basic authentication using Next.js middleware (middleware.ts) to verify Authorization headers and restrict access to protected routes.  

3. OAuth in Next.js: I implemented OAuth authentication using NextAuth.js, integrating providers like Google and GitHub to enable secure, seamless login functionality.  

4. useSWR Hook: I implemented the useSWR hook from swr for efficient client-side data fetching, leveraging automatic caching and revalidation for real-time updates.  

5. Sample CRUD To-Do API: I implemented a Next.js API route (pages/api/todos.ts) with GET, POST, PUT, and DELETE handlers to manage a simple To-Do list stored in a database.  

6. MongoDB Connection with Prisma: I implemented MongoDB integration using Prisma ORM by configuring a prisma.schema file, connecting via prisma.$connect(), and performing queries with Prisma Client.  

# TAKE-AWAYs FROM THE FIGMA DESIGN :
- Modularity : Isolating the chart logic from the rest of the application, which promotes reusability and maintainability.

- Dynamic Styling: The chart uses a dynamic background gradient and adapts the size to fit its container, ensuring a polished UI that adapts well to different screen sizes.

- Clear User Feedback: The data labels are displayed with percentage values on the pie chart, providing clear and meaningful insights into the data for the user, enhancing the user experience with visually informative elements.


# TAKE-AWAYs FROM THE CODE :
- Responsiveness: The charts and form resizes dynamically based on the window size using TailwindCSS and resize event, ensuring a responsive UI.

- Hooks API: The code leverages React hooks (useRef, useState, useEffect) to manage component state, reference, and lifecycle, ensuring functional and optimized behavior.

- Performance Optimization: The useEffect hook only runs once when the component is mounted or resized, avoiding unnecessary re-renders and ensuring performance efficiency.

- Separation of Concerns: The chart's configuration (data and options) is separated from the rendering logic, allowing better maintainability and clarity.

- Customizable Chart: The chart is customizable with a gradient background, smooth curves, and tooltips, demonstrating attention to detail in the user experience.

- Clean and Readable Code: Clear naming conventions, detailed comments, and structured organization of the code ensure readability and ease of understanding for other developers.

- Use of External Libraries: The code utilizes external libraries like react-chartjs-2 and chart.js to handle the chart rendering and configuration, streamlining the process of creating complex visualizations.

- Event Handling and Cleanup: Proper event listener management in useEffect ensures that resources are freed when the component unmounts, avoiding potential memory leaks.

- Mobile-First Design: The sidebar employs responsive design principles with the use of transition-transform and translate-x-0/-translate-x-64, ensuring the sidebar can be smoothly toggled in mobile and desktop views, enhancing the user experience.

- Accessibility: The sidebar items use accessible icons (from react-icons/fa) and text labels, ensuring the component is easy to navigate and understand by users with different needs.

- Use of TypeScript: TypeScript is employed to enforce strong typing.

- State Management with Redux: Redux is used for centralized state management, specifically updating the navbar title when a menu item is clicked, ensuring global consistency across the app.

- Conditional Styling: The component utilizes conditional class names to apply different styles when an item is active (activeItem === label), ensuring a dynamic and responsive UI based on the app's state.

- Declarative Syntax for Chart : The components use a declarative approach with JSX, making the structure of the chart clear and easy to understand, which is a key React principle.

- A Higher-Order Component (HOC) is used to wrap all pages with the Layout component, ensuring consistent structure and navigation across the app without modifying individual components.