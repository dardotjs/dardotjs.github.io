import { Footer } from "@/components/templates/Footer";
import { HeroMin } from "@/components/templates/HeroMin";
import MeetupsList from "./MeetupsList";

export default function MeetUpsPage() {
  return (
    <div className="antialiased">
      <HeroMin />
      <MeetupsList />
      <span className="h-32"></span>
      <Footer />
    </div>
  );
}
