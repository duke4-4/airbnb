export default function Cards(props){
    return(
        <div className="cards-container">
            <div className="cards">
                <img src={props.Cardimg} alt="thumb" className="card-img"/>
                <div className="star">
                <img src={props.star} alt="" />
                <span> 5.0 </span>
                <span className="span-text"> (30) &bull; USA </span>
                
            </div>
            <p className="star-paragraph">Life lessons with Katie Zaferes</p>
            <div className="price">
                <span className="from">From $136</span>
                <span > / person</span>
                
            </div>
    
            </div>
            
        </div>
    )
}