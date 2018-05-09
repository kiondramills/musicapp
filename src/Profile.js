import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
	constructor(props){
		super(props);
		this.state = {
			playingUrl: '',
			audio: null,
			playing: false
		}
	}

	playAudio(previewUrl){
		let audio = new Audio(previewUrl);
		if (!this.state.playing){
			audio.play();
			this.setState({
				playing: true,
				playingUrl: previewUrl,
				audio
			})
		}	else {
			if(this.state.playingUrl === previewUrl) {
				this.state.audio.pause();
				this.setState({
					playing: false
				})
			}	else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					playing: true,
					playingUrl: previewUrl,
					audio
				})
			}
		}
		
	}

	render(){
	
		console.log('this.props', this.props);
		console.log('this.props.artist: ', this.props.artist);

		let artist = {artistName: '', primaryGenreName: '', artworkUrl100
		: "", collectionName
		: "", collectionPrice: "", currency: "", releaseDate
		: "", trackName
		: "", trackNumber: "", trackPrice
		: "", trackViewUrl: "", previewUrl: ""};

		artist = this.props.artist !== null ? this.props.artist : artist;

		return(
			<div>

			<div className="profile">
				<img 
					
					className = "profile-img"
					src = {artist.artworkUrl100}
					onClick={() => this.playAudio(artist.previewUrl)}

				/>
				
				
	
			</div>
				

			<div className= "profile-name">Artist: {artist.artistName} </div>	
			<div className = "genre"> Genre: {artist.primaryGenreName} </div>
			<div className = "genre"> Album Name: {artist.collectionName} </div>
			<div className = "genre"> Album Price: {artist.collectionPrice} </div>
			<div className = "genre"> Single Name: {artist.trackName} </div>
			</div>
		)
	}

}

export default Profile;