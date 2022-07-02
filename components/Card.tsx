import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  remark: string;
  description?: string;
  html?: string;
  tags?: string[];
  url?: string;
};

const Card = ({
  title,
  subtitle,
  remark,
  description,
  html,
  tags = [],
  url,
}: Props) => {
  return (
    <div className="flex flex-col w-full gap-2 p-6 m-2 bg-white rounded-xl">
      <h3 className="text-xl">
        {title} {url && <span>&rarr;</span>}
      </h3>
      <h4>{subtitle}</h4>
      <h5>{remark}</h5>
      <p>{description}</p>
      {html && (
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1 text-sm text-white bg-green-500 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
