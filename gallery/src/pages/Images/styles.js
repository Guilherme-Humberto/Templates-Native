import { StyleSheet } from 'react-native'
import { View, Text, FlatList, Dimensions } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    image: {
        height: 300,
        width: 300
    },
    itemStyle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#0ae3f5',
        height: 100,
        flex: 1,
        margin:1,
        WIDTH: Dimensions.get('window').width
        
    },
    itemText: {
        color: "#fff",
        fontSize:50,
    },
    itemInvisible:{
        backgroundColor:'transparent'
    }
});
export default styles;
