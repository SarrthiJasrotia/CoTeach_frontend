import ReactPlayer from 'react-player';

function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <ReactPlayer height="100%" width="100%" controls url="https://www.youtube.com/watch?v=Jqf9haCd6mM&ab_channel=DennisRethers" />

    </div>
  )
}

export default VideoPlayer;