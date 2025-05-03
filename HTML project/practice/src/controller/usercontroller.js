const usermodel = require("../model/usermodel");
const { errorhandlingData } = require('../errorhandling')
const { otpsend } = require('../mail/usermail');
const { Profileimg } = require("../images/userimages");

 
exports.createuser = async (req, res) => {
    try {
        const data = req.body;
        const img = req.file;
      
        const {name,email,password}= data

        const randomOTP = Math.floor(1000 + Math.random() * 8999)

        const checkuser = await usermodel.findOneAndUpdate({email:email},{ $set: { userOTP:randomOTP}},)

        if(checkuser){
            const { name,email,inactive,isVerify,isDelete}=checkUser;
            if(!active) return res.status(400).send({ status: false, msg: "account is block"});
            if(!isDelete) return res.status(400).send({ status: false, msg: "account is deleted"});
            if(!isVerify) return res.status(400).send({ status: false, msg: "account already verified pls login"});
            otpsend(name,email,randomOTP)
           return res.status(200).send({status: true,msg: 'Otp send Successfully pls verify otp'})
        }

    const bcryptPassword = await bcrypt.hash(password,10)

    data.password = bcryptPassword

        data.userOPT = randomOTP
        data.role = 'user'

        if(img){
            data.profileImg = await Profileimg(img.buffer)
        }

        otpsend(name,email,randomOTP)

        const userdb = await usermodel.create(data);
       
      res.status(200).send({ status: true, data: createDbData});

    }
    
    catch (e) {res.status(500).send({ status: false, msg: e.message}) }

};

// exports.getall = async (req, res) => {
//     try {
//         const userdata = await usermodel.find();
//         if (!userdata || userdata.length === 0) {
//             return res.status(404).send({ status: false, msg: "Data Not Found" });
//         }
//         return res.status(200).send({ status: true, data: userdata });
//     } catch (error) {
//         return res.status(500).send({ status: false, msg: "Error From server side", error: error.message});  // Fixed error message
//     }
// };

// exports.getall = async (req,res)=>
// {

//     try{
//         const userdata = await usermodel.find();
//         if(!userdata )
//     }

// }



// const axios = require('axios');
// const technicalindicators = require('technicalindicators');

// // Function to fetch real-time data from Yahoo Finance (example)
// async function getStockData(symbol) {
//     try {
//         const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1min`);
//         return response.data.chart.result[0];
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// // Function to calculate indicators
// function calculateIndicators(prices) {
//     const sma = technicalindicators.sma({ period: 20, values: prices });
//     const rsi = technicalindicators.rsi({ values: prices, period: 14 });
//     const macd = technicalindicators.macd({ values: prices, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 });
//     return { sma, rsi, macd };
// }

// // Buy/Sell Signal Logic
// function generateSignals(data) {
//     const { sma, rsi, macd } = data;

//     if (rsi[rsi.length - 1] < 30 && macd[macd.length - 1].histogram > 0) {
//         return 'Buy Signal';
//     } else if (rsi[rsi.length - 1] > 70 && macd[macd.length - 1].histogram < 0) {
//         return 'Sell Signal';
//     } else {
//         return 'Hold';
//     }
// }

// // Main Function
// async function main() {
//     const symbol = 'AAPL'; // Example: Apple Inc.
//     const stockData = await getStockData(symbol);
//     const closingPrices = stockData.indicators.adjclose.map(item => item);

//     const indicators = calculateIndicators(closingPrices);
//     const signal = generateSignals(indicators);

//     console.log(`Buy/Sell Signal for ${symbol}: ${signal}`);
// }

// main();
