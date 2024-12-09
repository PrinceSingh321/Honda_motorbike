import mongoose from 'mongoose';

let isConnected = false

export const connectedToDB = async() =>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log('Mongo is alreday connected')
        return
    }
    try{
        await mongoose.connect('mongodb://localhost:27017/NextLogin')

        isConnected=true
        console.log('Connected to MongiDb')
    }catch(error){
        console.log(error)
    }
}