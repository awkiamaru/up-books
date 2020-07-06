import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { SvgUri } from 'react-native-svg';

Icon.loadFont();
const BookDetails = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="x" size={35} color="#EA3F30" />
        </TouchableOpacity>
        <SvgUri
          width="30%"
          height="40%"
          uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
        />
      </View>
    </>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20,
  },
});
