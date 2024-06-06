import {
    Card,
    CardContent,
    CardDescription,
    CardHeader
} from "@/components/ui/card";
import { Github } from "lucide-react";
import Link from "next/link";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Community() {
    return (
        <main className="flex flex-col gap-3 items-center justify-center">
            <section className="py-6">
                <h3 className="gradient-text text-3xl">Join Our Community</h3>
            </section>
            <section className="grid gap-3 md:grid-cols-4">
                <Card className="text-center dark:border-gray-700">
                    <CardHeader className=" flex flex-col items-center gap-3 justify-center">
                        <Github className="items-center" size={32} />
                        <CardDescription>Contribute to our projects and stay updated with our repositories.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="https://github.com/onesamket/tw-stack" className="text-blue-500">Join GitHub</Link>
                    </CardContent>
                </Card>

                <Card className="text-center dark:border-gray-700">
                    <CardHeader className=" flex flex-col items-center  gap-3 justify-center">
                        <FaDiscord size={32} />
                        <CardDescription>Chat with our community and join live discussions.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Link href="https://discord.gg/dH3xNyrS" className="text-blue-500">Join Discord</Link>
                    </CardContent>
                </Card>

                <Card className="text-center dark:border-gray-700">
                    <CardHeader className=" flex flex-col items-center  gap-3 justify-center">
                        <FaTelegram size={32} />
                        <CardDescription>Join our Telegram group for quick updates and chats.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Link href="https://t.me/tw_stack" className="text-blue-500">Join Telegram</Link>
                    </CardContent>
                </Card>

                <Card className="text-center dark:border-gray-700">
                    <CardHeader className=" flex flex-col items-center gap-3 justify-center">
                        <FaXTwitter size={32} />
                        <CardDescription>Follow us on Twitter for the latest news and updates.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <Link href="https://x.com/onesamket" className="text-blue-500">Follow on Twitter</Link>
                    </CardContent>
                </Card>
            </section>
        </main>
    );
}
