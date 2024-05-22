import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../../components/CustomText';
import Ionicon from 'react-native-vector-icons/Ionicons'


interface Items {
    item: {
        id: number;
        title: string;
        description: string;
        route: string;
    }
}
const SettingsItem = ({ item }: Items) => {
    console.log(item)
    return (
        <Pressable style={styles.wrapper}>
            <View>
                <CustomText style={styles.textBold}>{item.title}</CustomText>
                <CustomText style={styles.textRegular}>{item.description}</CustomText>
            </View>
            <View>
                <Ionicon name="chevron-forward" size={30} color='lightgray'/>
            </View>
        </Pressable>
    )
}

export default SettingsItem

const styles = StyleSheet.create({
    wrapper:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10
    },
    textBold: {
        fontSize: 18,
        fontWeight: '700'
    },
    textRegular: {
        fontSize: 13,
        fontWeight: '400'
    }
})