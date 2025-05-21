import { RouteObject } from "react-router-dom";
import { Layout } from "@/pages/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { About } from "@/pages/About";
import { News } from "@/pages/News";
import { Careers } from "@/pages/Careers";
import { Catering } from "@/pages/Catering";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "about", element: <About /> },
            { path: "news", element: <News /> },
            { path: "careers", element: <Careers /> },
            { path: "catering", element: <Catering /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },

        ]
    }
];

export default routes;