import React from "react";

type Props = {
  title: string;
  subtitle?: string;
  remark: string;
  html?: string;
  tags?: string[];
  url?: string;
  variant?: keyof typeof colors;
};

const colors = {
  primary: {
    background: "bg-pink",
    title: "text-yellow",
  },
  secondary: {
    background: "bg-yellow",
    title: "text-pink",
  },
  ternary: {
    background: "bg-blue",
    title: "text-yellow",
  },
};
const Card = ({
  title,
  subtitle,
  remark,
  html,
  tags = [],
  url,
  variant = "primary",
}: Props) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 p-6 rounded-sm text-dark ${colors[variant].background}`}
    >
      <h3 className={`text-xl font-bold ${colors[variant].title}`}>
        {title} {url && <span>&rarr;</span>}
      </h3>
      <div className="flex flex-wrap items-center gap-2">
        {subtitle && <h4 className="text-lg">{subtitle}</h4>}
        <h5 className="text-sm font-light">{remark}</h5>
      </div>
      {html && (
        <div
          className="cl-post-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-4 py-1 text-sm rounded-md bg-green">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
