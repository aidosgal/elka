import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout.tsx";
import About from "./pages/About.tsx";
import App from "./pages/App.tsx";
import Projects from "./pages/Projects.tsx";
import Vacancy from "./pages/Vacancy.tsx";
import Krones from "./pages/Krones.tsx";
import Contacts from "./pages/Contacts.tsx";
import News from "./pages/News.tsx";
import Service from "./pages/Service.tsx";

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
                path: 'about/vacancy',
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
                element: <News />
            },
            {
                path: 'service',
                element: <Service />
            }
        ]
    },
]);

export default router;
