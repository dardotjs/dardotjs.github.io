import Link from "next/link";

import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const HeroMin = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6 mb-12">
      <NavbarTwoColumns logo={<Logo xl color="text-gray-800" />}>
        <li>
          <Link href="/meetups">
            <>Meetups</>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <>About</>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/darjs">
            <>GitHub</>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </Background>
);

export { HeroMin };
