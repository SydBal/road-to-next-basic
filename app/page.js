"use client";

import { useState } from 'react';

const Header = ({ title }) => <h1>{title}</h1>;
const Content = () => <p>This is the content of the page.</p>;

export default function Page() {
  const headerTitle = "Page Header";
  const [upvotes, setUpvotes] = useState(0);
  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };
  return (
    <div>
      <Header title={headerTitle} />
      <Content />
      <h2>Upvotes {upvotes}</h2>
      <button onClick={handleUpvote}>Upvote</button>
    </div>
  );
}