import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import "../index.css";
import * as React from "react";
import { VERSION, STREAMS_API_KEY } from "../common/consts";

import Headline from "../components/Headline";
import HorizontalStack from "../components/HorizontalStack";
import Item from "../components/ColItem";
import ItemsGrid from "../components/ThreeItemsGrid";

import CenteredContainer from "../components/CenteredContainer";
import PageLayout from "../components/PageLayout";
import "../index.css";

export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "category",
};

/**
 * Defines the path that the generated file will live at for production.
 */
export const getPath: GetPath<TemplateProps> = () => {
  return `categories`;
};

export default function Product({ __meta, document }: TemplateProps) {
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
    <>
      <>
        <PageLayout
          templateData={{ __meta, document }}
          backgroundColor="#FFFFFF"
        >
          <CenteredContainer>
            <Headline value="Categories" fontWeight="bold" textSize="4xl" />
            <HorizontalStack
              spacing="0"
              leftMargin="0"
              rightMargin="0"
              topMargin="0"
              bottomMargin="0"
              alignment="center"
              verticalOnMobile="true"
            >
              <ItemsGrid title="Shop by Category">
                {categoryData &&
                  categoryData.map((category) => {
                    return (
                      <Item
                        name={category.name}
                        image={category.primaryPhoto.image.url}
                        description={category.shortDescriptionV2.markdown}
                      />
                    );
                  })}
              </ItemsGrid>
            </HorizontalStack>
          </CenteredContainer>
        </PageLayout>
      </>
    </>
  );
}
