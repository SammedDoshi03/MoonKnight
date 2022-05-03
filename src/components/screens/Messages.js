import React from 'react'
import { StyleSheet, View } from 'react-native';
import {Card, Text, OverflowMenu, MenuItem  } from '@ui-kitten/components';
import  SingleMessageComponet  from '../SingleMessageComponet'
import ReplyComponent from '../ReplyComponent';


const list = [
    {
        "msg": "hi",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:00",
        "conType": "individual"
    },
    {
        "msg": "hi",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:00",
        "conType": "individual"
    },
    {
        "msg": "how are you",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:01",
        "conType": "individual"
    },
    {
        "msg": "i am fine",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:01",
        "conType": "individual"
    },
    {
        "msg": "how are you",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:02",
        "conType": "individual"
    },
    {
        "msg": "i am fine",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:02",
        "conType": "individual"
    },
    {
        "msg": "how are you",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:03",
        "conType": "individual"
    },
    {
        "msg": "i am fine",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:03",
        "conType": "individual"
    },
    {
        "msg": "how are you",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:04",
        "conType": "individual"
    },
    {
        "msg": "i am fine",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:04",
        "conType": "individual"
    },
    {
        "msg": "how are you",
        "type": "recevier",
        "name": "John Doe",
        "time": "12:05",
        "conType": "individual"
    },
    {
        "msg": "i am fine",
        "type": "sender",
        "name": "Sam Doe",
        "time": "12:05",
        "conType": "individual"
    },
]

const GroupChatList = [
    {
        "msg": "hi",
        "type": "recevier",
        "name": "Iron Man",
        "time": "12:00",
        "conType": "Group"
    },
    {
        "msg": "hi",
        "type": "recevier",
        "name": "Captain America",
        "time":  "12:01",
        "conType": "Group"
    },
    {
        "msg": "hi",
        "type": "recevier",
        "name": "Hulk",
        "time":  "12:02",
        "conType": "Group"
    },
    {
        "msg": "hi",
        "type": "sender",
        "name": "You",
        "time":  "12:02",
        "conType": "Group"
    },
]



const Messages = (props) => {

      
    // const renderItem = (item, index) => (
    //     <Card style={styles.card} status="primary">
    //         <Text style={styles.text} on>{item.msg}</Text> 
    //     </Card>
    // );
  
   
   
  return GroupChatList.map((ele,i) => 
        ele.type == 'sender' ?
        <View key={i} style = {[styles.sender, styles.cardView]}>
            {/* <SingleMessageComponet ele = {ele}/> */}
            <ReplyComponent ele = {ele}/>
        </View>   
         :
        <View key={i} style = { styles.cardView} >
             <SingleMessageComponet ele = {ele}/>
        </View>     
  )
}



export default Messages


const styles = StyleSheet.create({
    card: {
        margin: 5,
        flexWrap: 'wrap',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
    },
    txt: {
        
    },
    sender : {
        alignSelf:"flex-end",
        borderRadius:10,
    },
    cardView : {
        flexWrap: 'wrap',
        
    }
});