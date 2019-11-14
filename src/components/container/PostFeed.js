import React, { Component } from 'react';
import { FlatList } from "react-native"
import { Post } from "../presentation"
import axios from 'axios';
import { ACCESS_TOKEN } from 'react-native-dotenv'

class PostFeed extends Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
        this.getData()
    }
    getData = () => {
        axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`)
            .then((response) => {
                this.setState({ post: response.data.data })
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    _renderPost({ item }) {
        return <Post item={item} navigation={this.props.navigation} />
    }
    _returnKey(item) {
        return item.toString();
    }
    render() {
        return <FlatList
            data={this.state.post}
            renderItem={(item) => this._renderPost(item)}
            keyExtractor={(item, index) => item.id}
        />;
    }
}

export default PostFeed