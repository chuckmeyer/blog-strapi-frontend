import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import { getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch';
import { Autocomplete } from './autocomplete';
import ArticleItem from './articleItem';
import "@algolia/autocomplete-theme-classic";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
);

const Nav = ({ categories }) => {
  const router = useRouter()
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-center">
          <Autocomplete 
            openOnFocus={false}
            placeholder="Search for articles"
            getItemUrl={({ item }) => { router.push(`/article/${item.slug}`)}}
            getSources={({ query }) => [
              {
                sourceId: "articles",
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: "production_api::article.article",
                        query,
                      }
                    ]
                  })
                },
                templates: {
                  item({ item, components}) {
                    return <ArticleItem hit={item} components={components} />;
                  }
                }
              },
            ]}
          />
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
