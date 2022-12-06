import { StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

function Title({ children }: { children?: string }): JSX.Element {
  return <Text style={sytles.title}>{children}</Text>;
}

const sytles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWieght: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
});

export default Title;
