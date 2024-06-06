"use client";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Templates() {
    return (
        <main className="flex flex-col gap-3 items-center justify-center">
            <section className="py-6">
                <h3 className="gradient-text text-3xl">Choose Templates</h3>
            </section>
            <section className="grid gap-3 md:grid-cols-4">
                {[
                    {
                        title: "NextJS",
                        description: "Scaffold a pre-configured NextJS application.",
                        features: ["Server-side rendering", "Static site generation", "API Routes"],
                        icons: "nextjs,typescript,prisma,tailwindcss,vercel,supabase",
                    },
                    {
                        title: "Remix",
                        description: "Scaffold a pre-configured Remix application.",
                        features: ["Nested routes", "Loader functions", "Data-driven components"],
                        icons: "remix,supabase,netlify,typescript,prisma,tailwindcss",
                    },
                    {
                        title: "MERN",
                        description: "Scaffold a pre-configured MERN stack application.",
                        features: ["MongoDB integration", "Express.js server", "React frontend", "Node.js backend"],
                        icons: "mongodb,express,react,bun,prisma,nodejs",
                    },
                    {
                        title: "SPA React",
                        description: "Scaffold a pre-configured single-page React application.",
                        features: ["Client-side routing", "Component-based architecture", "State management with Redux"],
                        icons: "react,vite,vitest,typescript,tailwindcss",
                    },
                    {
                        title: "Expo",
                        description: "Scaffold a pre-configured Expo application.",
                        features: ["React Native framework", "Easy deployment", "Cross-platform development"],
                        icons: "expo,react,typescript,tailwindcss",
                    },
                    {
                        title: "React-Hono.js Full-stack",
                        description: "Scaffold a pre-configured React-Hono.js full-stack application.",
                        features: ["React frontend", "Hono.js backend", "RESTful APIs"],
                        icons: "react,typescript,prisma,bun,postgres",
                    },
                    {
                        title: "React-Hapi.js Full-stack",
                        description: "Scaffold a pre-configured React-Hapi.js full-stack application.",
                        features: ["React frontend", "Hapi.js backend", "GraphQL integration"],
                        icons: "react,mysql,prisma,graphql,bun",
                    },
                    {
                        title: "Chat Application",
                        description: "Scaffold a pre-configured socket.io application.",
                        features: ["React frontend", "express.js backend", "Socket.io"],
                        icons: "react,mysql,prisma,fastapi,bun",
                    },
                ].map((template, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Card className="cursor-pointer  dark:border-gray-800">
                            <CardHeader>
                                <CardTitle>{template.title}</CardTitle>
                                <CardDescription>{template.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    {template.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center space-x-2">
                                    <a href="#">
                                        <img src={`https://skillicons.dev/icons?i=${template.icons}`} />
                                    </a>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </section>
        </main>
    );
}
