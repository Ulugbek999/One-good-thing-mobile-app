import { Client, Account, ID, Avatars } from "react-native-appwrite"

export const client = new Client()
        .setEndpoint('https://nyc.cloud.appwrite.io/v1') // <--- add your endpoint here
        .setProject('688d6073000f3d73d2ab') // <--- your Project ID
        .setPlatform('dev.bek.onegoodthing'); // <--- your app platform
// EXPO_PUBLIC_APPWRITE_PROJECT_ID=688d6073000f3d73d2ab
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1


export const account = new Account(client) 
export const avatars = new Avatars(client)




