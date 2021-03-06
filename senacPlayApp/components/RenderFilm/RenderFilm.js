import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const RenderFilm = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("Watch", item)}>
                <View style={styles.container}>
                    <Image source={{ uri: item.imagem }} style={styles.img} />
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default RenderFilm;