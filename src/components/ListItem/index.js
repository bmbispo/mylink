import React from 'react';
import { View, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { ContainerButton, Item } from './styles'

export default function ListItem(){
    return(
        <View>
            <ContainerButton activeOpacity={0.9} onPress={() => alert('TESTE') }>
                <Feather
                    name="link"
                    color="#fff"
                    size={24}
                />
                <Item numberOfilines={1}>https://youtube.com</Item>
            </ContainerButton>
        </View>
    )
}