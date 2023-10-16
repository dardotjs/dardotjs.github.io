import  { ReactNode } from 'react';

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className=" flex flex-wrap">
    {props.children}
  </div>
);

export { FooterIconList };
