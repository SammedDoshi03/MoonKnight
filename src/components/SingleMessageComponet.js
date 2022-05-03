import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Text, OverflowMenu, MenuItem, Button,Card,  } from '@ui-kitten/components';
import { styles } from '../assests/styles';
import { useSelector } from 'react-redux';


const SingleMessageComponet = (props) => {

    const [visible, setVisible] = React.useState(false);
    // const { msg, time, index } = props
    const { ele } = props
    // const starredMessages = useSelector(state => state.starredMessageReducer.starredMessages)
    // console.log(starredMessages);

  return (
   
       <Card style={styles.card}>
            {ele.type === 'recevier' && ele.conType === "Group"? <Text style={styles.text} status='primary'>{ele.name}</Text>: null}
            <OverflowMenu
            anchor={() => (<TouchableOpacity onLongPress={() => setVisible(true)}><Text style={styles.text} on>{ele.msg}</Text></TouchableOpacity>)}
            visible={visible}
            onBackdropPress={() => setVisible(false)}>
                <MenuItem title='Reply'/>
                <MenuItem title='Add to Starred Messages'/>
                <MenuItem title='Delete'/>
                {/* <MenuItem title='Details'/> */}
            </OverflowMenu>
            <Text style={styles.time}>{ele.time}</Text>
        </Card>
  )
}

export default SingleMessageComponet