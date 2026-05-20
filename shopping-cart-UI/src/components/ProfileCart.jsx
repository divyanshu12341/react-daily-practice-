const ProfileCart = ({Price}) =>{
    const [Quantity,setQuantity] = useState();
    return(
        <>
        <button >Up</button>
        <h2>{Price*Quantity}</h2>
        <button>Down</button>
        </>
    )
}