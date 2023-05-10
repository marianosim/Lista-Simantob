import { View, Text, Button } from 'react-native';

import { styles } from './styles';
import { theme } from '../../constants';

const Home = ({ onAddEvent }) => {
  const onHandlerEventsAdded = () => {
    onAddEvent();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.noEventsText}>You have no events!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Add one here"
          onPress={onHandlerEventsAdded}
          color={theme.colors.secondary}
        />
      </View>
    </View>
  );
};

export default Home;
