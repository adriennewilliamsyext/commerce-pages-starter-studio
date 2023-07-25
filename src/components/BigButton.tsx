import { twMerge } from "tailwind-merge";

export interface BigButtonProps {
  title?: string;
  href?: string;
  style?: string;
}

export const initialProps: BigButtonProps = {
  title: "Button Title",
  href: "#",
  style: "",
};

const BigButton = ({ href, title, style }: BigButtonProps) => {
  return (
    <div className="mt-10">
      <a
        href={href}
        className={twMerge(
          "flex w-full items-center justify-center rounded-md border border-transparent py-3 px-8 text-base font-medium text-white",
          style
        )}
      >
        {title}
      </a>
    </div>
  );
};

export default BigButton;
