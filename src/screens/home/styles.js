import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    marginTop: 50,
  },
  noEventsText: {
    fontFamily: 'Nunito-Medium',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    fontFamily: 'Nunito-Regular',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
