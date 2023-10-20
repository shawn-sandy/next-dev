import type { Preview } from "@storybook/react";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";
import CustomDocs from "./templates/custom-docs";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      sort: {
        method: "alphabetical",
      },
    },
    docs: {
      page: CustomDocs,
      toc: true, // 👈 Enables the table of contents
    },
  },
};

export default preview;
