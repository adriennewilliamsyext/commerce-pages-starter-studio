import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import GridContainer from "../components/GridContainer";
import "../index.css";

import Headline from "../components/Headline";
import HorizontalStack from "../components/HorizontalStack";
import Label from "../components/Label";

import CenteredContainer from "../components/CenteredContainer";
import PageLayout from "../components/PageLayout";
import Paragraph from "../components/Paragraph";
import ProductImage from "../components/ProductImage";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import BigButton from "../components/BigButton";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ReactDom from "react-dom";

export const config: TemplateConfig = {
  stream: {
    $id: "products",
    filter: { entityTypes: ["product"] },
    localization: { locales: ["en"], primary: false },
    fields: [
      "id",
      "name",
      "slug",
      "price",
      "primaryPhoto",
      "photoGallery",
      "commerce_productDescription",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function Product({ __meta, document }: TemplateProps) {
  return (
    <>
      <>
        <PageLayout
          templateData={{ __meta, document }}
          backgroundColor="#FFFFFF"
        >
          <CenteredContainer>
            <GridContainer>
              <VerticalStack
                alignment="left"
                rightMargin="0"
                leftMargin="0"
                bottomMargin="0"
                topMargin="6"
                spacing="0"
                backgroundColor="#FFFF"
              >
                <Headline
                  value={`${document.name}`}
                  fontWeight="bold"
                  textSize="4xl"
                />
                <HorizontalStack
                  spacing="0"
                  leftMargin="0"
                  rightMargin="0"
                  topMargin="0"
                  bottomMargin="0"
                  alignment="center"
                  verticalOnMobile="true"
                >
                  <Label value={`$${document.price.value}`} />
                </HorizontalStack>
                <Paragraph
                  value={`${document.commerce_productDescription.markdown}`}
                  fontWeight="light"
                  textSize="base"
                />
              </VerticalStack>
              <ProductImage
                src={`${document.photoGallery[0].image.url}`}
                alt=""
              />
              <BigButton
                title="Add to Cart"
                href="#"
                style="bg-purple-600 hover:bg-purple-300"
              />
            </GridContainer>
          </CenteredContainer>
        </PageLayout>
      </>
    </>
  );
}
