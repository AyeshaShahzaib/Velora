export default function Header(){
    return(
        <div className=" ">
        <div className=" h-20 flex justify-between items-center  mx-7 ">
            <div className="flex justify-between w-1/3"><img src="Volera.png" alt="Logo" className="h-[15%] w-[25%]" /></div>
            <div className="flex justify-between w-1/3 text-white">
                <h1>Home</h1>
                <h1>Shop</h1>
                <h1>About</h1>
                <h1>Contact</h1>
            </div>
        </div>
        </div>
    )
}