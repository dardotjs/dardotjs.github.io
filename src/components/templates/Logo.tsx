

// import Image from 'next/image';

import { Config } from '../utils/Config';

type ILogoProps = {
  xl?: boolean;
  color?: string;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span className={` inline-flex items-center ${fontStyle} ${props.color}`}>
      {/* <Image layout={'responsive'} src="/images/logo.jpeg" width={100} height={100} alt="darjs Logo" /> */}
      {Config.site_name}
    </span>
  );
};

export { Logo };
