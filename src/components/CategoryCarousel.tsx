import * as React from "react";
import Item from "./RowItem";
import ThreeColGrid from "./ThreeColGrid";
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
      <ThreeColGrid title="Shop Categories">
        {categoryData &&
          categoryData.map((category, index) => {
            return (
              <Item
                key={index}
                name={category.name}
                image={category.primaryPhoto.image.url}
              />
            );
          })}
      </ThreeColGrid>
    </div>
  );
};

export default CategoryCarousel;
