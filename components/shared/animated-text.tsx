"use client";
import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
    return (
        <main>
            <TypeAnimation
                sequence={[
                    'Scaffold pre-configured projects with the tw-stack templates',
                    1000,

                ]}
                wrapper="span"
                speed={50}
                className="inline-block mb-5 text-2xl  italic font-black !bg-clip-text text-transparent !bg-cover !bg-center"
                style={{ background: "linear-gradient(to top left,#16BFFD,#CB3066)" }}
            />
        </main>
    );
}