import React, { Component } from 'react';

//=========================
// Using Function Component
//=========================
const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.FirstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    )
}



// //=======================
// //  Using Class Componets
// //=======================
// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             age: this.props.age,
//         };
//     }
//     birthday = () => {
//         this.setState({age : this.state.age + 1})
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {this.props.hairColor}</p>
//                 <button onClick={this.birthday} > Make me older</button>
//             </div>
//         );
//     }
// }
    
    export default PersonCard;