import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout.tsx";
import About from "./pages/About.tsx";
import App from "./pages/App.tsx";
import Contacts from "./pages/Contacts.tsx";
import Krones from "./pages/Krones.tsx";
import NewsPage from "./pages/News.tsx";
import Projects from "./pages/Projects.tsx";
import Service from "./pages/Service.tsx";
import Vacancy from "./pages/Vacancy.tsx";

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
            {
                path: 'about/jobs',
                element: <Vacancy />
            },
            {
                path: 'krones',
                element: <Krones />
            },
            {
                path: 'contacts',
                element: <Contacts />
            },
            {
                path: 'news',
                element: <NewsPage />
            },
            {
                path: 'service',
                element: <Service />
            }
        ]
    },
]);

export default router;
