import '../../../styles/memory.css';

function Card({item, id, handleClick}){

  return (
  <div className="h-full">   
    <div
      className={`card ${item.stat} m-0 p-0 h-full bg-myDark flex justify-center items-center rounded-md cursor-pointer shadow-lg border-[6px] border-myDark`}
      onClick={() => handleClick(id)}
      >
      <img src={item.img} alt="" className="card-img max-w-7/10" />
    </div>
  </div> 
)}

export default Card;