/* eslint-disable prettier/prettier */
import { Image, Text, TouchableOpacity } from 'react-native';
import { getFlagIcon } from '../../helper';
import { styles } from './styles';

export const FlagItem = ({ code, name, dial_code, onPress }: any) => {
  return (
    <TouchableOpacity
      style={styles.Flagcontainer}
      onPress={() => onPress({ code, name, dial_code })}>
      <Image
        style={styles.flagImage}
        source={{ uri: getFlagIcon(code) }}
      />
      <Text style={styles.flagText}>{dial_code}</Text>
      <Text style={styles.flagText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FlagItem;
