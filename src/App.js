import React from 'react'
import { Grid } from '@material-ui/core'
import { SearchBar , VideoDetails, VideoList} from './components'
import youtube from './api/youtube'
class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null,
    }

handleVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
}

handleSearch = async (searchItem)=>{

    const response= await youtube.get("search", {
        params:{
            part:'snippet',
            maxResults:5,
            key:"[API KEY]",
            q:searchItem
        }
    })
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})

}

    render(){
const {selectedVideo}=this.state
        return (
            <Grid container justify='center' spacing={10} style={{maxWidth:'100%'}} >
                <Grid item xs={12} >
                    <Grid  container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar  onFormSubmiting={this.handleSearch} />
                        </Grid>
                        <Grid item xs={8} >
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4} >
                            <VideoList videos={this.state.videos} onVideoSelect={this.handleVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default App