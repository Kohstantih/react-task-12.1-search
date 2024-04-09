import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { changeSearchField } from "../../redux/actions/actionsCreator";
import { changeSearch } from "../../redux/reducers/searchSkilsSlice";

export default function Search() {
    const { list, isLoading, error, search } = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();

    return (
        <>
            <div><input type="search" value={search} onChange={(e) => {
                dispatch(changeSearch(e.target.value));
                dispatch(changeSearchField(e.target.value))
                }}></input></div>
            {!search && <p>Type something to search...</p>}
            {isLoading && <p>Loading...</p>}
            {error && <p>Произошла ошибка: {error}</p>}
            {list.length !== 0 &&
            list.map((item) => <p key={item.id}>{item.name}</p>)}
        </>        
    )
}