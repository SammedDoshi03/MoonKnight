import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Avatar,Button, Divider, Icon, List, ListItem, TopNavigation, TopNavigationAction, OverflowMenu, MenuItem } from '@ui-kitten/components';
import { SearchIcon, BackIcon, SettingsIcon, MenuIcon } from './Icons';


const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const StarredMessages = (props) => {

    const { navigation  } = props;
    
    const navigateBack = () => {
        navigation.goBack();
    };
    
    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu}/>
      );

      const renderRightActions = () => (
        <React.Fragment>
          <TopNavigationAction icon={SearchIcon}/>
          <OverflowMenu
            anchor={renderMenuAction}
            visible={menuVisible}
            onBackdropPress={toggleMenu}>
            <MenuItem  title='Unstar All'/>
          </OverflowMenu>
        </React.Fragment>
      );
    
      const renderBackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
      );
    
      const renderItemAccessory = (props) => (
        <Button size='tiny'>View Message</Button>
      );
    
      const renderItemIcon = (props) => (
        <Avatar style={styles.avatar} size='medium' source={require('../assests/demo.png')}/>
      );
    
      const renderItem = ({ item, index }) => (
       
        <ListItem
          title={`${item.title} ${index + 1}`}
          description={`${item.description} ${index + 1}`}
          accessoryLeft={renderItemIcon}
          accessoryRight={renderItemAccessory}
        />
       
      );
    
      return (
        <React.Fragment>
          <TopNavigation
            // alignment='center'
            title='Starred Messages'
            accessoryLeft={renderBackAction}
            accessoryRight={renderRightActions}
            style={styles.topNavigation}
          />
          <Divider/>
          <List
            style={styles.container}
            data={data}
            renderItem={renderItem}
          />
        </React.Fragment>
    );
};
    

export default StarredMessages;


const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:10,
    },
    avatar: {
        margin: 8,
      },
      topNavigation: {  
        // height:50,
      },
});