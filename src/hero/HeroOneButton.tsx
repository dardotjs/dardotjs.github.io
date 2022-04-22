import { ReactNode } from "react";

type IHeroOneButtonProps = {
  title: ReactNode;
  description?: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl mb-4 text-gray-100 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    {props.description && (
      <div className="text-2xl mb-16">{props.description || ""}</div>
    )}

    {props.button}
  </header>
);

export { HeroOneButton };
