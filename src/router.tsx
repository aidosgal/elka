import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout.tsx";
import About from "./pages/About.tsx";
import App from "./pages/App.tsx";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <App />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
    },
]);

export default router;
