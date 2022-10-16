// import React from 'react';
import Container from './Container';
import LayoutProvider from './Layout';

export default function Home() {
  return (
    <div>
      <LayoutProvider />
      <h1>Hello</h1>
      <Container />
    </div>
  );
}
