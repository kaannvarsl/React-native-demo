import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (

  <SafeAreaView style={styles.container}>
    <View>
  <Text style ={{textAlign:"center",fontSize:25,fontWeight:"bold"}}>Welcome!</Text>
  </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Giriş Yap"
        color="#FF8C00"
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Kayıt ol"
        color="#FF8C00"
      />
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },


});

export default App;