import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Platform } from 'react-native';

function HomeMenuButton({ navigation, name, route }) {
    return (
        <TouchableHighlight style={styles.item_menu} underlayColor="#5C8C91" onPress={() => navigation.push(route)}>
            <Text style={styles.small_text}>{name}</Text>
        </TouchableHighlight>
    );
}

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title_section}>
                <Text style={styles.title}>My application !</Text>
                <Text style={styles.small_text}>Select a screen</Text>
            </View>
            <View style={styles.menu_section}>
                <View style={styles.screens_section}>
                    <HomeMenuButton navigation={navigation} name="Todo List" route="Todo"></HomeMenuButton>
                    <HomeMenuButton navigation={navigation} name="Screen A" route="Home"></HomeMenuButton>
                    <HomeMenuButton navigation={navigation} name="Screen B" route="Home"></HomeMenuButton>
                </View>
                <View style={styles.screens_section}>
                    <HomeMenuButton navigation={navigation} name="Screen C" route="Home"></HomeMenuButton>
                    <HomeMenuButton navigation={navigation} name="Screen D" route="Home"></HomeMenuButton>
                    <HomeMenuButton navigation={navigation} name="Screen E" route="Home"></HomeMenuButton>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        backgroundColor: "#D4FBFF"
    },
    title_section: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#5C8C91"
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    small_text: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    menu_section: {
        flex: 5,
        flexDirection: 'row'
    },
    screens_section: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginHorizontal: 10
    },
    item_menu: {
        backgroundColor: "#A2D9DF",
        paddingHorizontal: 20,
        paddingVertical: 40,
        borderRadius: 20
    }
});
