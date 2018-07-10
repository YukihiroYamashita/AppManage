import React from 'react';

import { View, Text } from 'react-native';


const Header = (props) => {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.txtStyle}>{props.headerText}</Text>
      </View>
    );
};

const styles = {
  viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      elevation: 10,
      position: 'relative'
  },
  txtStyle: {
    fontSize: 20
  }
};

export { Header };
