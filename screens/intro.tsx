import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  showRealAppFunc: React.Dispatch<boolean>;
}

interface SlidesProps {
  key: string;
  text: string;
  title: string; 
  icon: 'book' | 'search' | 'calendar-outline';
  backgroundColor: string;
}

interface SlidesPropsItems {
  item: SlidesProps
}


export default function Intro({ showRealAppFunc }: Props) {

  const onDone = () => {
    showRealAppFunc(true);
  };

  const onSkip = () => {
    showRealAppFunc(true);
  };
  
  const slides:SlidesProps[] = [
    {
      key: 's1',
      text: 'Complete seu pedido de ajuste da matrícula',
      title: 'Matrícula',
      backgroundColor: '#0059B3',
      icon: 'book',
    },
    {
      key: 's2',
      title: 'Lista de Oferta',
      text: 'Veja todas as matérias ofestadas no semestre',
      backgroundColor: '#00B359',
      icon: 'search',
    },
    {
      key: 's3',
      title: 'Histórico',
      text: 'Visualize o histórico de processamento',
      backgroundColor: '#48BEF0',
      icon: 'calendar-outline',
    },
  ];

  const RenderItem = ({ item } : SlidesPropsItems) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Ionicons name={item.icon} size={120} color="white" />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introTextStyle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
    },
    introTitleStyle: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onDone}
      showSkipButton={true}
      onSkip={onSkip}
    />
  );
};
