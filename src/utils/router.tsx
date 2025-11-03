import { RouteObject } from "react-router-dom";
import { Layout } from "@/pages/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { MrBiggs } from "@/pages/MrBiggs";
import { Debonairs } from "@/pages/Debonairs";
import { About } from "@/pages/About";
import { News } from "@/pages/News";
import { Careers } from "@/pages/Careers";
import { Catering } from "@/pages/Catering";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { TeamPage } from "@/pages/TeamPage";
import { Impact } from "@/pages/Impact";
import { FAQ } from "@/pages/FAQ";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: "mrbiggs", element: <MrBiggs /> },
            { path: "debonairs", element: <Debonairs /> },
            { path: "about", element: <About /> },
            { path: 'team', element: <TeamPage /> },
            { path: "impact", element: <Impact /> },
            { path: 'faq', element: <FAQ /> },
            { path: "news", element: <News /> },
            { path: "careers", element: <Careers /> },
            { path: "catering", element: <Catering /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },

        ]
    }
];

export default routes;