import React from 'react'
import {Divider, Card, Layout, Icon, Input, Text, Button,  Avatar, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { styles } from '../assests/styles';

const list = [
    // {
    //     "type": "isIndividual",
    //     "name": "John Doe",
    //     'profile': require('../assests/demo.png'),
    //     'status': 'online',
    // },
    {
        "type": "isGroup",
        "name": "Avengers",
        'profile': require('../assests/demo.png'),
        "members": ["ironman", "hulk", "thor", "captain america", "black widow"],
    },
]
const HeaderComponent = (props) => {
  
    const { navigation  } = props;

    const navigateDetails = () => {
      navigation.navigate('Starred Messages');
      };

    
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [visible, setVisible] = React.useState(false);
    
    const onItemSelect = (index) => {
    //   setSelectedIndex(index);
        console.log(index);
        setVisible(false);
    };

    const renderToggleButton = () => (
        <Button  
            onPress={() => setVisible(true)}
            style={styles.headerButton}
            appearance='ghost' 
            accessoryLeft={ <Icon name='more-vertical-outline'/>}>
        </Button>
        );

    return (
   
    <Layout style={styles.headerContainer} level='1'> 
        <Button style={styles.headerButton} appearance='ghost'  accessoryLeft={ <Icon name='arrow-ios-back-outline'/>}> </Button>
        <Layout style={styles.header}>
            <Avatar 
            style={styles.avatar} 
            size='giant' 
            source={require('../assests/demo.png')}
            
            />
        </Layout>
        <Layout style={styles.headerInfo}>
            <Text 
            category='h6' 
            onPress= {() => {
                list[0].type === 'isGroup' ? navigation.navigate('Group Profile') : {};
            }}
            > {list[0].name} </Text>
            {list[0].type === 'isGroup' ? <Text category='s1'> {list[0].members.length} Members </Text> : <Text appearance='hint'>online </Text>}
           
            </Layout>
        <Layout style={styles.headerRight}>
            <Button style={styles.headerButton} appearance='ghost'  accessoryLeft={ <Icon name='phone'/>}> </Button>
            <Button style={styles.headerButton} appearance='ghost'  accessoryLeft={ <Icon name='video'/>}> </Button>
            <OverflowMenu
                // appearance='noDivider'
                anchor={renderToggleButton}
                visible={visible}
                // backdropStyle={styles.backdrop}
                selectedIndex={selectedIndex}
                onSelect={onItemSelect}
                onBackdropPress={() => setVisible(false)}>
                <MenuItem title='View starred messages' anchor={navigateDetails} onPress={navigateDetails}/>
                <MenuItem title='Delete conversation'/>
            </OverflowMenu>
        </Layout>
    </Layout>
  )
}

export default HeaderComponent