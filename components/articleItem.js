import React from "react";

function ArticleItem({ hit, components }) {
  return (
    <a className="aa-ItemLink" href={`/article/${hit.slug}`}>
      <div className="aa-ItemContent">
        <div className="ItemCategory">{hit.category.name}</div>
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;