import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import ListItem from './ListItem';

const TITLES = [
    '❤ ❤ ❤❤❤❤❤❤',
    'task 👍🏼 ',
    'React native',
    '🚀 🚀🚀🚀🚀🚀🚀🚀🚀',
    '⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️',
    'task 👍🏼 ',
    'task 👍🏼 ',
    'task 👍🏼 ',
    'task 👍🏼 ',
    'task 👍🏼 ',
];

export interface TaskInterface {
    title: string;
    index: number;
}

const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));

const Swipe = () => {
    const [tasks, setTasks] = useState(TASKS);
    const onDismiss = useCallback((task: TaskInterface) => {
        setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);
    const scrollRef = useRef(null);
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.title}>Swipe</Text>
                <ScrollView ref={scrollRef} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                    {tasks.map((task) => (
                        <ListItem
                            simultaneousHandlers={scrollRef}
                            key={task.index}
                            task={task}
                            onDismiss={onDismiss}
                        />
                    ))}
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>

    );
};

export default Swipe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: BACKGROUND_COLOR,
    },
    title: {
        fontSize: 60,
        marginVertical: 20,
        paddingLeft: '5%',
    },
});
