import * as React from "react";
import { VERSION, STREAMS_API_KEY } from "../common/consts";
import Item from "./ColItem";
import OneColGrid from "./OneColGrid";

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
      <OneColGrid title="Promotions">
        {promotionsData &&
          promotionsData.map((promotions, index) => {
            return (
              <Item
                key={index}
                name={promotions.name}
                image={promotions.primaryPhoto.image.url}
              />
            );
          })}
      </OneColGrid>
    </div>
  );
};

export default PromotionsCarousel;
