"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Github, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
export default function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="z-10 p-10 w-full flex items-center justify-between font-mono text-sm">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-10 w-full">
                    <DropdownMenuItem>
                        <Link href='/'>Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/docs'>Docs</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex gap-5">
                <Link href="https://github.com/onesamket/tw-stack"><Github className="w-4 h-4" /></Link>
                {theme === "dark" ? (
                    <Sun className="w-4 h-4 cursor-pointer" onClick={() => setTheme("light")} />
                ) : (
                    <Moon className="w-4 h-4 cursor-pointer" onClick={() => setTheme("dark")} />
                )}
            </div>
        </div>
    );
}
