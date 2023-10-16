import { Config } from "../utils/Config";

const FooterCopyright = () => (
  <div className="">
    &copy; Copyright {new Date().getFullYear()} {Config.title}.
  </div>
);

export { FooterCopyright };
