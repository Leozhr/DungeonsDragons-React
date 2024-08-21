import { Banner } from "../../components/banner";
import { useQuery } from "@tanstack/react-query";
import { Table } from "../../components/table";
import { getMagics } from "../../services/magic-services";

function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['magics'],
    queryFn: getMagics,
  });

  return (
    <main>
      <Banner title="Magic Items" />
      <Table
        items={data || []}
        loading={isLoading}
        itemsPerPage={20}
      />
    </main>
  );
}

export default Home;