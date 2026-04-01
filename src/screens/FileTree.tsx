import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, FlatList } from "react-native"
import { GlobleStyle, width } from "../components/GlobleStyle";
import { fileTree } from "../components/GlobleData";
import { FileCodeIcon, FolderOpen, ArrowDownIcon, ArrowRightIcon } from "phosphor-react-native";

const FileTree = ({ navigation }: any) => {
    const [tree, setTree] = useState<Array<any>>([]);

    const flatListRendner = ((data: Array<any>) => {
        return (
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                style={{ marginLeft: 20 }}
                renderItem={({ item }) => {
                    console.log(item)
                    return (
                        <>
                            {
                                <View>
                                    <TouchableOpacity disabled={item?.type == "file"} style={{ flexDirection: "row", alignItems: "center" }}>
                                        {item?.type == "folder" &&
                                            <ArrowRightIcon />
                                        }
                                        {item?.type == "folder" ? <FolderOpen color="#6FB1FC" size={20} />
                                            :
                                            <FileCodeIcon color="#6FB1FC" size={20} />
                                        }
                                        <Text style={{ marginLeft: 5 }}>{item?.name}</Text>
                                    </TouchableOpacity>
                                    {flatListRendner(item?.children)}
                                </View>
                            }
                        </>
                    )
                }
                }
            />
        )
    });

    return (
        <SafeAreaView style={GlobleStyle.container}>
            <View style={{ flex: 1, flexDirection: "row" }}>

                <View style={styles.menuContainer}>
                    {/* Back Button */}
                    <TouchableOpacity
                        style={[GlobleStyle.backButton, { marginLeft: -8 }]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[GlobleStyle.backText, { color: "black", fontSize: 30 }]}>←</Text>
                    </TouchableOpacity>
                    {flatListRendner(fileTree)}
                </View>
                <View style={GlobleStyle.circleTop} />
                <View style={GlobleStyle.circleBottom} />
            </View>
        </SafeAreaView>
    )
}

export default FileTree

const styles = StyleSheet.create({
    menuContainer: {
        width: "auto",
        height: "auto",
        backgroundColor: "white",
        zIndex: 1,
        shadowColor: "black",
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 10,
            height: 10
        },
        padding: 10
    }
})