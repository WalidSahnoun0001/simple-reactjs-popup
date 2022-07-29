function Popup(props) {
  return (
    (props.openState) ? 
        <div className="openedPopup">
            <span onClick={()=> {props.setState(false)}}>Close</span>
            <h2>Popup</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolor magnam fugit eaque inventore nobis optio dolore ipsa vero dolo</p>
        </div>
    : ''
  )
}

export default Popup