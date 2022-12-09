import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

const generateRanDomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRanDomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: () => void;
}): JSX.Element => {
  const initialGuess = generateRanDomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);

  const nextGuessHandler = (direction: string): void => {
    if (currentGuess === userNumber) {
      return;
    }
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndnumber = generateRanDomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndnumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Oppenents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Title>Heigher or lower?</Title>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
