import Link from 'next/link';
import styled from 'styled-components';

const H1 = styled.h1`
  color: red;
`;

export default function Hello() {
  return (
    <>
      <H1>hello</H1>
      <Link href="/">home</Link>
    </>
  );
}
