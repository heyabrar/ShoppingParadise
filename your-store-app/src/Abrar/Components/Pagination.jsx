export default function Pagination ({current,onChange,totalPage}){
    const prev = <button onClick={( ) => onChange(current-1)} disabled={current===1}>Prev</button>
    const present = <button>{current}</button>
    const next = <button onClick={( ) => onChange(current+1)} disabled={current === Math.ceil(totalPage/15)}>Next</button>
    return (
        <>
        {prev}
        {present}
        {next}
        </>
    )
}