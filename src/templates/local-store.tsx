import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import CenteredContainer from "../components/CenteredContainer";
import PageLayout from "../components/PageLayout";
import VerticalStack from "../components/VerticalStack";
import "../index.css";
import HorizontalStack from "../components/HorizontalStack";
import ContactInfo from "../components/ContactInfo";
import { LocationMap } from "@yext/pages/components";
import { GoogleMaps } from "@yext/components-tsx-maps";
import CategoryCarousel from "../components/CategoryCarousel";
import PromotionsCarousel from "../components/PromotionsCarosuel";

export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    localization: { locales: ["en"], primary: false },
    filter: { entityTypes: ["location"] },
    fields: [
      "name",
      "description",
      "slug",
      "photoGallery",
      "address",
      "mainPhone",
      "geocodedCoordinate",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
};

export default function LocalStore({ __meta, document }: TemplateProps) {
  const mappinSVG = (
    <svg
      width="56"
      height="58"
      viewBox="0 0 56 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
        fill="#0F70F0"
        stroke="black"
        strokeOpacity="0.5"
      />
      <path
        d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
        fill="white"
      />
    </svg>
  );

  return (
    <PageLayout templateData={{ __meta, document }} backgroundColor="#FFFFFF">
      <CenteredContainer>
        <HorizontalStack
          spacing="1"
          topMargin="2"
          bottomMargin="0"
          leftMargin="0"
          rightMargin="0"
          alignment="center"
          verticalOnMobile="false"
          backgroundColor="#fffff"
          backgroundImage={document.photoGallery[0].image.url}
        >
          <ContactInfo
            name={document.name}
            addressLine1={document.address.line1}
            addressLine2={`${document.address.city}, ${document.address.region} ${document.address.postalCode}`}
            phone={document.mainPhone}
            textColor="#00000"
          ></ContactInfo>
        </HorizontalStack>
        <VerticalStack
          alignment="left"
          rightMargin="0"
          leftMargin="0"
          bottomMargin="0"
          topMargin="6"
          spacing="0"
          backgroundColor="#FFFF"
        >
          <CategoryCarousel />
        </VerticalStack>
        <VerticalStack
          alignment="left"
          rightMargin="0"
          leftMargin="0"
          bottomMargin="6"
          topMargin="6"
          spacing="0"
          backgroundColor="#F9FAFB"
        >
          <PromotionsCarousel />
        </VerticalStack>
        <LocationMap
          className="h-[300px]"
          clientKey="gme-yextinc"
          coordinate={document.geocodedCoordinate}
          provider={GoogleMaps}
        >
          {
            <svg
              width="56"
              height="58"
              viewBox="0 0 56 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0951 1C33.1149 1 37.6595 3.03469 40.9491 6.32432C44.2388 9.61396 46.2734 14.1586 46.2734 19.1784C46.2734 25.9554 40.1704 38.558 28.0941 57C16.019 38.5565 9.91669 25.955 9.91669 19.1784C9.91669 14.1586 11.9514 9.61396 15.241 6.32432C18.5307 3.03469 23.0752 1 28.0951 1Z"
                fill="#0F70F0"
                stroke="black"
                strokeOpacity="0.5"
              />
              <path
                d="M28.095 27.2577C32.5571 27.2577 36.1743 23.6405 36.1743 19.1784C36.1743 14.7163 32.5571 11.0991 28.095 11.0991C23.633 11.0991 20.0157 14.7163 20.0157 19.1784C20.0157 23.6405 23.633 27.2577 28.095 27.2577Z"
                fill="white"
              />
            </svg>
          }
        </LocationMap>
      </CenteredContainer>
    </PageLayout>
  );
}
