//import { Component } from "react";
 import './search-box.styles.css';
// class Searchbox extends Component{
//     render(){
//         const {handler}= this.props;
//         return (
//             // change the name of class in order to edit using css (classnamechange)
//             <input className={`classnamechange ${this.props.className}`} 
//             type='search' 
//             placeholder={this.props.placeholder}
//             onChange={handler} />
  
//         )
//     }
// }

const Searchbox=({className,placeholder,handler})=>
(
    <input className={`classnamechange ${className}`} 
    type='search' 
    placeholder={placeholder}
    onChange={handler} />
)

export default Searchbox;