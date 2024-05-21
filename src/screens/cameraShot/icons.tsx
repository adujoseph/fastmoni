import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


interface FlipProps {
    onPress: () => void,
    isActive?: boolean
}
export const Flash = ({ onPress, isActive }: FlipProps) => {
    return (
        <>
            <Pressable onPress={onPress} style={styles.icons}>
                <MaterialIcon name={isActive ? "flash-on" : "flash-off"} color='#fff' size={20} />
            </Pressable>
        </>
    )
}

export const FlipView = ({ onPress, isActive }: FlipProps) => {
    return (
        <>
            <Pressable onPress={onPress} style={styles.icons}>
                <MaterialCommunityIcons name={"camera-flip-outline"} color='#fff' size={20} />
            </Pressable>
        </>
    )
}

export const NoAudio = ({ onPress, isActive }: FlipProps) => {
    return (
        <>
            <Pressable onPress={onPress} style={styles.icons}>
                <MaterialIcon name={"audiotrack"} color='#fff' size={20} />
            </Pressable>
        </>
    )
}


const styles = StyleSheet.create({
    icons: {
        marginBottom: 8, padding: 10 
    }
})
