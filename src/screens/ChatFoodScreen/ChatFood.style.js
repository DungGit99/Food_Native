import {Colors} from '../../constants/Colors';
import Dimensions from '../../constants/Dimensions';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        // fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Dimensions.setWidth(80),
        textAlign: 'center',
    },
    sendButton: {
        // height: 36,
        // width: 36,
        // backgroundColor: Colors.DEFAULT_ORANGE,
        borderRadius: 18,
        marginRight: 5,
        marginBottom: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    customtInputToolbar: {
        backgroundColor: Colors.LIGHT_GREY,
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        paddingTop: 6,
        marginHorizontal: 6,
        borderRadius: 32,
        borderTopColor: 'transparent',
    },
    customtInputToolbar_smile: {
        backgroundColor: Colors.DEFAULT_ORANGE,
        borderRadius: 18,
        marginBottom: 12,
        marginLeft: 10,
    },
    customDay: {
        textAlign: 'center',
        fontSize: 12,
    },
});

export default styles;
