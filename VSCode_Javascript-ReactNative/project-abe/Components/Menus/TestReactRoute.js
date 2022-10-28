import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link, Routes } from "react-router-native";

// const Home = () => {return(<Text style={styles.header}>Home</Text>)};
function Home(){
    return(
        <Text style={styles.header}>Home</Text>
    )
}


const About = () => <Text style={styles.header}>About</Text>;

const Topic = ({ match }) => (
    <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
    <View>
        <Text style={styles.header}>Topics</Text>
        <View>
            <Link
                to={`${match.url}/rendering`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
                <Text>Rendering with React</Text>
            </Link>
            <Link
                to={`${match.url}/components`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
                <Text>Components</Text>
            </Link>
            <Link
                to={`${match.url}/props-v-state`}
                style={styles.subNavItem}
                underlayColor="#f0f4f7"
            >
                <Text>Props v. State</Text>
            </Link>
        </View>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => (
                <Text style={styles.topic}>Please select a topic.</Text>
            )}
        />
    </View>
);

const TestReactRoute = () => (
    <NativeRouter>
        <View style={styles.container}>
            <View style={styles.nav}>
                <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                    <Text>Home</Text>
                </Link>
                <Link
                    to="/about"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}
                >
                    <Text>About</Text>
                </Link>
                <Link
                    to="/topics"
                    underlayColor="#f0f4f7"
                    style={styles.navItem}
                >
                    <Text>Topics</Text>
                </Link>
            </View>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={About} />
                <Route path="/topics" element={Topics} />
            </Routes>

        </View>
    </NativeRouter>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
});

//AppRegistry.registerComponent("MyApp", () => TestReactRoute);

export default TestReactRoute