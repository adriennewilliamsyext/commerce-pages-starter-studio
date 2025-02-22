import { twMerge } from "tailwind-merge";

export interface CtaProps {
  buttonText?: string;
  url?: string;
  style?: string;
}

const Cta = (props: CtaProps) => {
  const { buttonText, url, style } = props;

  return (
    <a
      href={url}
      className={twMerge("text-base font-bold text-white rounded-lg", style)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
