import { Card } from "./Card";
import { UsePlaying } from "../hooks/UsePlaying";

export const Page = ({ apiPath }) => {
  const content = UsePlaying(apiPath);

  return (
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-center flex-wrap other:justify-evenly">
        {content.map((info) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};
