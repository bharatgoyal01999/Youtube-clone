import React from 'react'
import { Paper,TextField } from '@material-ui/core'
export default class SearchBar extends React.Component{
    state={
        searchItem:"",
    }
 handleChange=(event)=>{this.setState({searchItem:event.target.value})}

 handleSubmit=(event)=>{

     const {searchItem}=this.state;
     const {onFormSubmiting } = this.props;
     onFormSubmiting(searchItem)
    event.preventDefault()


 }

    render (){
       
        return (
            <Paper elevation={5} style={{padding:5,}} >

            <form onSubmit={this.handleSubmit}>
                <TextField label={'Search..'} onChange={this.handleChange}/>
            </form>
            </Paper>
        );
    }
}