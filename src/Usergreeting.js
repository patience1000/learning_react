import React, { Component } from "react";

class Usergreeting extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
}

    // render(){
    //     return  this.state.isLoggedIn && <div>Welcome Patience</div>
    //     )
        // Tenary condition operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Patience</div>:
        //     <div>Welcome Guest</div>
        // )
        // Element approach
        // let message 
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Patience</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return(
        //     <div>
        //         Hello Patience
        //     </div>
        //     )
        // } else{
        //     return(
        //     <div>
        //         Welcome Patience
        //     </div>
        //     )
        // }
       
        // }
// }
export default Usergreeting