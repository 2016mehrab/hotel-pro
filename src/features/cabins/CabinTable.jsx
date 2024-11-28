/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import useCabins from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty.jsx";


const CabinTable = () => {
  const { data: cabins, error, isLoading } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  if(cabins.length===0){
    return (
      <Empty resource="cabins" />
    )
  }

  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  else if (filterValue === "no-discount") {
    filteredCabins = cabins.filter((c) => c.discount === 0);
  } else {
    filteredCabins = cabins.filter((c) => c.discount !== 0);
  }

  const sortBy = searchParams.get("sortBy") || "created_at-desc";
  const [field, order] = sortBy.split("-");
  const sortedCabins = filteredCabins.sort((f, l) => {
    const a = f[field];
    const b = l[field];

    if (a === undefined || b === undefined) {
      console.error(`Sorting field '${field}' is missing in some items.`);
      return 0; // Don't reorder if the field is missing
    }

    if (order === "asc") {
      return a > b ? 1 : a < b ? -1 : 0;
    } else {
      return a > b ? -1 : a < b ? 1 : 0;
    }
  });

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={sortedCabins}
          render={(cabin) => {
            return <CabinRow cabin={cabin} key={cabin.id} />;
          }}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
