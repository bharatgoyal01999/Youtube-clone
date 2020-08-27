import React from 'react'
import {Paper,Typography} from '@material-ui/core'


export default ({video})=>{
if (!video) return <div> Loding...</div>

const videoSrc='https://www.youtube.com/embed/'+video.id.videoId;


    return (
        <React.Fragment>
            <Paper elevation={5} style={{height:"70%"}}>
            <iframe width="100%" height="100%" frameBorder={0} title="Video Player" src={videoSrc}  />
            </Paper>
            <Paper elevation={5} style={{padding:'15px'}} >
    <Typography varient='h4' >{video.snippet.title}</Typography>
    <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
    <Typography variant='subtitle2'>{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    );
}