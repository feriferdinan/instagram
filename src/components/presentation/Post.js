import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import config from '../../config';

import IconAnt from 'react-native-vector-icons/AntDesign'
import IconEvil from 'react-native-vector-icons/EvilIcons'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'

class Post extends Component {

    constructor() {
        super()
        this.state = {
            screenWidth: Dimensions.get("window").width,
            screenHeight: Dimensions.get("window").height,
            liked: false,
        }
    }

    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.likeToggled();
        } else {
            this.lastTap = now;
        }
    }
    likeToggled = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        const imageSelection = (this.props.item % 2 == 0)
            ? "https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*"
        const imageUri = imageSelection
        const HeartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null
        return (
            <View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic}
                            source={{ uri: "https://avatars2.githubusercontent.com/u/50045891?s=400&u=4d28168b0b148d6dc04a2d8938aeea49cb4e0ee5&v=4" }} />
                        <Text style={{ marginLeft: 10 }}>feri_ferdinan_</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 30 }}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={this.handleDoubleTap}
                    activeOpacity={1}

                >
                    <Image
                        style={{ width: this.state.screenWidth, height: imageHeight }}
                        source={{ uri: imageUri }} />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <View style={styles.icon}>
                        {(this.state.liked)
                            ? <IconAnt size={30} name="heart" color="red" />
                            : <IconAnt size={30} name="hearto" />
                        }
                    </View>
                    <View style={styles.icon}>
                        <IconEvil size={45} name="comment" />
                    </View>
                    <View style={styles.icon}>
                        <IconSLI size={30} name="paper-plane" />
                    </View>
                </View>
                <View style={styles.iconBar}>
                    <Image style={[styles.icon, { height: 30, width: 30 }]} source={config.images.heartIcon} />
                    <Text>123 Likes</Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + "%",
        height: 56,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    userBar: {
        width: 100 + "%",
        height: 50,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 10
    },

})

export default Post