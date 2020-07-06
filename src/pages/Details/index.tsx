import React from 'react';
import { View, StyleSheet, Image, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { SvgUri } from 'react-native-svg';
import * as Progress from 'react-native-progress';
Icon.loadFont();
const BookDetails = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/background-img.png')}
        imageStyle={styles.imgBackground}
        style={styles.container}
      >
        <View style={styles.main}>
          <TouchableOpacity onPress={handleNavigateBack}>
            <Icon
              name="x"
              size={35}
              color="#EA3F30"
              style={{ paddingLeft: 15 }}
            />
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
              <SvgUri
                style={styles.progressBarImg}
                width={30}
                height={30}
                uri="https://image.flaticon.com/icons/svg/1538/1538958.svg"
              />
              <Progress.Bar
                progress={0.9}
                width={200}
                height={20}
                style={styles.progressBar}
                color={'#58A700'}
              />
              <SvgUri
                style={styles.progressBarImg}
                width={30}
                height={30}
                uri="https://image.flaticon.com/icons/svg/616/616541.svg"
              />
            </View>
            <Text style={styles.titleText}>O pequeno príncipe</Text>
            <Text style={styles.contentText}>Pagina 90 de 96 - 92%</Text>
            <View style={styles.selectCard}>
              <TouchableOpacity style={styles.buttonCard}>
                <Text
                  style={{
                    color: '#FFAB35',
                    fontFamily: 'RockoFLF-Bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                >
                  Ler sozinha
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCard}>
                <Text
                  style={{
                    color: '#255FA9',
                    fontFamily: 'RockoFLF-Bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                >
                  Leia comigo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCard}>
                <Text
                  style={{
                    color: '#F95152',
                    fontFamily: 'RockoFLF-Bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                >
                  Ranking
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonCard}>
                <Text
                  style={{
                    color: '#4CD1C3',
                    fontFamily: 'RockoFLF-Bold',
                    textAlign: 'center',
                    fontSize: 20,
                  }}
                >
                  Conquistas
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.footerCard}>
                <Text style={styles.footertext}>Sinopse</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    marginTop: 500,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  imageContainer: {
    paddingTop: 0,
    alignItems: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
  },
  progressBar: {
    borderRadius: 15,
    backgroundColor: '#E5E5E5',
    borderWidth: 0,
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  progressBarImg: {
    padding: 10,
  },
  main: {
    paddingTop: 20,
    paddingLeft: 0,
  },
  selectCard: {
    width: 300,
    height: 260,
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 10,
    backgroundColor: '#4A9579',
    padding: 10,
  },
  footerCard: {
    marginTop: 20,
    width: 350,
    height: 250,
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 10,
    backgroundColor: '#45D0C1',
  },
  footertext: {
    paddingVertical: 20,
    fontSize: 25,
    fontFamily: 'RockoFLF-Bold',
    color: '#FFF',
    textAlign: 'center',
  },
  buttonCard: {
    borderRadius: 60,
    textAlign: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    margin: 5,
  },
  cardText: {
    fontFamily: 'RockoFLF-Bold',
    textAlign: 'center',
    fontSize: 20,
  },
  titleText: {
    fontFamily: 'RockoFLF-Bold',
    color: '#1453A3',
    fontSize: 20,
  },
  contentText: {
    fontFamily: 'RockoFLF-Bold',
    color: '#45D0C1',
    fontSize: 15,
    marginBottom: 5,
  },
});
