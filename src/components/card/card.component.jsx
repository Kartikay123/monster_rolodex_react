//import { Component } from "react";
import './card.styles.css';
// class Card extends Component{
//     render(){
//         const {email,id,name}=this.props.mono;
//         return (
//             <div className="card-container" key={id}>
//                     <img alt={`mono ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                    </div>
//         )
//     }
// }

const Card=({mono})=>
{
    const {email,id,name}=mono;
    return(
    //const {email,id,name}=mono;
    <div className="card-container" key={id}>
                    <img alt={`mono ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                     <h2>{name}</h2>
                     <p>{email}</p>
                   </div>
)
}
export default Card;