const mongoose=require("mongoose")

const MONGO_URL="mongodb+srv://vipinmandloi43:vipinmandloi43@cluster0.sk6y00j.mongodb.net/sms?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL)