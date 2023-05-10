import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Header } from './components/index.js';
import { theme } from './constants/theme.js';
import { Home, CalendarList } from './screens/index.js';
import { styles } from './styles.js';

export default function App() {
  const [events, setEvents] = useState(false);
  const [loaded] = useFonts({
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
  });
  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const onAddEvent = () => {
    setEvents(true);
  };
  const onNoEvents = () => {
    setEvents(false);
  };

  const headerTitle = events ? 'Your events:' : 'My Calendar';

  const Content = () =>
    events === false ? <Home onAddEvent={onAddEvent} /> : <CalendarList onNoEvents={onNoEvents} />;

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
