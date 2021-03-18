import React, {useState} from 'react';
import styles from './ArtistForm.module.css';


const SongForm = props => {
    const [formInfo,setForminfo] = useState({
        artistName:"",
        artistImg:"",
        artistGenre:"",
        artistColor:""
        
        
    })

    const[allArtists,setAllArtists] = useState([])
    
    const changeHandler = (e) =>{
        setForminfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        setAllArtists([...allArtists, formInfo])
        setForminfo({
            artistName:"",
            artistImg:"",
            artistGenre:"",
            artistColor:""
            
        })
        

    }

    
    return (
        <>
            <div className="jumbotron">
                <h1 className="display-3">Welcome</h1>  
                <p>Add an artist you like using the form below!</p>
            </div>

            <form onSubmit = {submitHandler} className="col-6 mx-auto">
                
                <div className="form-group">
                    <label htmlFor = "">Artist </label>
                    <input className = "form-control" type="text" name="artistName" id="" onChange = {changeHandler} value = {formInfo.artistName} />
                </div>

                <div className="form-group">
                    <label htmlFor = "">Favorite Color </label>
                    <input className = "form-control" type="text" name="artistColor" id="" onChange = {changeHandler} value = {formInfo.artistColor} />
                </div>

                <div className="form-group">
                    <label htmlFor = "">Genre </label>
                    <select class="custom-select" name = "artistGenre" onChange={changeHandler} value = {formInfo.artistGenre}>
                        <option selected>Open this select menu</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="Rock">Rock</option>
                        <option value="Country">Country</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor = "">Image</label>
                    <input className = "form-control" type="text" name="artistImg" onChange = {changeHandler} id="" value = {formInfo.artistImg}/>
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
            <hr></hr>
            
            <div className = {styles.container}>
                {allArtists.map(artist =>{
                    return <div className = {styles.artist} style = {{backgroundColor:artist.artistColor}}>
                            <p>Artist Name: {artist.artistName}</p>
                            <p>Artist Color: {artist.artistColor}</p>
                            <p>Genre: {artist.artistGenre}</p>
                            <p><img src={artist.artistImg} alt="" height = "150px" width = "200px"/></p>
                        </div>
                }) }
            </div>
            
        </>    
        
    );
};


export default SongForm;