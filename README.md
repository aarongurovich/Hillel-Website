## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/aarongurovich/hillel-website.git](https://github.com/aarongurovich/hillel-website.git)
    cd hillel-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` to view the site.

## Available Scripts

* `npm run dev`: Starts the development server with hot module replacement.
* `npm run build`: Compiles the application for production.
* `npm run preview`: Locally previews the production build.
* `npm run lint`: Runs ESLint to check for code quality and errors.

## Customization

### Tailwind Configuration
The project uses a custom Tailwind configuration located in `tailwind.config.js`. It includes:
* **Fonts**: Open Sans and Montserrat for a clean, academic look.
* **Animations**: Custom bounce animation keyframes.

### Data Update
To update website content, modify the data files in `src/data/` (e.g., `eventData.ts` for events, `galleryData.ts` for images) or edit components in `src/components/`.

## Author

**Aaron Gurovich**
Developer | Texas Tech Hillel

* [LinkedIn](https://www.linkedin.com/in/aaron-gurovich/)

---

This project was bootstrapped with Bolt using the bolt-vite-react-ts template.
