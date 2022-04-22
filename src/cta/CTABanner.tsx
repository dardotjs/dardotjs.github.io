import { ReactNode } from "react";

type ICTABannerProps = {
  title: string|ReactNode;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col p-4 text-center sm:text-left sm:flex-row sm:items-center  sm:p-12 bg-primary-100 rounded-md">
    <div className="grow text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      {/* <div className="text-primary-500">{props.subtitle}</div> */}
    </div>

    <div className="grow-0 whitespace-no-wrap mt-3 sm:mt-0 sm:ml-2">
      {props.button}
    </div>
  </div>
);

export { CTABanner };
