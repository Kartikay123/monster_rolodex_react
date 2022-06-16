//import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

// class CardList extends Component{
//     render(){
//         const {mono}= this.props;

//         console.log(this.props);
//         return (
//         <div className="card-list">
//            {mono.map((mono)=>{
              
//                return (
//                    <Card mono={mono}/>
//                )
//            })}
//         </div>
       
//         )
//     }
    
// }


const CardList=({mono})=>

(
    <div className="card-list">
            {mono.map((mono)=>{
              
              return (
                 <Card mono={mono}/>
              )
          })}
      </div>
)
export default CardList;