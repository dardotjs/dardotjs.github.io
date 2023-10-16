import { Button } from "@/components/button/Button";
import { Meta } from "@/components/layout/Meta";
import { Footer } from "@/components/templates/Footer";
import { HeroMin } from "@/components/templates/HeroMin";
import { Config } from "@/components/utils/Config";

const About = () => (
  <div className="antialiased">    
    <HeroMin />

    <main className="mb-12 max-w-5xl mx-auto py-12">
      <h1 className="text-4xl text-gray-800">About us</h1>
      <h2 className="my-3 text-2xl text-gray-800">History</h2>
      <p>
        Our first meetup was in January 2018 and it has been held monthly ever
        since. We have had a variety of speakers from different backgrounds and
        companies. We have also had a variety of topics ranging from Webpack to
        React Hooks to GraphQL. We have had a lot of fun and we hope to continue.

      </p>
    </main>
    <span className="h-32"></span>
    <Footer />
  </div>
);

export default About;
