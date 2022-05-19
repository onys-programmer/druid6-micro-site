import { useState, useEffect } from 'react';
import SideBar from "../components/SideBar";
import Markdown  from 'markdown-to-jsx';

import './DocsPage.scss';

export default function DocsPage() {
  const fileName = 'DOCS.md';
  const [post, setPost] = useState('');

  useEffect(() => {
    import(`../static/${fileName}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
      })
      .catch(err => console.log(err));
  });

  return (
    <div className="DocsPage">
      <SideBar />
      <div className="container">
        <Markdown
          children={post} 
          options={{ forceBlock: true }}
        />
      </div>
    </div>
  );
}
