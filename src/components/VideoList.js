import React from 'react'
import VideoItem from './VideoItem'
import { Grid } from '@material-ui/core'

export default ({videos, onVideoSelect})=>{

const lodedvideos=videos.map((item,id)=>{
    console.log(id)
    return (<VideoItem key={id} video={item} onVideoSelect={onVideoSelect} />)
})

        return (
        <Grid container spaceing={10}>{lodedvideos}</Grid>
            
            );
}