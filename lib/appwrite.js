import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite"

export const client = new Client()
        .setEndpoint('https://nyc.cloud.appwrite.io/v1') // <--- endpoint here
        .setProject('688d6073000f3d73d2ab') // <--- Project ID
        .setPlatform('dev.bek.onegoodthing'); // <--- app platform
// EXPO_PUBLIC_APPWRITE_PROJECT_ID=688d6073000f3d73d2ab
// EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1


export const account = new Account(client) 
export const avatars = new Avatars(client)


//for the appwrite database service


export const databases = new Databases(client);

//6890e8560017a5ba2f83 - one_good_thing database id
//6890e8560017a5ba2f83 - goodthings table






