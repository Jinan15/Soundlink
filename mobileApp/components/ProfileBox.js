import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileBox(props) {
  return (
    // Main container for the profile info
    <View style={styles.ProfileMainInfoContainer}>
      {/* Container for username, profile pic, edit profile button */}
      <View style={styles.ProfileHeadInfoContainer}>
        <View>
          {/* Profile pic */}
          <Image
            style={styles.ProfilePic}
            source={{
              uri: "https://media.comicbook.com/2020/10/my-hero-academia-bakugo-1240308.jpeg?auto=webp",
            }}
          />
          {/* Profile stats */}
          <View style={styles.ProfileStatsContainer}>
            <Text style={styles.ProfileStatsText}>
              {props.postCount + "\nPosts"}
            </Text>
            <Text style={styles.ProfileStatsText}>
              {props.postCount + "\nPosts"}
            </Text>
            <Text style={styles.ProfileStatsText}>
              {props.postCount + "\nPosts"}
            </Text>
          </View>
        </View>
        {/* Username and bio (bio length is limited need to fix)*/}
        <View style={styles.UsernameBioContainer}>
          <Text style={styles.UsernameText}>{props.username}</Text>
          <Text style={styles.BioText}>{props.bio}</Text>
        </View>
        {/* Edit profile button */}
        <TouchableOpacity style={styles.EditProfileBtn}>
          <Text style={styles.MainText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  ProfileMainInfoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 40,
    marginLeft: 30,
  },
  ProfileHeadInfoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  UsernameBioContainer: {
    maxWidth: 155,
    maxHeight: 60,
  },
  ProfileStatsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 120,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  ProfileStatsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
  ProfilePic: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
  },
  UsernameText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  },
  BioText: {
    color: "white",
    marginLeft: 2,
    marginTop: 10,
    textAlign: "left",
    fontSize: 12,
    alignSelf: "flex-start",
  },
  EditProfileBtn: {
    backgroundColor: "#595959",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    width: 100,
    height: 30,
  },
});
