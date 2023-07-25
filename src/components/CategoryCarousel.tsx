import * as React from "react";
import Item from "./RowItem";
import ThreeItems from "./ThreeItemsGrid";
import { VERSION, STREAMS_API_KEY } from "../common/consts";

const CategoryCarousel = () => {
  const [categoryData, setCategoryData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const params = new URLSearchParams({
        v: VERSION,
        api_key: STREAMS_API_KEY,
      });
      const category = await fetch(
        `https://cdn.yextapis.com/v2/accounts/me/content/categories?${params.toString()}`
      )
        .then((resp) => resp.json())
        .then((resp) => (resp.response.docs ? resp.response.docs : null));
      setCategoryData(category);
    }
    getData();
  }, []);

  return (
    <div>
      <ThreeItems title="Shop Categories">
        {categoryData &&
          categoryData.map((category) => {
            return (
              <Item
                name={category.name}
                image={category.primaryPhoto.image.url}
                description={category.shortDescription}
              />
            );
          })}
      </ThreeItems>
    </div>
  );
};

export default CategoryCarousel;
