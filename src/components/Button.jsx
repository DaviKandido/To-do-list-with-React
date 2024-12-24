
function Button(props){

    return(
        <>
            <button 
                className="p-2 text-white rounded-md bg-slate-400" 
                {...props}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button