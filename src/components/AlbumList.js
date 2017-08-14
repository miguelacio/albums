import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

    componentWillMount() {
        state = { albums: [] };

        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
        <Text key={album.title}>{album.title}</Text>);
    }

    render() {
        return (

            <View>
                {this.renderAlbums()}
            </View>
        );
        console.log(this.state.albums);
    }
}

export default AlbumList;           