import { StyleSheet, Dimensions} from "react-native";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width - 30,
        borderBottomColor: '#324784',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      text: {
        flex: 1,
        fontSize: 18,
        marginVertical: 15,
        textAlign: "left",
        alignSelf: 'flex-start'
      },
});
