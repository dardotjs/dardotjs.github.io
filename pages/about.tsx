import { Button } from "../src/button/Button";
import { Meta } from "../src/layout/Meta";
import { Footer } from "../src/templates/Footer";
import { HeroMin } from "../src/templates/HeroMin";
import { Config } from "../src/utils/Config";

const About = () => (
  <div className="antialiased">
    <Meta title={Config.title} description={Config.description} />
    <HeroMin />

    <main className="mb-12 max-w-5xl mx-auto py-12">
      <h1 className="text-4xl text-gray-800">About us</h1>
      <h2 className="my-3 text-2xl text-gray-800">History</h2>
      <p>
        Our first meetup was in January 2018 and it has been held monthly ever
        since. Untill end of 2019 meeting halted.
      </p>
    </main>
    <span className="h-32"></span>
    <Footer />
  </div>
);

export default About;
