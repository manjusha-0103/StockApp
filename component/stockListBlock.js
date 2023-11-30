import React, { useState } from 'react'
import { Text, View, Pressable } from 'react-native'
import moment from 'moment'
import StockBlock from './stockBlock'

const StockListBlock =(props)=> {
    const stock = props.props;
    const [longpress, setLongPress] = useState(false)
  
    return (
        <>
        <Pressable key = {stock.ticker} 
            onLongPress={()=>setLongPress(true)}
            onPress={()=>setLongPress(false)}
            style ={{
                position : "relative"
            }}
        >
          <View key = {stock.ticker} 

            style={{ 
              width : "100%",
              paddingHorizontal: 5,
              flexDirection: "row",
              justifyContent: "space-around",  
              
          }}>
            
            <View
              style={{ 
                width : "25%",
                height: 70, 
                paddingTop: 12, 
                borderRightColor: "white",
                padding:10,
                borderRightWidth: 1, 
                borderRightColor: 'white',
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                alignItems : "center",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity:  0.15,
                shadowRadius: 1.00,
                elevation: 1,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "800",
                  fontSize: 12,
                }}
              >
                {stock.name}
              </Text>
            </View>
            <View
              style={{ 
                width : "25%",
                height: 70, 
                paddingTop: 12, 
                borderRightColor: "white",
                padding:10,
                borderRightWidth: 1, 
                borderRightColor: 'white',
                shadowColor: "#000000",
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity:  0.15,
                shadowRadius: 1.00,
                elevation: 1,
                
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "800",
                  fontSize: 12,
                }}
              >
                {stock.ticker}
              </Text>
            </View>
            <View
              style={{ 
                width : "25%",
                height: 70, 
                paddingTop: 12, 
                borderRightColor: "white",
                padding:10,
                borderRightWidth: 1, 
                borderRightColor: 'white',  
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity:  0.15,
                shadowRadius: 1.00,
                elevation: 1,
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "800",
                  fontSize: 12,
                }}
              >
                $ {stock.price.toFixed(2)}
              </Text>
            </View>
            <View
              style={{ 
                width :"25%",
                height: 70, 
                paddingTop: 12, 
                borderRightColor: "white", 
                padding:10,

                borderRightWidth: 1, 
                borderRightColor: 'white',
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity:  0.15,
                shadowRadius: 1.00,
                elevation: 1,
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "800",
                  fontSize: 12,
                  textAlign: "center",
                  width : "100%",

                }}
              >
                {moment(stock.last_updated_utc).format('DD-MM-YYYY HH:mm:ss')}
              </Text>
            </View>
            
          </View>
          {longpress? (
            <>
              <StockBlock key = {stock.ticker}  props ={stock}/>
            </>
          ):(<></>)}
        </Pressable>
        
        </>
    )
  
}

export default StockListBlock
