import '../../../styles/memory.css';

function Card({item, id, handleClick}){

  return (

  <div className="h-full">   
    <div
      className={`card ${item.stat} m-0 p-0 h-full bg-myBlue`}
      onClick={() => handleClick(id)}
      >
      <img src={item.img} alt="" className="card-img" />
    </div>
  </div>


    
  )
}

export default Card;