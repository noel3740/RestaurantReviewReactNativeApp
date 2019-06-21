import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Image
}
    from 'react-native'

    import Stars from './Stars';

export default class RestaurantRow extends Component {

    state = {
        showInfo: false
    }

    infoPressed = () => {
        // this.setState(currentState => {

        //     return {
        //         showInfo: !currentState.showInfo
        //     };
        // });

        this.props.navigation.navigate('Info');
    }

    render() {

        const {
            place,
            index
        } = this.props;

        console.log(place.image);

        return (
            <View key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
                <View style={styles.row}>
                    <View style={styles.stars}>
                        <Stars rating={place.rating} />
                    </View>

                    <View style={styles.nameAddress}>
                        <Text style={styles.placeNameText} >{place.name}</Text>
                        <Text style={styles.addressText}>{place.address}</Text>
                    </View>

                    <View style={styles.edges}>
                        <TouchableHighlight
                            onPress={this.infoPressed}
                            underlayColor='#5398DC'
                            style={styles.button}>
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                {
                    this.state.showInfo &&
                    <View style={styles.info}>
                        <Text style={{
                           fontWeight: "bold",
                           marginBottom: 10
                        }}>Restaurant Info</Text>
                        <Image
                            source={{ 
                                uri: place.image
                             }}
                             style={{
                                 flex: 1,
                                 height: 100
                             }}
                             resizeMode="contain"
                        />
                    </View>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
    },
    stars: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        minWidth: 50
    },
    nameAddress: {
        flexDirection: 'column',
        flex: 8
    },
    addressText: {
        color: 'grey'
    },
    button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#fff'
    },
    buttonText: {
        color: '#0066CC',
        fontSize: 12
    },
    info: {
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    },
    placeNameText: {
        fontWeight: "bold"
    }
})