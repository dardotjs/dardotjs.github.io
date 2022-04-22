import { ReactNode } from "react";

import { FooterCopyright } from "./FooterCopyright";
import { FooterIconList } from "./FooterIconList";

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="text-center">
    {props.logo}
    <nav>
      <ul className="mt-5 flex flex-row gap-4 justify-center font-medium text-xl text-gray-900">
        {props.children}
      </ul>
    </nav>

    {/* <div className="mt-8 flex justify-center bg-gray-800">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div> */}

    <div className="mt-8 text-sm">
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
