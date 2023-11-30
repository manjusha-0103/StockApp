import React, { useState, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import StockList from "../component/StockList";
import { Alert } from "react-native";

function Home() {
  const [onpress, setOnPress] = useState(false);
  const [stockNumber, setstockNumber] = useState();

  const handleOnpress = () => {
    try {
      setOnPress(false);
      setstockNumber(null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetLongPress = ()=>{
    try{
      if(isNaN(stockNumber)){
        Alert.alert("Enter valid Value(i.e. a number)")
      }
      else{
        setOnPress(true)
      }
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <SafeAreaView
      style={{
        marginTop: 20,
        backgroundColor: "#e8e9eb",
        paddingTop: 10,
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "10%",
          backgroundColor: "#748aed",
          height: 70,
          width: "100%",
          marginBottom: 10,
          shadowColor: "#0f0bde",
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.21,
          shadowRadius: 7.68,
          elevation: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "900",
          }}
        >
          {" "}
          WATCH STOCKS{" "}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#dcdff7",
          width: "100%",
          height: "88%",
          flexDirection: "column",
          position: "fixed",
          paddingVertical: 10,
          paddingHorizontal: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            marginVertical: 10,
            fontSize: 18,
          }}
        >
          Enter the Number of Stocks
        </Text>
        <View
          style={{
            width: 300,
            height: 50,
            marginVertical: 5,
          }}
        >
          <TextInput
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#fafafc",
              borderRadius: 10,
              paddingHorizontal: 20,
              fontSize: 20,
              fontWeight: "600",
              color: "#a9a9ab",
            }}
            value={stockNumber}
            onChangeText={(t) => setstockNumber(t)}
          />
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#3c5ade",
              borderRadius: 5,
            }}
          >
            <TouchableOpacity
              style={{
                width: 150,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={()=>handleSetLongPress()}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                SET NUMBER OF STOCKS
              </Text>
            </TouchableOpacity>
          </View>
          {onpress && (
            <View
              style={{
                width: 120,
                height: 50,
                backgroundColor: "#f09892",
                borderRadius: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={()=>handleOnpress()}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "800",
                    fontSize: 20,
                  }}
                >
                  STOP
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            width: "100%",
            height: "74%",
            backgroundColor: "white",
            marginBottom: 20,
            paddingBottom: 10,
            marginTop: 10,
            
          }}>
          {onpress ? (
            <View
              style={{
                width: "100%",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  backgroundColor: "#090491",
                  marginBottom: 10,
                  
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: 50,
                    borderRightColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderRightColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Name
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    height: 50,
                    borderRightColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderRightColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Ticker
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    height: 50,
                    borderRightColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderRightColor: "white",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Price
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    height: 50,
                    display: "flex",
                    justifyContent: "center",
                    paddingHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "800",
                      fontSize: 15,
                      textAlign: "center",
                    }}
                  >
                    Last Updated
                  </Text>
                </View>
              </View>
              <StockList props={stockNumber} />
            </View>
            ) : (
            <>
              <View
                style={{
                  width: "75%",
                  height: "fit-content",
                  
                  paddingTop : 30,
                  marginLeft : 10
                 
                }}
              >
                <Image
                  source={{uri : 'https://i.gifer.com/Agmh.gif'}}
                  style={{
                    width: 380,
                    height: "100%",
                    overflow: "visible",
                  }}
                />
              </View>
            </>)
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
//<StockList props = {stockNumber}/>
