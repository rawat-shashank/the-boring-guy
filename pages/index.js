import { MDXCompProvider } from "../src/components";
import { Container } from "../src/components/Container";

export default function Home() {
  return (
    <MDXCompProvider>
      <Container>This is home</Container>
    </MDXCompProvider>
  );
}
