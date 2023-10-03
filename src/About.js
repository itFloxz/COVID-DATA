import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View , StyleSheet,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const About = ({navigation}) => {
    return(
                <ScrollView style = {styles.container}>
                    <Image
                        source= {require("../src/img/IMG_7038.jpg")}
                        style = {{width: 160,height:160,borderRadius:200,left:120}}
                        />
                    <Text style ={styles.container1}>
                        Mr. Sorrawit Nuernuam 6421604927
                    </Text>
                    <Image
                        source = {require("../src/img/image.png")}
                        style = {{width: 160,height:160,borderRadius:200,left:120}}
                        />
                    <Text style ={styles.container1}>
                    Mr. Pasin Sangjun     6421600191
                    </Text>

                    <Image
                        source={require("../src/img/fox.jpg")}
                        style = {{width: 160,height:160,borderRadius:200,left:120}}
                        />
                    <Text style ={styles.container1}>
                    Mr. Wichayaut Burong  6421602495
                    </Text>
                    <Image
                        source={require("../src/img/image1.png")}
                        style = {{width: 160,height:160,borderRadius:200,left:120}}
                        />
                    <Text style ={styles.container1}>
                        Mr. Napat Charoinsilp 6421602444
                    </Text>
                    </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#5B9A8B',
        padding: 10,
    },
    container1: {
        fontSize: 20,
        backgroundColor: '#3A3845',
        fontWeight:'bold',
        padding: 10,
        color:'#fff',
        borderRadius: 10,
        margin:5,
    },
});

export default About;