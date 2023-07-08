// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity,  StyleSheet, Text, View, RNSVGSvgViewAndroid } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { UserIcon, AdjustmentsHorizontalIcon, ChevronDownIcon, ViewfinderCircleIcon, SparklesIcon, SettingsIcon, CogIcon } from "react-native-heroicons/outline";
import { SparklesIcon, ArrowDownLeftIcon, ArrowLeftIcon } from "react-native-heroicons/outline";
import { SvgXml } from 'react-native-svg';
// import paymentIcon from '../assets/paymentIcon.svg';


const handlePayNow = () => {
  console.log("Pay Now!!");
};


const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      {/* <View > */}



      {/* <View className='px-2.5 flex-row'>
          <ArrowLeftIcon color="#00CCBB" className='flex-row flex-1' size={35} />
          <Text style={styles.payment_logo} className=''>

            Payment</Text>
        </View> */}
      <View className='flex-row items-center mb-16'>
        <View className=' ml-6 '>

          <ArrowLeftIcon color="#00CCBB" size={35} />
        </View>
        <Text style={styles.paymentLogo} className='text-center'>
          Payment
        </Text>
      </View>











      <View style={styles.charges}>
        <Text style={styles.charges_type} >Investment money</Text>
        <Text style={styles.charges_amount} >Rs. 100</Text>

      </View>
      <View style={styles.charges}>
        <Text style={styles.charges_type} >Added Charges</Text>
        <Text style={styles.charges_amount} >Rs. 10</Text>

      </View>
      <View style={styles.charges}>
        <Text style={styles.charges_type} >Total Payable Amount</Text>
        <Text style={styles.charges_amount} >Rs. 110</Text>

      </View>

      <View >
        <TouchableOpacity className='self-center' style={styles.button} onPress={handlePayNow}>
          <Text style={styles.buttonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>

{/* 
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>

      </View> */}
      {/* </View> */}
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
    paddingTop: 15,
    height: "100%",
  },



  paymentLogo: {
    // backgroundColor: 'yellow',
    color: '#9AF444',
    fontSize: 35,
    // backgroundColor: 'skyblue',
    // flex: 1,
    // textAlign: 'center',
    paddingLeft: 54,
  },

  charges: {

    // backgroundColor: 'red',
    // color: '#ffffff',
    display: "flex",
    marginLeft: 20,
    // color: '#FF0084',
    fontFamily: 'BeVietnamPro-Regular',
    // fontSize: 20,
    // fontStyle: 'normal',
    // fontWeight: '400',
    // lineHeight: 24,
    marginBottom: 37,
    // backgroundColor: 'green',
  },

  charges_type: {
    color: '#FF0084',
    fontFamily: 'BeVietnamPro-Regular',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 34,

  },

  charges_amount: {
    // backgroundColor: 'blue',
    color: '#DFDEDF',
    fontSize: 26,
    // fontWeight: 'bold',
  },

  button: {

    fontWeight: "bold",
    borderRadius: 5,
    backgroundColor: "#9af444",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 150,



    borderWidth: 2,
    borderColor: '#B5FF6D',
    shadowColor: '#000',
    shadowOffset: { width: 7, height: 7 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    
    
  },
  buttonText: {
    color: '#101010',
    textAlign: 'center',
    fontFamily: 'Brygada 1918',
    fontSize: 20,
    letterSpacing: 0.5,
    fontWeight: '600',
    // lineHeight: 16,
  },



});
