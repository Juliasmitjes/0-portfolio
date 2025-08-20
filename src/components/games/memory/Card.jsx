function Card({item, id, handleClick}){

  return (
    <div className={`card ${item.stat}`} onClick={() => handleClick(id)}>
      <img src={item.img} alt="" className="card-img"/>
    </div>
  )
}

export default Card;