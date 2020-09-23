import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

type Props = {
  repository: any;
  ModelSnifferDetails: any;
};

export const RepoCard = ({repository, ModelSnifferDetails}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  function pressedCard() {
    setModalVisible(!modalVisible);
  }

  return (
    <TouchableOpacity style={styles.repoCard} onPress={pressedCard}>
      <ModelSnifferDetails repository={repository} modalVisible={modalVisible} setModalVisible={() => setModalVisible(false)} />
      <View style={styles.cardLeft}>
        <View style={styles.leftHeader}>
          <Text numberOfLines={2} style={styles.headerName}>
            {repository.fullName}
          </Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.headerDescription}>
            {repository.description}
          </Text>
        </View>

        <View style={styles.leftContent}>
          <View style={styles.contentDetails}>
            <FontAwesome name="star" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.stargazersCount}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="code-fork" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.forks}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="bug" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.openIssues}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.rightRelease}>
          <Text style={styles.releaseTitle}>Last Release: </Text>
          <Text style={styles.releaseTag}>{repository.lastRelease}</Text>
        </View>
        <FontAwesome name="bell" color="#d4d4d4" size={30} />
      </View>
    </TouchableOpacity>
  );
};
