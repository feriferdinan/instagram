import React, { Component } from 'react';
import { FlatList } from "react-native"
import { Post } from "../presentation"
const axios = require('axios');

class PostFeed extends Component {
    constructor() {
        super()
        this.state = {
            post: []
        }
        this.getData()
    }
    getData = () => {
        that = this
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2351680137.7e5a9ff.6f4761835f114b6181ec14dba95520ca')
            .then(function (response) {
                that.setState({ post: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    _renderPost({ item }) {
        return <Post item={item} />
    }
    _returnKey(item) {
        return item.toString();
    }
    render() {
        return <FlatList
            data={this.state.post}
            renderItem={(item) => this._renderPost(item)}
            keyExtractor={(item, index) => item.id}
            showsVerticalScrollIndicator={false}
        />;
    }
}

export default PostFeed