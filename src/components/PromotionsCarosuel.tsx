import * as React from "react";
import { VERSION, STREAMS_API_KEY } from "../common/consts";
import Item from "./ColItem";
import OneItems from "./OneItemGrid";
import ThreeItems from "./ThreeItemsGrid";

const PromotionsCarousel = () => {
  const [promotionsData, setpromotionsData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const params = new URLSearchParams({
        v: VERSION,
        api_key: STREAMS_API_KEY,
      });
      const promotions = await fetch(
        `https://cdn.yextapis.com/v2/accounts/me/content/promotions?${params.toString()}`
      )
        .then((resp) => resp.json())
        .then((resp) => (resp.response.docs ? resp.response.docs : null));
      setpromotionsData(promotions);
    }
    getData();
  }, []);

  return (
    <div>
      <OneItems title="Promotions">
        {promotionsData &&
          promotionsData.map((promotions) => {
            return (
              <Item
                name={promotions.name}
                image={promotions.primaryPhoto.image.url}
                description={promotions.shortDescription}
              />
            );
          })}
      </OneItems>
    </div>
  );
};

export default PromotionsCarousel;
