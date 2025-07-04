import GuestSearchBar from "../../ui/GuestSearchBar"
import SortBy from "../../ui/SortBy"
import TableOperations from "../../ui/TableOperations"

const GuestTableOperations = () => {
  return (
    <TableOperations>
      <GuestSearchBar />
      <SortBy
        options={[
          { value: 'created_at-desc', label: 'Sort by registered(recent first)' },
          { value: 'created_at-asc', label: 'Sort by registered(earlier first)' },
          { value: 'fullName-asc', label: 'Sort by name(A-Z)' },
          { value: 'fullName-desc', label: 'Sort by name(Z-A)' },
        ]}
      />

    </TableOperations>
  )
}

export default GuestTableOperations
