// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StyleSheet, Text, View, RNSVGSvgViewAndroid } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { UserIcon, AdjustmentsHorizontalIcon, ChevronDownIcon, ViewfinderCircleIcon, SparklesIcon, SettingsIcon, CogIcon } from "react-native-heroicons/outline";
import { SparklesIcon, ArrowDownLeftIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import { SvgXml } from 'react-native-svg';
// import paymentIcon from '../assets/paymentIcon.svg';



const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <View >



        <Text style={styles.payment_logo} className='pt-3.5 px-3.5'>
         
          <ArrowLeftIcon style={styles.circle} color="#00CCBB" />
          Payment</Text>


        

        <View style={styles.charges}>
          <Text style={styles.charges_type} >Investment money</Text>
          <Text style={styles.charges_amount} >Rs. 100</Text>

        </View>

      </View>
    </SafeAreaView>

  );
};

export default PaymentScreen;

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#101010',
    // background: '',
    color: '#ffffff',
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%",
  },


  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  payment_logo: {
    // backgroundColor: 'yellow',
    color: '#9AF444',
    fontSize: 35,
  },

  charges: {

    // backgroundColor: 'red',
    // color: '#ffffff',
    display: "flex",
    marginLeft: 20,
    // justifyContent: "center",
    // alignItems: "center",
    // height: "100%",
    // width: "100%",'
    // flexDirection: 'row',
  },

  charges_type: {
    color: '#FF0084',
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },

  charges_amount: {
    // backgroundColor: 'blue',
    color: '#DFDEDF',
    fontSize: 20,
    // fontWeight: 'bold',
  },
});
