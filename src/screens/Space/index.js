import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity} from "react-native";


import styles from "./style";

import MySpace from "./MySpace";
import Support from "./Support"


const Space = (props) => {

    // const dispatch = useDispatch();
    const [activeId, setActiveId] = useState(1);
    const goBack = () => props.navigation.navigate("Home");

  

    const showActive = (id) => setActiveId(id)

    return (
        <View style={styles.view}>
           
            <View style={styles.mainBody}>      
                <View style={styles.subHeader}>
                    <TouchableOpacity style={[activeId === 1 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(1)}>
                        <Text style={[activeId === 1 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>MY SPACE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[activeId === 2 ? styles.activeSubHeader : styles.inActiveSubHeader, styles.miniSubHeader]} onPress={() => showActive(2)}>
                        <Text style={[activeId === 2 ? styles.activeSubHeaderText : styles.inActiveSubHeaderText, styles.miniSubHeaderText]}>SUPPORT GROUP</Text>
                    </TouchableOpacity>
                </View>
              
               
            </View>
            {activeId === 1 ? <MySpace /> : <Support/>}  
           
        </View>
    )
};

export default Space;