import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
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

import TimeAgo from 'react-native-timeago';
let moment = require('moment'); //load moment module to set local language
require('moment/locale/id'); //for import moment local language file during the application build
moment.locale('id');//set moment local language to id

import ReadMore from 'react-native-read-more-text'

class Post extends Component {

    constructor() {
        super()
        this.state = {
            screenWidth: Dimensions.get("window").width,
            screenHeight: Dimensions.get("window").height,
            liked: false,
            totalLikes: 894.808,
            saved: false
        }
    }

    componentDidMount() {
        this.setState({
            // totalLikes: this.props.item.likes.count,
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


    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: "#aeaeaeae" }} onPress={handlePress}>
                ... lainnya
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
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
                .then(() => this.largeAnimatedIcon.bounceOut())

        }
    }

    render() {
        const { liked, totalLikes, saved } = this.state
        const { item } = this.props
        const imageHeight = Math.floor(this.state.screenWidth * 1)
        const imageSelection = (item % 2 == 0)
            ? "https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg"
            : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*"
        const created_time = new Date(item.created_time * 1000).toGMTString()

        return (
            <View style={{ backgroundColor: "#fff" }}>
                <View style={styles.userBar}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: "#aeaeae" }}>
                            <Image
                                style={styles.userPic}
                                source={{ uri: item.user.profile_picture }} />
                        </View>
                        <View style={{ flexDirection: "column", justifyContent: "center" }}>
                            <Text style={styles.userName}>{item.user.username}</Text>
                            <Text style={{ marginHorizontal: 10, fontSize: 12 }}>{item.location.name}</Text>
                        </View>
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
                    {
                        (item.type === "image") ?
                            <Image
                                style={{ width: this.state.screenWidth, height: imageHeight }}
                                source={{ uri: item.images.standard_resolution.url }} />
                            :
                            null
                    }
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
                            onPress={() => this.props.navigation.navigate("Comment")}
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
                            <Text style={styles.userName}>{this.state.totalLikes}&nbsp;suka</Text>
                        </View>}
                    <TouchableWithoutFeedback style={{ width: 100 + "%" }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <ReadMore
                                numberOfLines={2}
                                renderTruncatedFooter={this._renderTruncatedFooter}
                                renderRevealedFooter={this._renderRevealedFooter}
                                onReady={this._handleTextReady}>
                                <Text style={styles.userName}>{item.user.username} <Text onPress={() => this.props.navigation.navigate("Comment")} style={{ fontWeight: "100" }}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sit illum cum fuga nam placeat
                                    sapiente velit dolores voluptatem? Facilis eius facere temporibus ex repellat repellendus aliquid,
                                    harum deleniti maxime!{item.caption.text}
                                </Text>
                                </Text>
                            </ReadMore>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Comment")}>
                        <Text style={{ color: "#aeaeae", marginHorizontal: 10 }}>Lihat semua 24 komentar</Text>
                    </TouchableWithoutFeedback>
                    <Text style={{ marginVertical: 2, marginHorizontal: 10, fontSize: 9, color: "#aeaeae" }}><TimeAgo time={created_time} interval={20000} /></Text>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        borderBottomColor: "#aeaeae",
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },
    userPic: {
        height: 30,
        width: 30,
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
        marginHorizontal: 10,
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