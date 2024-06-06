"use client";
import { useTheme } from "next-themes";
import { Github, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <div>tw-stack</div>
            <div className="flex gap-5">
                <Link href="https://github.com/onesmaket/tw-stack"><Github className="w-4 h-4" /></Link>
                {theme === "dark" ? (
                    <Sun className="w-4 h-4 cursor-pointer" onClick={() => setTheme("light")} />
                ) : (
                    <Moon className="w-4 h-4 cursor-pointer" onClick={() => setTheme("dark")} />
                )}
            </div>
        </div>
    );
}
