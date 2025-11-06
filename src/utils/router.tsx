import { RouteObject } from "react-router-dom";
import { Layout } from "@/pages/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { MrBiggs } from "@/pages/MrBiggs";
import { Debonairs } from "@/pages/Debonairs";
import { About } from "@/pages/About";
import { News } from "@/pages/News";
import { Catering } from "@/pages/Catering";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { TeamPage } from "@/pages/TeamPage";
import { Impact } from "@/pages/Impact";
import { FAQ } from "@/pages/FAQ";

import OpenRoles from "@/pages/OpenRoles";
import Career from "@/pages/Career";

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
            {
                path: "blogs", children: [
                    { index: true, element: <News /> },
                    { path: ":id", element: <News /> },
                ]
            },
            {
                path: "careers", children: [
                    { index: true },
                    { path: "careers-at-uacr", element: <Career /> },
                    { path: "open-roles", element: <OpenRoles /> }]
            },
            { path: "catering", element: <Catering /> },
            { path: "contact", element: <Contact /> },
            { path: "*", element: <NotFound /> },

        ]
    }
];

export default routes;