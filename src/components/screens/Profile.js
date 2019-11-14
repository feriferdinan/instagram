import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet, Image, Linking, ScrollView, Dimensions, TouchableHighlight } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconE from 'react-native-vector-icons/Entypo'

const AllUserPost = () => (
    <View style={[{ height: 200 }]} />
);

const TaggedPost = () => (
    <View style={[{ height: 200 }]} />
);

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'First' },
                { key: 'second', title: 'Second' },
            ],
            screenWidth: Dimensions.get('window').width
        }
    }
    _onPressButton = () => {
        alert("Pressed")
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />

                <View style={[styles.tempNav, { justifyContent: "space-between" }]} >
                    <View style={{ paddingHorizontal: 10, flexDirection: "row" }}>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>feriferdinanid&nbsp;</Text>
                        <IconE name="chevron-small-down" size={15} style={{ paddingTop: 2.5 }} />
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <IconSLI name="menu" size={23} />
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flex: 2.5 }}>
                            <Image
                                style={styles.userPic}
                                source={{ uri: "https://thumbs-prod.si-cdn.com/d4e3zqOM5KUq8m0m-AFVxuqa5ZM=/800x600/filters:no_upscale():focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg" }}
                            />
                        </View>
                        <View style={styles.wrapperCount} >
                            <View>
                                <Text style={styles.count}>2</Text>
                                <Text>Postingan</Text>
                            </View>
                            <View>
                                <Text style={styles.count}>223</Text>
                                <Text>Pengikut</Text>
                            </View>
                            <View>
                                <Text style={styles.count}>223</Text>
                                <Text>Mengikuti</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: 20 }}>
                        <Text>Feri</Text>
                        <Text style={{ color: "#aeaeae" }}>Seniman</Text>
                        <Text>Software Engineer</Text>
                        <Text style={{ color: '#4d6c85' }}
                            onPress={() => Linking.openURL('http://www.facebook.com')}>www.facebook.com</Text>
                    </View>

                    <View style={styles.wrapperButton}>
                        <TouchableHighlight underlayColor="#ededed" onPress={() => this._onPressButton()} style={styles.button}>
                            <Text>Edit Profile</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#ededed" onPress={() => this._onPressButton()} style={styles.button}>
                            <Text>Promosi</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="#ededed" onPress={() => this._onPressButton()} style={styles.button}>
                            <Text>Kontak</Text>
                        </TouchableHighlight>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ marginLeft: 10, marginTop: 30, flexDirection: "row" }}>
                            <View style={{ width: 85, height: 85, alignItems: "center" }}>
                                <View style={{ borderWidth: 1, borderRadius: 100, width: 55, height: 55, justifyContent: "center", alignItems: "center" }}>
                                    <IconAnt name="plus" size={25} />
                                </View>
                                <Text>Baru</Text>
                            </View>
                        </View>
                    </ScrollView>

                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: AllUserPost,
                            second: TaggedPost,
                        })}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: this.state.screenWidth }}
                        swipeEnabled={true}
                        renderTabBar={props => (
                            <TabBar
                                {...props}
                                style={{ backgroundColor: "#fff", color: "#aeaeae" }}
                            />
                        )}
                    />

                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: "100%",
        height: 50,
        backgroundColor: "rgb(250,250,250)",
        flexDirection: "row",
        alignItems: "center"
    },
    userPic: {
        height: 85,
        width: 85,
        borderRadius: 100,
        marginVertical: 10,
        marginHorizontal: 20
    },
    count: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    },
    wrapperCount: {
        flex: 7.5,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 5,
        alignItems: "center",
        borderColor: "#aeaeaeae"
    },
    wrapperButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 15,
        marginTop: 30
    }

})

export default Profile;
