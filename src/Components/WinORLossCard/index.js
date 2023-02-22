import './index.css'

const WinORLossCard = props => {
  const {score, onPlayAgain} = props
  const playGameAgain = () => {
    onPlayAgain()
  }
  return (
    <div className="WinOrLoss-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="winner-score">YOUR SCORE</p>
      <p className="winner-score">{score}</p>
      <div className="play-again">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <button type="button" className="reset-button" onClick={playGameAgain}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default WinORLossCard
