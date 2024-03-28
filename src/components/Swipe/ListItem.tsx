import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerProps } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { TaskInterface } from './Swipe';
interface ListItemProps
    extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
    task: TaskInterface;
    onDismiss?: (task: TaskInterface) => void;
}
const LIST_ITEM_HEIGHT = 70;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;
// console.log(TRANSLATE_X_THRESHOLD);
const ListItem: React.FC<ListItemProps> = ({ task }) => {

    const translateX = useSharedValue(0);
    const itemHieght = useSharedValue(LIST_ITEM_HEIGHT);
    const marginVertical = useSharedValue(10);
    const opacity = useSharedValue(1);

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
        onActive: e => {
            translateX.value = e.translationX;
            console.log(translateX.value);
        },
        onEnd: () => {
            if (translateX.value < TRANSLATE_X_THRESHOLD) {
                translateX.value = withTiming(-SCREEN_WIDTH);
                itemHieght.value = withTiming(0);
                marginVertical.value = withTiming(0);
                opacity.value = withTiming(0);
            } else {
                translateX.value = withTiming(0);
            }
        },
    });
    const rStyle = useAnimatedStyle(() => ({
        transform: [{
            translateX: translateX.value,
        }],
    }));
    const rIconContainerStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(translateX.value < TRANSLATE_X_THRESHOLD ? 1 : 0),
        };
    });
    const rTaskContainerStyle = useAnimatedStyle(() => {
        return {
            height: itemHieght.value,
            marginVertical: marginVertical.value,
            opacity: opacity.value,
        };
    });
    return (
        <Animated.View style={[styles.taskContainer, rTaskContainerStyle]}>
            <Animated.View style={[styles.iconContainer, rIconContainerStyle]}>
                <Ionicons
                    name="trash-outline"
                    size={LIST_ITEM_HEIGHT * 0.4}
                    color={Colors.DEFAULT_ORANGE}
                />
            </Animated.View>
            <PanGestureHandler onGestureEvent={panGesture}>
                <Animated.View style={[styles.task, rStyle]}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                </Animated.View>
            </PanGestureHandler>

        </Animated.View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    taskContainer: {
        // flex: 1,
        width: '100%',
        alignItems: 'center',
        // marginVertical: 10,
    },
    task: {
        width: '90%',
        height: 70,
        backgroundColor: '#fff',
        marginVertical: 10,
        justifyContent: 'center',
        paddingLeft: 20,
        // borderRadius: 10,
        // Shadow for iOS
        shadowOpacity: 0.08,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowRadius: 10,
        // Shadow for Android
        elevation: 5,

    },
    taskTitle: {
        fontSize: 16,
    },
    iconContainer: {
        height: LIST_ITEM_HEIGHT,
        width: LIST_ITEM_HEIGHT,
        position: 'absolute',
        right: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
