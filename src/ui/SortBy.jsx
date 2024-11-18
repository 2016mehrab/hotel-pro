/* eslint-disable react/prop-types */
import Select from "./Select"
import { useSearchParams } from 'react-router-dom';

const SortBy = ({options}) => {
    const [searchParams,setSearchPrams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
    function handleChange(e){
        searchParams.set('sortBy', e.target.value);
        setSearchPrams(searchParams);
    }
  return (
    <Select onChange={handleChange} options={options} type="white" value={sortBy}  />
  )
}

export default SortBy