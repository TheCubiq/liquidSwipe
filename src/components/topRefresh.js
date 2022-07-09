import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const TopRefresh = (props) =>  {
    return (
      <View>
        <Text>topRefresh</Text>
        {props.children}
      </View>
    )
};

export default TopRefresh;

// const styles = StyleSheet.create({
    
// })