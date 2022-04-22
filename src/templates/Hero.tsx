import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-900">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/meetups">
            <a>Meetups</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>

        <li>
          <Link href="https://github.com/darjs">
            <a>GitHub</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="py-64">
      <HeroOneButton
        title={
          <>
            A support Group for JavaScript Developers based in Dar es Salaam,
            Tanzania.
          </>
        }
        // description="Inspiring Tech Needs for Business."
        button={
          <Link href="#solutions">
            <a>
              <Button xl primary>
                Learn More
              </Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
