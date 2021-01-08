import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from "./styles";






const Images = () => {

  const dataList = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }];
  const numColumns = 4;

  let formatData=(dataList,numColumns) =>{
    const totalRows = Math.floor (dataList.length / numColumns)
    let totalLastRows = dataList.length - (totalRows*numColumns)

    while(totalLastRows !==0 && totalLastRows !== numColumns){
      dataList.push({key:'blank',empty:true})
      totalLastRows++
    }
    return dataList
  }

  let _renderItem = ({ item, index }) => {
    if (item.empty) {
    
      return <View style={styles.itemStyle}/>
      
    }
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <Text>eita</Text>
      <FlatList
        data={formatData(dataList,numColumns)}
        renderItem={_renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}

export default Images;