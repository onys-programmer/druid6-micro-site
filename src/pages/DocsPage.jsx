import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import MarkdownRenderer from "../components/MarkdownRenderer.tsx";
// import Markdown from "markdown-to-jsx";

import { useLocation } from "react-router-dom";

import "./DocsPage.scss";

export default function DocsPage() {
  // const fileName = "DOCS.md";
  const [post, setPost] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/docs/purpose") {
      import(`../static/purpose.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost(res));
        })
        .catch((err) => console.log(err));
    } else if (location.pathname === "/docs/more") {
      import(`../static/more.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost(res));
        })
        .catch((err) => console.log(err));
    } else {
      import(`../static/contribute.md`)
        .then((res) => {
          fetch(res.default)
            .then((res) => res.text())
            .then((res) => setPost(res));
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <div className="DocsPage">
      <SideBar />
      <div className="container">
        {/* <Markdown children={post} options={{ forceBlock: true }} /> */}
        <MarkdownRenderer text={post} />
      </div>
    </div>
  );
}
