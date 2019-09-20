
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Fonts } from './src/utils/font';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ alignItems:'center', justifyContent:'center',flex:1}}>
        <Text style={{ fontSize:40}}>FONT DEMO</Text>
         <Text style={styles.text}>Chilanka Font</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.Pacifico}]}>Pacifico Font</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.LobsterReg}]}>Lobster regular</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.VollkornSCReg}]}>VollkornSC Regular</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.VollkornSCBold}]}>VollkornSC Bold</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.VollkornSCSemiBold}]}>VollkornSC Semi</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.DancingScriptReg}]}>Dancing Script Regular</Text>
         <Text style={[styles.text2,{fontFamily:Fonts.DancingScriptBold}]}>Dancing Script Bold</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize:30,
    fontFamily: Fonts.Chilanka,
  },
  text2:{
    fontSize:25,
    //fontFamily: Fonts.Pacifico,
  }
});

export default App;
