import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import Note from "./Notes";

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNote = this.addNote.bind(this)
    }

    handleChange(event) {
        this.setState({ noteText: event.target.value })
    }

    addNote() {
        if (this.state.noteText) {

            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                'note': this.state.noteText

            });
            this.setState({ noteArray: this.state.noteArray })
            this.setState({ noteText: '' })
        }
    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })

    }
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)}
            />

        })
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}> - NOTER</Text>
                </View>

                <ScrollView style={styles.scrollContanier}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>

                    <TextInput style={styles.textInput}
                        value={this.state.noteText}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        placeholder='>note'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>

                    </TextInput>

                </View>

                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>

            </View>
        );

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    Scrollcontainer:
    {
        flex: 1,
        marginBottom: 100,
    },
    footer:
    {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput:
    {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton:
    {
        position: 'absolute'
        , zIndex: 11,
        right: 20,
        bottom: 20,
        backgroundColor: '#E91E63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText:
    {
        color: '#fff',
        fontSize: 24,
    }
})




export default Main;
