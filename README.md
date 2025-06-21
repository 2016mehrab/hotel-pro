# Hotel Pro: Internal Hotel Management Application

## Project Overview

**Hotel Pro** is a comprehensive internal web application developed to optimize daily operations for hotel staff. This  application provides tools for managing cabins, bookings, guests, and hotel analytics - all through an intuitive interface with dark mode support.

This project highlights my expertise in React, managing data with React Query, and creating secure, scalable apps with Supabase. 

### Key Features and Functionality

Hotel Pro provides a complete suite of features specifically designed for hotel operations:

*   **Authentication and User Management:**
    
    *   Secure login system for hotel employees.
        
    *   Administrator-level functionality for registering new staff accounts, ensuring controlled access.
        
    *   Personalized user profiles with avatar upload, name, and password modification options.
        
*   **Bookings Management:**
    
    *   A clear table display of all bookings, including arrival/departure dates, payment status, paid amounts, and detailed cabin and guest information.
        
    *   Advanced filtering capabilities by booking status: "unconfirmed," "checked in," and "checked out."
        
    *   Extensive booking data capture: number of guests, number of nights, guest observations, breakfast inclusion, and breakfast pricing.
        
    *   Direct actions to delete, check-in, or check-out bookings.
        
    *   **Automated Check-in Process:** Streamlined workflow for accepting external payments, confirming payment within the application, and optionally adding breakfast for the entire stay during check-in.
        
*   **Cabins Management:**
    
    *   Dynamic table view showcasing all available cabins with associated photos, names, capacities, prices, and current discounts.
        
    *   Full CRUD (Create, Read, Update, Delete) capabilities for cabins, including seamless photo upload functionality.
        
*   **Guests Management:**
    
    *   Centralized repository for guest data, encompassing full name, email, national ID, nationality, and a country flag for quick identification.
        
*   **Interactive Dashboard:**
    
    *   The primary landing screen offers critical operational insights customizable for the last 7, 30, or 90 days.
        
    *   Real-time tracking of guests checking in and out on the current day, with actionable links.
        
    *   Statistical summaries of recent bookings, total sales, check-ins, and occupancy rates.
        
    *   Visualizations including a chart of daily hotel sales (total vs. breakfast-only "extras").
        
    *   A chart providing insights into booking statistics based on stay durations.
        
*   **Application Settings:**
    
    *   A dedicated section for administrators to configure application-wide parameters:
        
        *   Default breakfast price.
            
        *   Minimum and maximum nights allowed per booking.
            
        *   Maximum guests permitted per booking.
            
*   **Dark Mode:**
    
    *   An optional dark mode interface to enhance user comfort and reduce eye strain.
        

## Technologies Utilized

This project demonstrates a robust full-stack implementation using contemporary technologies:

*   **Frontend:**
    
    *   **React** 
        
    *   **Vite** 
        
    *   **Styled Components** 
        
    *   **React Hook Form** 
        
    *   **React Query (TanStack Query)** 
        
    *   **React Router** 
        
    *   **Date-fns** 
        
*   **Backend & Database:**
    
    *   **Supabase** 
*   **Deployment:**
    
    *   **Netlify:** [https://hotel-professional.netlify.app](https://hotel-professional.netlify.app)
        

<!-- ## Project Structure and Development Workflow

The application adheres to a clear, modular, and maintainable project structure:

*   **Component-Based Architecture:** The frontend is built with reusable React components, promoting code reusability and maintainability.
    
*   **State Management:** Utilizes React's Context API for global state, complemented by custom hooks for encapsulating specific data fetching and mutation logic.
    
*   **Routing:** Employs React Router for dynamic client-side navigation, supported by Netlify's \_redirects configuration for Single-Page Application (SPA) compatibility.
    
*   **Secure Configuration:** Sensitive credentials and API keys are managed through environment variables, ensuring they are not hardcoded in the codebase. -->
    

## Database Schema
![Database Schema](/database-schema.png)

The conceptual database schema, built on PostgreSQL via Supabase, supports the application's comprehensive features:

*   users: Stores employee authentication details, along with user-specific data such as names and avatar references.
    
*   cabins: Contains detailed information for each cabin, including its name, capacity, pricing, discount, and a reference to its photo in storage.
    
*   guests: Maintains records for all hotel guests, including personal details, contact information, and nationality.
    
*   bookings: The central table for all booking records, establishing relationships with users, cabins, and guests. It tracks booking dates, guest counts, payment status, observations, breakfast details, total price, and current booking status.
    
*   settings: A dedicated table to store configurable application-wide parameters, such as default breakfast price, and booking duration/guest limits.
    

## Getting Started (Local Development)

To set up and run the Hotel Pro application in your local development environment:

1.  `git clone https://github.com/YOUR\_USERNAME/hotel-pro.git`
2. `cd hotel-pro`
3.  `npm install`
    
4.  **Set Up Supabase:**
    
    *   Create a new project on the [Supabase platform](https://supabase.com/).
        
    *   Configure your PostgreSQL database by creating the necessary tables (users, cabins, guests, bookings, settings).
        
    *   Implement Row-Level Security (RLS) policies on your tables to define access permissions.
        
    *   Establish Storage buckets (e.g., avatars and cabin-photos) and set up appropriate RLS policies for file access.
        
    *   Retrieve your Supabase Project URL and Public Anon Key from your Supabase project settings.
        
5. Create a `.env` file like the following-
    ```js
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_KEY="YOUR_SUPABASE_PUBLIC_ANON_KEY"
    ```
    
    

## Building for Production

To generate a production-optimized build of the application and test it locally before deployment:

1.  `npm run build`
    
2.  `npm run serve`
    
3.  The application will usually be served at http://localhost:3000.