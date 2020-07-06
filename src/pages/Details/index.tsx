import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.thumbnail}
            source={{
              uri:
                'https://images.vexels.com/media/users/3/158004/isolated/preview/d0d467c0c649386636cd4505f265d107---cone-da---rvore-de-fruta-by-vexels.png',
            }}
          />
          <View style={styles.progressContainer}>
            <SvgUri uri="" />
          </View>
        </View>
      </View>
    </>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  imageContainer: {
    paddingTop: 20,
    alignItems: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
  },
});
