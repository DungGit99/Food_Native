import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { PressableScale } from './touchable-scale';
export type ContactInfo = {
  name: string;
  email: string;
};


const Skeleton = () => {
  const [contacts, setContacts] = useState<ContactInfo[] | undefined>();
  const fetchContacts = useCallback(async () => {
    setContacts(undefined);

    // fetch contacts from json placeholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // wait for 2000ms to simulate loading
    await new Promise(resolve => setTimeout(resolve, 5000));

    setContacts(data);
  }, []);
  useEffect(() => {
    fetchContacts();
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar />
      <FlatList
        data={contacts}
        ItemSeparatorComponent={() => {
          return (<View style={{ height: 1, width: '100%', backgroundColor: '#CED' }} />);
        }}
        renderItem={({ item, index }) => {
          return <View style={{ width: '100%', height: 120 }} />;
        }}
      />

      <PressableScale
        style={styles.floatingButton}
        onPress={() => {
          fetchContacts();
        }}>
        <Ionicons
          name="reload-outline"
          size={24}
          color={Colors.DEFAULT_ORANGE}
        />
      </PressableScale>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 64,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 32,
    backgroundColor: '#CED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Skeleton;


// flatList:  ItenSeparatorComponent, renderItem

//
