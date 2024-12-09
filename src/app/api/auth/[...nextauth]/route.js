import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

import user from "@/models/user";
import { connectedToDB } from '../../../../utils/database';

const handlers = NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        })
    ],
    callbacks:{
        async session({session}){
            return session
        },
        async signIn({account,profile,user,credentials}){
            try {
                await connectedToDB()
                const checkEmail=await user.find({email:user.email})
                if (checkEmail.length==0){
                    await user.insertMany({name:user.name,email:user.email})
                }
            }catch(error){
              console.log(e)
            }
        }
    }
}) 