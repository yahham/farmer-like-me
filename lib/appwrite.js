import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('69218c68000d8d0cb011')
  .setPlatform('com.farmerlikeme.app')

export const account = new Account(client)
export const avatars = new Avatars(client)