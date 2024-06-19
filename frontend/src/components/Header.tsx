import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
    const auth = useAuth();
    console.log('Rendering Header Component', auth);
    return (
        <>
            <AppBar sx={{ bgcolor: "transparent", position: "static" }}>
                <Toolbar sx={{ display: "flex" }}>
                    <Logo />
                    <div>
                        {auth?.isLoggedIn ? (
                            <>
                                <NavigationLink
                                    bg="#00fffc"
                                    to="/chat"
                                    text="Go To Chat"
                                    textColor="black"
                                />
                                <NavigationLink
                                    bg="#51538f"
                                    to="/logout"
                                    text="Logout"
                                    textColor="white"
                                    onClick={auth.logout}
                                />
                            </>
                        ) : (
                            <>
                                <NavigationLink
                                    bg="#00fffc"
                                    to="/login"
                                    text="Login"
                                    textColor="black"
                                />
                                <NavigationLink
                                    bg="#51538f"
                                    to="/signup"
                                    text="Signup"
                                    textColor="white"

                                />
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
