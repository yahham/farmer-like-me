import { Image, StyleSheet, Text, View } from "react-native";

import Logo from "../assets/images/flm-logo.png";

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />

            <Text style={styles.title}>Farmer Like Me</Text>

            <Text style={{ marginTop: 10, marginBottom: 30 }}>
                Growing Together
            </Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0dfe8",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        marginVertical: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
