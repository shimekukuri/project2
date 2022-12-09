import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/colors';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [isGameOver, setIsGameOver] = useState(false);

  const pickedNumberHandler = (pickedNumber: string | undefined): string => {
    if (typeof pickedNumber === 'undefined') {
      return '';
    }
    setUserNumber(Number.parseInt(pickedNumber));
    return '';
  };

  const gameIsOverHandler = () => {
    setIsGameOver((prev) => !prev);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameIsOverHandler} />
    );
  }

  if (isGameOver) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootSceen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        style={styles.rootSceen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootSceen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootSceen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
