import { Text, View, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View>
      <PrimaryButton>
        <Text>test</Text>
      </PrimaryButton>
      <PrimaryButton>
        <Text>Test2</Text>
      </PrimaryButton>
    </View>
  );
}

export default StartGameScreen;
