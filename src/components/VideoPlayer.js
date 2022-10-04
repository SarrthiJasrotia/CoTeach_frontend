import ReactPlayer from 'react-player';


function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <ReactPlayer height="100%" width="100%" controls url={props.url} />

    </div>
  )
}

export default VideoPlayer;