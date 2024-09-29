// NumericKeyboard.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { greycolor, primarycolor, primarycolortwo } from '../../constants/color';
import { Textstyles } from '../../constants/fontsize';

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const NumericKeyboard = ({ onPress }) => {
  // Define the button values and layout
  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['0', '-', '*']
  ];

  const handleButtonPress = (value) => {
    onPress(value);
  };

  return (
    <View style={styles.container}>
        <View><Text style={[Textstyles.text_xsmall]}>Stulivery Numeric Pad</Text></View>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((button, buttonIndex) => (
            <TouchableOpacity
              key={buttonIndex}
              style={[
                styles.button,
                button === '-' ? styles.deleteButton : {},
                button === '*' ? styles.submitButton : {},
              ]}
              onPress={() => handleButtonPress(button)}
            >
              <Text style={styles.buttonText}>
                {button === '-' ? 'x' : button === '*' ? 'Submit' : button}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    width: width, // Make the keyboard responsive
    padding: 10,
  },
  row: {
    marginTop:10,
    flexDirection: 'row',
    width: '100%',
    gap:10,
    justifyContent:'center',
    alignItems:'center'

     // Ensure buttons are spaced evenly
  },
  button: {
    width: '30%', // Adjust width to fit in row with spacing
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: greycolor,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: greycolor,
  },
  submitButton: {
    backgroundColor: primarycolor,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    fontFamily:'TTFirsNeue',
    color: primarycolortwo,
  },
});

export default NumericKeyboard;
