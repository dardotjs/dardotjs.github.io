

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="meetups"
    title="Meetups"
    description="We are a group of developers who are passionate about JavaScript and the tech industry."
  >
    <VerticalFeatureRow
      title="Next Meetup"
      description="Create an experience that stays forever. We are always looking for new ideas and projects to share. Join us for our next meetup."
      image="/images/finish_line.svg"
      imageAlt="First feature alt text"
    />
    
  </Section>
);

export { VerticalFeatures };
