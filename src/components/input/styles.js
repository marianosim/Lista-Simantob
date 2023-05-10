import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'Nunito-Regular',
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
    color: theme.colors.text,
  },
});
