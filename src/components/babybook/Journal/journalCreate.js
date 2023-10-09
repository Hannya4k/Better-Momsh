import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../../commonStyles';
import { useJournal } from './journalContext';
// import ImagePicker from 'react-native-image-picker';

const JournalCreate = () => {
    const navigation = useNavigation();
    // const { addEntry } = route.params;
    const { addEntry } = useJournal();
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    // const [selectedImage, setSelectedImage] = useState(null);
    

    useEffect(() => {
        const now = new Date();
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const formattedDate = `${now.getDate()} ${monthNames[now.getMonth()]} ${now.getFullYear()}`;
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

        const fullDateTime = `${formattedDate}, ${formattedTime}`;
        setCurrentDateTime(fullDateTime);
    }, []);

    const handleSave = () => {

        addEntry(title, currentDateTime, note);

        navigation.navigate('Journal');
    };

    // const handleImageSelect = () => {
    //     // Configure image picker options
    //     const options = {
    //       mediaType: 'photo', // Specify the media type you want to allow (photo or video)
    //     };
    
    //     // Show the image picker dialog
    //     ImagePicker.launchImageLibrary(options, (response) => {
    //       if (response.didCancel) {
    //         // User canceled image selection
    //       } else if (response.error) {
    //         // Handle any errors that occurred during image selection
    //         console.error('ImagePicker Error: ', response.error);
    //       } else {
    //         // Image selected successfully, update the selectedImage state
    //         setSelectedImage({ uri: response.uri });
    //       }
    //     });
    //   };

    return (
        <ScrollView>
            <View style={commonStyles.container}>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => navigation.navigate('Journal')}>
                        <Icon name="arrow-left" type="entypo" size={30} color="#517fed" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Icon name="undo-variant" type="material-community" size={30} color="#517fed" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Icon name="redo-variant" type="material-community" size={30} color="#517fed" />
                    </TouchableOpacity>
                    {/* save button */}
                    <TouchableOpacity style={styles.btn} onPress={handleSave}>
                        <Icon name="check" type="Octicons" size={30} color="#517fed" />
                    </TouchableOpacity>
                </View>


                <View style={styles.textContainer}>
                    <TextInput
                        style={styles.headerInput}
                        placeholder='Add Title'
                        onChangeText={text => setTitle(text)}
                    />

                    <Text style={styles.date}>{currentDateTime}</Text>

                    <TextInput
                        style={styles.pInput}
                        placeholder='Note'
                        multiline={true}
                        onChangeText={text => setNote(text)}
                    />

                    {/* <TouchableOpacity style={styles.img} onPress={handleImageSelect}>
                    <Text>image</Text>
                    </TouchableOpacity>

                    {selectedImage && (
          <Image source={selectedImage} style={{ width: 200, height: 200 }} />
        )} */}
                </View>
            </View>
        </ScrollView>
    )

}

export default JournalCreate

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        marginTop: 50,
    },
    backBtn: {
        marginRight: 200
    },
    btn: {
        marginLeft: 20,
    },
    headerInput: {
        fontSize: 32,
        fontFamily: 'Lato-Bold',
        fontWeight: '700',
        width: 350,
        height: 56,
        paddingBottom: 5,
        marginTop: 10,
    },
    date: {
        fontSize: 12,
        marginLeft: 10
    },
    pInput: {
        marginTop: 10,
        // width: 350,
        fontSize: 12,
        fontFamily: 'Lato-Bold',
        fontWeight: '400',
        height: 660,
        textAlignVertical: "top",
        // borderWidth: 1
    },
    textContainer: {
        height: '100%',
        marginBottom: 10,
    },


})