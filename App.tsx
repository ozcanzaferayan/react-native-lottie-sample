import React from 'react';
import LottieView from 'lottie-react-native';
import {SafeAreaView, StatusBar, StyleSheet, Text, Button} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.title}>Dosyalarızı saklayın</Text>
        <Text style={styles.subtitle}>
          Dosyalarınızı en iyi şifreleme yöntemleri ile güvenli bir şekilde
          bulut ağında saklayabilirsiniz.
        </Text>
        <LottieView
          style={styles.lottieView}
          source={require('./animations/16445-photo-files-upload.json')}
          autoPlay
          loop
        />
        <Button
          title="Yüklemeye başla"
          onPress={() => console.log('clicked')}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    margin: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: -50,
  },
  lottieView: {
    height: 300,
  },
});

export default App;
