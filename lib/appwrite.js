import { Client, Account, ID, Avatars } from "react-native-appwrite"

export const client = new Client()
        .setProject('688d6073000f3d73d2ab')
        .setPlatform('dev.bek.onegoodthing');


// EXPO_PUBLIC_APPWRITE_PROJECT_ID=688d6073000f3d73d2ab
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1


export const account = new Account(client) 
export const avatars = new Avatars(client)




