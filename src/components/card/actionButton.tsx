import React, {useState} from "react"
import { connect } from "react-redux"
import { Icon } from "../../common/icons"
import "./actionButton.less"

const ActionButton = (props) => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const parentEle = React.createRef<HTMLDivElement>();
  const inputNode = React.createRef<HTMLInputElement>();

  const toggleForm = () => {
    if (isFormOpen) setFormOpen(false);
    else {
      setFormOpen(true);
    }
  }

  const handleChange = (event) => {
    if (isFormOpen) setInputValue(event.target.value);
  }

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleAction();
    }
  }

  const focusInCurrentTarget = ({ currentTarget }) => {
    const parent = parentEle.current;
    let node = currentTarget;
          
    while (node.parentElement !== null) {
      if (node === parent) return true;
      node = node.parentElement;
    }
  
    
    return false;
  }
  
  const handleBlur = (e) => {
    if (!focusInCurrentTarget(e)) {
      setInputValue("");
      setFormOpen(false);
    }
    else {
      inputNode.current.focus();
    }
  }
  
  const handleAction = () => {
    const { dispatch } = props;
    const val = inputValue;
    setInputValue("");
    setFormOpen(false);

    if (val) {
      props.action(val);
    }
  }

  const renderAddButton = () => {
    return (
        <button className="action-button" onClick={toggleForm} >
            <Icon name={props.iconName} small={true} />
            <span>{props.buttonText}</span>
        </button>
      )
  }

  const renderForm = () => {

      return (
          <div style={{position: "relative"}} ref={parentEle} >
            <button className="action-button" onClick={toggleForm} onBlur={toggleForm}>
              <Icon name={props.iconName} small={true} />
              <span>{props.buttonText}</span>
            </button>
            <div className="action-button__form">
              <div className="action__title">
                <span>{props.formTitle}</span>
              </div>
              <div className="action__body">
                <label>{props.label}</label>
                <input 
                  autoFocus 
                  ref={inputNode}
                  value={inputValue}
                  type={props.inputType} 
                  placeholder={props.placeholder}
                  onChange={handleChange}
                  onKeyDown={handleEnter}
                  onBlur={handleBlur}
                />
              </div>
              <div className="action__button">
                <button onClick={handleAction}>{props.actionButtonText}</button>
              </div>
              <span className="action__close" onClick={toggleForm}>
                <Icon name="CancelOutlined" medium={true} />
              </span>
            </div>
          </div>
      )
  }

  if (isFormOpen) return renderForm();
  else return renderAddButton();
}

export default connect()(ActionButton)