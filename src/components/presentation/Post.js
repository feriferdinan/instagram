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
import IconFeather from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'

import * as Animatable from 'react-native-animatable'
const AnimatedIconAnt = Animatable.createAnimatableComponent(IconAnt)
const AnimatedIconFA = Animatable.createAnimatableComponent(IconFA)

class Post extends Component {

    constructor() {
        super()
        this.state = {
            screenWidth: Dimensions.get("window").width,
            screenHeight: Dimensions.get("window").height,
            liked: false,
            totalLikes: 0,
            saved: false
        }
    }

    componentWillMount() {
        this.setState({
            totalLikes: this.props.item.likes.count,
            liked: this.props.item.user_has_liked
        })
    }

    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.animateIcon()
        } else {
            this.lastTap = now;
        }
    }

    saveToggled = () => {
        this.smallAnimatedIconFA.bounceIn()
        this.setState({
            saved: !this.state.saved
        })
    }

    likeToggled = (expression) => {
        switch (expression) {
            case "inc":
                this.smallAnimatedIcon.bounceIn()
                this.setState({
                    liked: true,
                    totalLikes: this.state.totalLikes + 1
                })
                break;
            case "dec":
                this.smallAnimatedIcon.bounceIn()
                this.setState({
                    liked: false,
                    totalLikes: this.state.totalLikes - 1
                })
                break;
        }
    }

    handleLargeAnimatedIconRef = (ref) => {
        this.largeAnimatedIcon = ref
    }
    handleSmallAnimatedIconRef = (ref) => {
        this.smallAnimatedIcon = ref
    }
    handleSmallAnimatedIconFARef = (ref) => {
        this.smallAnimatedIconFA = ref
    }

    animateIcon = () => {
        const { liked } = this.state
        this.largeAnimatedIcon.stopAnimation()

        if (liked) {
            this.largeAnimatedIcon.bounceIn()
            this.smallAnimatedIcon.bounceIn()
                .then(() => this.largeAnimatedIcon.bounceOut())
        } else {
            if (!liked) {
                this.likeToggled("inc")
            }
            this.largeAnimatedIcon.bounceIn()
            this.smallAnimatedIcon.bounceIn()
                .then(() => {
                    this.largeAnimatedIcon.bounceOut()
                })

        }
    }

    render() {
        const { liked, totalLikes, saved } = this.state
        const imageHeight = Math.floor(this.state.screenWidth * 1)
        const imageSelection = (this.props.item % 2 == 0)
            ? "https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*"
        const imageUri = imageSelection
        return (
            <View>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            style={styles.userPic}
                            source={{ uri: this.props.item.user.profile_picture }} />
                        <Text style={styles.userName}>{this.props.item.user.username}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => alert("more clicked")}
                        activeOpacity={1}
                        style={styles.wrapperIcon}>
                        <IconFeather name="more-vertical" size={20} style={{ paddingLeft: 25, paddingTop: 15 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={this.handleDoubleTap}
                    activeOpacity={1}
                    style={[styles.card, { width: this.state.screenWidth, height: imageHeight }]}
                >
                    <AnimatedIconAnt
                        ref={this.handleLargeAnimatedIconRef}
                        name="heart"
                        color="#fff"
                        size={80}
                        style={styles.heartAnimatedIcon}
                        duration={500}
                        delay={200}
                    />
                    <Image
                        style={{ width: this.state.screenWidth, height: imageHeight }}
                        source={{ uri: this.props.item.images.standard_resolution.url }} />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={liked ? () => this.likeToggled("dec") : () => this.likeToggled("inc")}
                            activeOpacity={1}
                            style={styles.wrapperIcon}>
                            <AnimatedIconAnt
                                ref={this.handleSmallAnimatedIconRef}
                                size={25}
                                name={liked ? "heart" : "hearto"}
                                color={liked ? "#ED4956" : "#000"}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert("comment clicked")}
                            activeOpacity={1}
                            style={styles.wrapperIcon}>
                            <IconEvil size={38} name="comment" style={{ paddingTop: 8 }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert("share clicked")}
                            activeOpacity={1}
                            style={styles.wrapperIcon}>
                            <IconSLI size={25} name="paper-plane" style={{ paddingTop: 11 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={this.saveToggled}
                        activeOpacity={1}
                        style={styles.wrapperIcon}>
                        <AnimatedIconFA
                            size={25}
                            name={saved ? "bookmark" : "bookmark-o"}
                            style={[styles.icon, { paddingLeft: 16 }]}
                            ref={this.handleSmallAnimatedIconFARef}
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.iconBar, { flexDirection: "column" }]}>
                    {(totalLikes == 0)
                        ? null
                        : <View style={{ width: 100 + "%" }}>
                            <Text style={styles.userName}>{this.state.totalLikes} Like</Text>
                        </View>}
                    <View style={{ width: 100 + "%" }}>
                        <Text style={styles.userName}>feri_ferdinan_  <Text style={{ fontWeight: "normal" }}>Ad ullamco labore ipsum cillum elit minim sunt aliquip.</Text></Text>

                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 35,
        width: 35,
        borderRadius: 30
    },
    iconBar: {
        width: 100 + "%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        paddingLeft: 12,
        paddingTop: 12
    },
    wrapperIcon: {
        height: config.styleConstants.rowHeight,
        width: 50
    },
    userName: {
        marginLeft: 10,
        fontWeight: "bold"
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },
    heartAnimatedIcon: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        borderRadius: 160,
        opacity: 0
    },

})

export default Post