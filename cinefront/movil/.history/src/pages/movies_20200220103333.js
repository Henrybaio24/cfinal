import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { Link } from "react-router-native";
import { Card } from 'react-native-elements';
import axios from 'axios';

//const API = "http://192.168.1.11:5000/film/pelicula";
// const API = "http://192.168.43.44:5000/film/pelicula";
const API = "http://192.168.0.104:5000/film/pelicula";

// https://aboutreact.com/example-of-sqlite-database-in-react-native/

export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    componentDidMount() {
        axios.get(API)
            .then(response => {
                this.setState({ peliculas: response.data.datos })
            })
            .catch(error => {
                console.log(error)
            })
    }

    asyncstorageSave = async (idpelicula) => {
        try {
          await AsyncStorage.setItem('idpelicula', idpelicula.toString())
        } catch (err) {
          alert(err)
        }
    }

    render() {
        const { peliculas } = this.state
        return ( 
            
                <View style = { styles.overlayContainer } >
                    <View style = { styles.top } >
                        <Text style = { styles.header } > CARTELERA </Text>   
                    </View >

                    <ScrollView vertical = { true } > 
                    {
                        peliculas.map(element =>
                            <Link to = "/movie_detail" key = { element.id } onPress={ () => this.asyncstorageSave(element.id) }>
                                <Card title = { element.titulo } image = { {uri: `${element.imagen}` } } />  
                            </Link >
                        )
                    } 
                    </ScrollView>  
                </View > 
        )
    }
}

const styles = StyleSheet.create({
    container: {
 
        width: '150%',
        height: '100%',
    },
    
    top: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
      
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,

    },
    menuContainer: {

        // flexDirection: 'row',
        // flexWrap: 'wrap',
    }
})