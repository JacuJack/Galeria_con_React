import  './Cards.css';


function Cards(props) {
    return (
        <article className="contenedorCard">
            <div>
                <img src={props.srcImg} alt="{props.descripcionImg" />
            </div>
            <div>
                <h2>{props.tituloImg}</h2>
            </div>
            <div>
                <h5>{props.descripcionImg}</h5>
            </div>
        </article>







    )
}
export default Cards;