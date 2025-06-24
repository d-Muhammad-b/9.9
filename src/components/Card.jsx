import './card.css'

function Card(props) {
  console.log(props);
  
  return (
    <div className='card' style={{backgroundColor:props.bg}}>
        <img src="./Picture.png" alt="sd" />
        <h2>NIKE AIR FORCE 1 07 (white/black)</h2>
        <h3>$89.99</h3>
        <p>I lost left shoe, dont need this one anymore. Please buy it.</p>
        <button className='btn' style={{backgroundColor:props.btn_bg}}><i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
    </div>
  )
}

export default Card