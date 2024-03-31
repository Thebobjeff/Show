import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useSearch } from "../hooks/useSearch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const content = useSearch(apiPath, queryTerm);

  return (
    <section className="max-w-7xl mx-auto py-7">
      <main className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {content.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </main>
      <div className="flex justify-center flex-wrap ">
        {content.map((info) => (
          <Card key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};
