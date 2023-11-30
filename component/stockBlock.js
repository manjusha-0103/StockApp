import React, { useRef } from 'react'
import { Text, View , StyleSheet} from 'react-native'

const StockBlock =(props)=> {
    const stock = props.props;
    return (
        <View style ={{
            width : 300,
            height : "fit-content",
            padding : 20,
            backgroundColor : "#dfe3f5",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            zIndex : 1,
            position : "fixed",
            
            left : 40,
            opacity : 0.8,
            top : -130,
            position : "absolute"
        }}>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Name</Text>       : {stock.name}</Text>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Currency</Text> : {stock.currency_name}</Text>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Market</Text>     : {String(stock.market).toUpperCase()}</Text>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Ticker</Text>      : {stock.ticker}</Text>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Type</Text>         : {stock.type}</Text>
            <Text style = {styles.text_style}><Text style={{color :"black"}}>Price</Text>        : $ {stock.price.toFixed(2)}</Text>

        </View>
    )
  
}

export default StockBlock

const styles = StyleSheet.create({
    text_style: {
      fontSize : 15,
      fontWeight : "900",
      color : "gray"
    },
});
