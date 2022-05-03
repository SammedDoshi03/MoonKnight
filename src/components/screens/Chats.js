import React from 'react'

// import { Input } from '@ui-kitten/components';
import { StyleSheet,  ScrollView } from 'react-native';
import {Divider, Card, Layout, Icon, Input, Text, Button,  Avatar, MenuItem, OverflowMenu } from '@ui-kitten/components';
import Message from './Messages'
import { SmileIcon , AttachmentIcon, SendIcon } from '../Icons' 
import { styles } from '../../assests/styles';

import { Dimensions } from 'react-native';
import HeaderComponent from '../HeaderComponent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Chats = (props) => {

    const { navigation  } = props;

    const [value, setValue] = React.useState('');

    const Item = ({ msg }) => (
    <Card style={styles.card} status='primary'>
        <Text>{msg}</Text>
    </Card>
    );
         
    return (
        <>
        <Layout style={styles.mainContainer}>
            <HeaderComponent navigation={props.navigation}/>
        
        
            <Layout style={styles.cardContainer} level='4'>
                <ScrollView>
                    <Message/>
                </ScrollView> 
            </Layout>

            <Layout
             style={
                 [
                     styles.messageContainer,
                        
                ] 
            }
             >
                <Layout style={styles.layout} level='2'>
                    <Input
                        //  <Icon  name={eye-off' : 'eye'}/>
                        placeholder='Messsage'
                        // icon='search-outline'
                        value={value}
                        accessoryLeft={SmileIcon}
                        // accessoryRight= {AttachmentIcon}
                        style={styles.input}
                        // autoFocus={true}
                        onChangeText={nextValue => setValue(nextValue)}
                    />
                </Layout>
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryLeft={AttachmentIcon}
                />
                <Button
                    style={styles.button}
                    appearance='ghost'
                    accessoryLeft={SendIcon}
                />
            </Layout>
        </Layout>
        </>
    )
}

export default Chats;

