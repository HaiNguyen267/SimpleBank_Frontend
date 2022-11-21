import './css/Message.css'
export default function Message(props) {
    const success = "https://static.vecteezy.com/system/resources/previews/008/506/390/original/bright-green-tick-checkmark-icon-free-png.png";
    const failure = 'https://png.monster/wp-content/uploads/2021/06/png.monster-11-370x370.png'
    const imageLink = props.success ? success : failure
    return (
        <div className="Message form">
            <img src={imageLink} alt="" />
            <p className='message1'>{props.message}</p>
        </div>
    )
}