import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import RenderHtml from 'react-native-render-html';
import React from 'react'
import Avatar from './avatar'
import { hp, wp } from '../helper/common'
import { theme } from '../constants/theme'
import Icon from '../assets/Icons'

const textStyles = {
    color: theme.colors.dark,
    fontSize: hp(1.75),
};
const tagStyles = {
    div: textStyles,
    p: textStyles,
    ol: textStyles,
    h1: {
        color: theme.colors.dark,
    },
    h4: {
        color: theme.colors.dark,
    }
}

const PostCard = (item, currentUser, router, hasShadow = true) => {
    const videoSource =
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    console.log(`Video from Item ${item.id}:`, item.video);
    const shadowStyles = {
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.86,
        shadowRadius: 6,
        elevation: 1,
    }
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, hasShadow && shadowStyles]}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Avatar size={hp(4.5)} uri={require('../assets/Images2/defaultUser.png')} rounded={theme.radius.md}></Avatar>
                    <View style={{ gap: 2 }}>
                        <Text style={styles.username}>{item?.item?.name}</Text>
                        <Text style={styles.postTime}>{item?.item?.created_at}</Text>
                    </View>
                </View>
                <TouchableOpacity><Icon name={"threeDotsHorizontal"} size={hp(3.4)} strokeWidth={3} color={theme.colors.text} /></TouchableOpacity>
            </View>

            {/* Post Body and Media */}
            <View>
                <View>
                    <Text>{
                        item?.item.body && (
                            <RenderHtml
                                contentWidth={width}
                                source={{ html: item?.item?.body }}
                                tagsStyles={tagStyles}
                            />
                        )
                    }</Text>
                </View>
                <Image source={require('../assets/postImages/motherHolding.jpg')}
                    style={[styles.postMedia]}
                />
                {/* {item.item.video&&( */}
                {/* <Video
                        source={item.item.video}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay
                        style={{ width: '100%', height: 200 }}
                    />
            )} */}
            </View>
        </View>
    )
}

export default PostCard

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 15,
        borderRadius: theme.radius.xxl * 1.1,
        borderCurve: 'continuous',
        padding: 10,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderWidth: .5,
        borderColor: theme.colors.gray,
        shadowColor: '#000',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    username: {
        fontWeight: theme.fonts.bold,
        fontSize: theme.radius.lg
    },
    postMedia: {
        height: hp(50),
        width: '100',
        borderRadius: theme.radius.xl,
        borderCurve: 'continuous',
    }
})