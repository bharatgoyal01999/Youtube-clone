import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

export default ({video, onVideoSelect})=>{
console.log(video)
    return (
        <Grid intem xs={12} style={{margin:'10px'}}>
            <Paper style={{display:'flex', alignItems:'center' ,cursor:"pointer"}} onClick={()=>onVideoSelect(video)}>
                <img style={{marginRight:'20px'}} alt={'thumbnail'} src={video.snippet.thumbnails.default.url} />
                <Typography variant='subtitle1'><b>{video.snippet.title} </b> </Typography>
            </Paper>
        </Grid>
    )
}