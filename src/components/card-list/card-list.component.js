import './card-list.style.css';
import Card from "../card/card.component";

const CardList = ({ monsters }) =>  (
       
    <div className="card-list">
        {monsters.map( (monster) => {
            const { name, email, id } = monster;
            return (
                <Card monster={monster} />
            )   
            })}
    </div>
);

export default CardList;