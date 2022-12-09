import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/colors';

function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
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
});
export default Card;
