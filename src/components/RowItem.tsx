import { Markdown } from "@yext/react-components";

export interface ItemProps {
  name?: string;
  image?: string;
  description?: string;
}

export const initialProps: ItemProps = {
  name: "Product Name",
  image:
    "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  description: "test",
};

const Item = ({ name, image, description }: ItemProps) => {
  return (
    <li className="relative flex flex-row p-2">
      <div className="flex-1">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-48 mx-auto text-gray-300 rounded-md"
        />
        <h3 className="mt-4 text-sm font-medium text-gray-900">
          <a href="#">
            <span className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500 whitespace-pre-line">
          <Markdown content={`${description}`} />
        </p>
      </div>
    </li>
  );
};

export default Item;
