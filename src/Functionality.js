
function Functionality(props) {
    return (
        <div className="Functionality">
            <img className='functionality-img'src={props.image} alt="" />
            <p className='functionality-name'>{props.name}</p>
        </div>
    )
}

export default Functionality