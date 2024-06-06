import { BookOpenText, Copyright, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="z-10 p-10 w-full flex-col-reverse md:flex-row flex  items-center justify-between font-mono text-sm">
            <div className="flex gap-2 items-center">
                <Copyright className="w-3 h-4" />
                <p> tw-stack {new Date().getFullYear()}</p>
            </div>
            <div className="flex items-center space-x-2">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                <p> Deployed on Vercel</p>
            </div>
            <div className="flex items-center space-x-2">
                <Link className="flex items-center space-x-1" href='/docs'>
                    <BookOpenText className="w-4 h-4" />
                    <p>Docs</p>
                </Link>
                <Link className="flex items-center space-x-1" href='https://github.com/onesamket/tw-stack'>
                    <Github className="w-4 h4" />
                    <p> Github</p>
                </Link>
            </div>
        </div >
    );
}
