

function Input(props){

    return(
        <>
            <input 

                className="px-4 py-2 rounded-md border-slate-300 outline-slate-400"
                {...props} //Todas as props do input, como type, placeholder, value, onChange
            />
        </>
    )

}

export default Input