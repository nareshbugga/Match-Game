import './index.css'

const TabItems = props => {
  const {eachTab, onClickEvent, condition} = props
  const {tabId, displayText} = eachTab
  const onTabItems = () => onClickEvent(tabId)
  const style = condition ? 'text-decoration' : ''
  return (
    <li>
      <button
        type="button"
        className={`button-tab ${style}`}
        onClick={onTabItems}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
