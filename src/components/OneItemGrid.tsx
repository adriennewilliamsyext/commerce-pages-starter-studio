import { HexColor } from "@yext/studio";

export interface ItemsGridProps {
  children?: React.ReactNode;
  title?: string;
  columns?: string;
  backgroundColor?: HexColor;
}

export const initialProps: ItemsGridProps = {
  title: "Title Goes Here",
};

const OneItems = ({ title, children, columns }: ItemsGridProps) => {
  return (
    <div className="p-4">
      <h2 className="text-lg text-center font-medium text-gray-900">{title}</h2>
      <ul role="list" className={`grid grid-cols-1 gap-x-8`}>
        {children}
      </ul>
    </div>
  );
};

export default OneItems;
