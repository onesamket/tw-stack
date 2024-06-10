import AnimatedText from "@/components/shared/animated-text";
import Community from "@/components/shared/community";
import Contributor from "@/components/shared/contributors";
import { CopyLinkButton } from "@/components/shared/copy-link";
import Templates from "@/components/shared/templates";
import { CONTRIBUTORS } from "@/constants/contributors";
export default function HomePAge() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-5 p-5">
      <h1 className="gradient-text text-7xl">tw-stack </h1>
      <AnimatedText />
      <CopyLinkButton />
      <section id="templates " className="py-24 my-3">
        <Templates />
      </section>

      <section id="community " className="py-10 grid gap-6 my-3">
        <Community />
      </section>
      <main className="py-10 flex flex-col items-center justify-center gap-5 ">
        <section className="flex flex-col items-center justify-center gap-2">
          <h3 className="gradient-text text-3xl ">Contributors</h3>
          <p className="text-center text-gray-600">Meet the amazing people who make our project possible.</p>
        </section>
        <section className="grid gap-6 md:grid-cols-3 my-6 lg:grid-cols-4">
          {CONTRIBUTORS.map((contributor, index) => (
            <Contributor
              key={index}
              name={contributor.name}
              githubLink={contributor.githubLink}
              imageSrc={contributor.imageSrc}
              twitterLink={contributor.twitterLink}
              twitterHandle={contributor.twitterHandle}
              devType={contributor.devType}
            />
          ))}
        </section>
      </main>
    </main>
  );
}
