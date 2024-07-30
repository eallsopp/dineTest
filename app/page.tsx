import Carousel from "@/components/carousel";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

const DATA = require("../public/image.json");

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <div>
            <h1 className={title()}>
              The answer to the{" "}
              <text className="text-violet-400">nagging </text>
              question:
            </h1>
            <br />
          </div>
          <h1 className={title()}>{"What's for dinner?"}</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Weekly freshly made meals for you and your loved ones (or just
            you!).
          </h2>
          <Carousel data={DATA} />
          <h3>All meals are 4 Servings for only $50</h3>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.signup}
          >
            Sign Up
          </Link>
          <Link
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.login}
          >
            Sign In
          </Link>
        </div>
        <div className="mt-8">
          {/* <Snippet hideCopyButton hideSymbol variant="bordered">
      //     <span>
      //     Get started by editing <Code color="primary">app/page.tsx</Code>
      //     </span>
      //     </Snippet> */}
        </div>
      </section>
    </>
  );
}
