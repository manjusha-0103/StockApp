// StockList.js
import React, { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
//import { PinchGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';
import { fetchStocks } from "../services/polygonService";
import { getStockPrices, saveStockPrices } from "../services/stockServices";
import moment from 'moment';
import { Alert } from "react-native";

import StockListBlock from "./stockListBlock";

const StockList = (props) => {
  const scrollViewRef = useRef();

  
  console.log(props.props);
  const n = props;
  const [stocks, setStocks] = useState([]);
 

  
  const updateScrollView = () => {
    setTimeout(() => {
      scrollViewRef?.current?.scrollToEnd({ animated: true });
    }, 200);
  };

  useEffect(() => {
    const initializeStocks = async () => {
      try {
        
          const stockPrices = await getStockPrices();
          const fetchedStocks = await fetchStocks(n);
          
          const initializedStocks = fetchedStocks.map((stock) => ({
            ...stock,
            refreshInterval: Math.floor(Math.random() * (5 - 1 + 1) + 1),
            price: stockPrices[stock.ticker] || 0,
          }));

          setStocks(initializedStocks);
        
      } catch (error) {
        console.error("Error initializing stocks:", error.message);
      }
    };

    initializeStocks();
  }, [n]);

  useEffect(() => {
    
      updateScrollView();
      const updatePrices = setInterval(async () => {
        try {
          const updatedStocks = stocks.map((stock) => ({
            ...stock,
            price: stock.price + Math.random() - 0.5,
          }));
          setStocks(updatedStocks);
          await saveStockPrices(
            updatedStocks.reduce(
              (acc, stock) => ({ ...acc, [stock.ticker]: stock.price }),
              {}
            )
          );
        } catch (error) {
          console.error("Error updating prices:", error.message);
        }
      }, 1000);

      return () => clearInterval(updatePrices);
    
  }, [stocks]);

  return (
    
    <ScrollView
      ref={scrollViewRef}
      bounces={false}
      showsVerticalScrollIndicator={false}
      
    >
      {stocks.map((stock, i) => (
        <>  
          <StockListBlock key = {i} props ={stock}/>
        
        </>   
      ))}
    </ScrollView>
   
  );
};

export default StockList;


