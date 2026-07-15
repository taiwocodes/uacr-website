import { RouteObject } from "react-router-dom";
import { Layout } from "@/pages/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { MrBiggs } from "@/pages/BrandPages/MrBiggs";
import { Debonairs } from "@/pages/BrandPages/Debonairs";
import { About } from "@/pages/AboutPages";
import { News } from "@/pages/News";
import { Catering } from "@/pages/Catering";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";
import { TeamPage } from "@/pages/AboutPages/TeamPage";
import { Impact } from "@/pages/AboutPages/Impact";
import { FAQ } from "@/pages/AboutPages/FAQ";

import OpenRoles from "@/pages/CareerPages/OpenRoles";
import Career from "@/pages/CareerPages/Career";
import { IceCream } from "@/pages/BrandPages/IceCream";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <LandingPage /> },
            {
                path: 'brands', children: [
                    { path: "mrbiggs", element: <MrBiggs /> },
                    { path: "debonairs", element: <Debonairs /> },
                    { path: "creamy-cove", element: <IceCream /> },
                ]
            },
            {
                path: "about", children: [
                    { index: true, element: <About /> },
                    { path: "team", element: <TeamPage /> },
                    { path: "impact", element: <Impact /> },
                    { path: "faq", element: <FAQ /> },
                ]
            },
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
            { path: "privacy-policy", element: <PrivacyPolicy /> },
            { path: "*", element: <NotFound /> },

        ]
    }
];

export default routes;