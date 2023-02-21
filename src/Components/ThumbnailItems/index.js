import './index.css'

const ThumbnailItems = props => {
  const {eachList, onMatch} = props
  const {thumbnailUrl} = eachList
  const onClickImage = () => onMatch(thumbnailUrl)
  return (
    <li className="image-list">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="thumbnail-image"
        onClick={onClickImage}
      />
    </li>
  )
}

export default ThumbnailItems
