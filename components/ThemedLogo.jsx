import { Image, useColorScheme } from "react-native";

// logo
import Logo from "../assets/images/flm-logo.png";

const ThemedLogo = () => {
    const colorScheme = useColorScheme();

    const logo = colorScheme === "dark" ? Logo : Logo;

    return <Image source={logo} />;
};

export default ThemedLogo;
