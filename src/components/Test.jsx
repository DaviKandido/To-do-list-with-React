import React from "react"

class Test extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            message: "Hello Word"
        }
    }

    componentDidMount(){
        console.log("É executado quando o usuário acessa a pagina")
    }

    render(){
        return(
            <h1>{this.state.message}</h1>
        )
    }

}

export default Test