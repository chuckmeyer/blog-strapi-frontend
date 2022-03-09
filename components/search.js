import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

const Search = () => {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="development_api::article.article"
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
    </>
  );
}
    
export default Search;