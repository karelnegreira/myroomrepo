import Image from "next/image";
import ClientOnly from "./component/ClientOnly";
import Container from "./component/Container";
import EmptyState from "./component/EmptyState";

export default function Home() {
  const isEmpty = true;

  if (isEmpty) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
   <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            <div>My future listing</div>
        </div>
      </Container>
   </ClientOnly>
  );
}
