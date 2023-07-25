import { HexColor } from "@yext/studio";

export interface SiteSettings {
  experienceKey: string;
  GlobalColors: {
    primary: HexColor;
  };
}

export default {
  experienceKey: "commerce-search-starter",
  GlobalColors: {
    primary: "#9333ea",
  },
};
