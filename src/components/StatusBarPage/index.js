import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function StatustBarPage(props){
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default StatustBarPage