import React from "react";

function ArticleItem({ hit, components }) {
  return (
    <a className="aa-ItemLink" href={`/article/${hit.slug}`}>
      <div className="aa-ItemContent">
        <div className="ItemCategory">{hit.category.name}</div>
        <div classname="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Highlight hit={hit} attribute="title" />
          </div>
          <div className="aa-ItemContentDescription">
            <components.Highlight hit={hit} attribute="description" />
          </div>
        
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;