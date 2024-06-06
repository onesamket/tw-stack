import AnimatedText from "@/components/shared/animated-text";
import { CopyLinkButton } from "@/components/shared/copy-link";
import Templates from "@/components/shared/templates";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Twitter } from "lucide-react";
import Link from "next/link";
export default function HomePAge() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 p-5">
      <h1 className="gradient-text text-7xl">tw-stack </h1>
      <AnimatedText />
      <CopyLinkButton />
      <section id="templates " className="py-24 my-3">
        <Templates />
      </section>

      <section id="avatar " className="py-10 grid gap-6 my-3">
        <div className="flex  items-center space-x-2">
          <Avatar>
            <AvatarImage src="https://github.com/onesamket.png" alt="@onesamket" />
            <AvatarFallback>tw</AvatarFallback>
          </Avatar>
          <div className="flex flex-col  items-center">
            <p>Tewodros Birhanu</p>
            <Link className="flex items-center space-x-1 text-indigo-800" href='x.com/onesmaket'>
              <Twitter className="w-4 h-4 " />
              <p>onesamket</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
