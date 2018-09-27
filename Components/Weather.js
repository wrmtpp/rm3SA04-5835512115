import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Forecast from "./Forecast";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.APPID = "886705b4c1182eb1c69f28eb8c520e20";
        this.state = {
            forecast: {
                main: "main",
                description: "description",
                temp: 0
            }
        };
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }
    componentDidMount = () => this.fetchData();

    fetchData = () => {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${
            this.props.zipCode
            },th&units=metric&APPID=${this.APPID}`
        )
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    }
                });
            })
            .catch(error => {
                console.warn(error);
            });
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
                    <View style={styles.app}>
                        <Text style={styles.font}>Code : {this.props.zipCode}.</Text>

                        <Forecast {...this.state.forecast} />

                    </View>
                    <Text style={styles.fontName}> </Text>
                    <Text style={styles.fontName}>                                       by </Text> //change font
                    <Text style={styles.fontName}>                     Mr.Woramet Prompen</Text>     //change font
                    <Text style={styles.fontName}>                           ID : 5835512115</Text>     //change font
                </ImageBackground>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: "100%", height: "100%" },
    app: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ADD8E6" //change bg color
    },
    font: { //change font color
        font: "center",
        color: "black", 
        paddingTop: 25,
        fontSize: 30
    },
    fontName: { //change font color
        color: 'black', 
        paddingTop: 40,
        fontSize: 20

    }

});