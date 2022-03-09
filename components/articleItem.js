import React from "react";

function ArticleItem({ hit, components }) {
  return (
    <a href={`/article/${hit.slug}`}>
      <div className="aa-ItemContent">
        <div className="aa-ItemTitle">
          <components.Highlight hit={hit} attribute="title" />
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;