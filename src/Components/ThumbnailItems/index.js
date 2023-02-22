import './index.css'

const ThumbnailItems = props => {
  const {eachList, onMatch} = props
  const {thumbnailUrl} = eachList
  const onClickImage = () => onMatch(thumbnailUrl)
  return (
    <li className="image-list">
      <button type="button" onClick={onClickImage} className="thumbnail-button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItems
