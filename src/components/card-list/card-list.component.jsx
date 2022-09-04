import Card from "../card/card.component";
import "./card-list.style.css"


const CardList = ({filter})=>{
      return(
       <div className="card-list">
         {filter.map(e=>{
         const {id,name, email} = e
         return (
            <Card key={id} id={id} name={name} email={email}/>
         );
       })}
       </div>
      )
   
}

export default CardList