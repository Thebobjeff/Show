import { Page } from "../components/Page";
export const Movies = ({ apiPath }) => {
  console.log("Loaded");
  return (
    <main>
      <Page apiPath={apiPath} />
    </main>
  );
};
