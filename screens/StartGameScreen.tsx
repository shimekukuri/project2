import { Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import { Colors } from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';

function StartGameScreen({
  onPickNumber,
}: {
  onPickNumber: (pickedNumber: string | undefined) => string;
}) {
  const [enteredNumber, setEnteredNumber] = useState<string | undefined>();

  const numberInputHandler = (e: string): void => {
    setEnteredNumber(e);
  };

  const confirmInputHandler = (): void => {
    if (typeof enteredNumber !== 'string') {
      return;
    }
    const choseNumber = Number.parseInt(enteredNumber);
    if (choseNumber <= 0 || choseNumber >= 99 || isNaN(choseNumber)) {
      Alert.alert(
        'Invalid data Type',
        'Please enter a number greater than 0 and less than 99,',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: setEnteredNumber('') as undefined,
          },
        ]
      );
      return;
    }

    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>

      <Card>
        <Text style={styles.instructionText}>Enter A Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType={'number-pad'}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => setEnteredNumber('')}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    //android styles
    elevation: 4,
    //IOS styles
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
