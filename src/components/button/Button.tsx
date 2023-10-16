// import classNames from 'classnames';
type IButtonProps = {
  xl?: boolean;
  md?: boolean;
  block?: boolean;
  children: string;
  primary?: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Button = (props: IButtonProps) => {
  const btnClass = classNames(
    "inline-block rounded-md text-center",
    props.xl ? "font-extrabold text-xl py-4 px-6" : "",
    props.md ? "w-48" : "",
    props.block ? "w-full" : "",
    !props.xl
      ? "text-lg font-semibold py-2 px-4"
      : "font-extrabold text-xl py-4 px-6",
    props.primary
      ? "btn-primary text-white bg-primary-500 hover:bg-primary-600"
      : ""
  );

  return (
    <button type={"button"} className={btnClass}>
      {props.children}
    </button>
  );
};

export { Button };
