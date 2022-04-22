

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title={<>DarJS is dedicated to providing the Javascript community a place to learn, socialize, and talk.</>}
      subtitle={"We are a group of developers who are passionate about JavaScript and the tech industry."}
      button={(
        <Link href="/meetup">
          <a>
            <Button primary md>Join Next Meetup</Button>
          </a>
        </Link>
      )}
    />
  </Section>
);

export { Banner };
