import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  // storyImageData
     return (
          <ParallaxScrollView
               headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
              //  headerHeight=
               headerImage={
                    <View style={{ paddingTop: 50, paddingInline: 15, flexDirection: "row", justifyContent:'space-between' }}>
                         <View style={{ flexDirection: "row", gap: 12 }}>
                              <View
                                   style={{
                                        flexDirection: "row",
                                        backgroundColor: "white",
                                        paddingBlock: 8,
                                        paddingInline: 12,
                                        borderRadius: 19,
                                   }}
                              >
                                   <Ionicons name="notifications" size={24} color="black" />
                                   <Text style={{ fontSize: 18, fontWeight: "500", marginLeft: 4 }}>3</Text>
                              </View>
                              <View
                                   style={{
                                        flexDirection: "row",
                                        backgroundColor: "white",
                                        paddingBlock: 8,
                                        paddingInline: 9,
                                        borderRadius: 30,
                                   }}
                              >
                                   <Ionicons name="chatbubble-ellipses-sharp" size={24} color="black" />
                              </View>
                         </View>
                         <View>
                          <Image width={40} height={40} style={{borderRadius:25}} source={{uri:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2560'}}/>
                         </View>
                    </View>
               }
          >

            <View>
              <View style={{flexDirection:'row', gap: 10, }}>
                <Text style={{fontWeight:'800', fontSize: 16}}>Discover</Text>
                <Text style={{fontWeight:'800', fontSize: 16}}>Following</Text>
              </View>
            </View>
          </ParallaxScrollView>
     );
}

const styles = StyleSheet.create({
     titleContainer: {
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
     },
     stepContainer: {
          gap: 8,
          marginBottom: 8,
     },
     reactLogo: {
          height: 178,
          width: 290,
          bottom: 0,
          left: 0,
          position: "absolute",
     },
});
