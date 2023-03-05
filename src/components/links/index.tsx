import React from "react";

interface Props {
  dark?: boolean;
  footer?: boolean;
}

const Links = ({ dark, footer }: Props) => {
  return (
    <div className={`links ${footer ? "footer-links" : ""}`}>
      <div className="link" style={{ color: dark ? "#6851ff" : "#000" }}>
        <a
          href="https://www.notion.so/Memespark-9660300e59834b64b80b3dfa0508addb?pvs=4"
          target="_blank"
          rel="noreferrer"
        >
          MemeSpark Docs
        </a>
      </div>
    </div>
  );
};

export default Links;
