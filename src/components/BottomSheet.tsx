import BottomSheetModal, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import React, { forwardRef, useCallback, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
    // console.log(props);
    const snapPoints = useMemo(() => ['50%'], []);
    const renderBackdrop = useCallback(
        props => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                {...props}
            />
        ),
        []
    );

    return (
        // <BottomSheetModalProvider>
        //     <View style={styles.container}>
        <BottomSheetModal
            backdropComponent={renderBackdrop}
            ref={ref}
            enablePanDownToClose={true} // kéo bottom sheet xuống
            handleIndicatorStyle={{ backgroundColor: Colors.DEFAULT_ORANGE }}
            snapPoints={snapPoints}
        >
            <View style={styles.contentContainer}>
                <Text onPress={() => props.navigation.navigate('map')}>Awesome 🎉</Text>
            </View>
        </BottomSheetModal>
        //     </View>
        // </BottomSheetModalProvider>
    );
});

export default BottomSheet;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 24,
        // zIndex: -10,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
