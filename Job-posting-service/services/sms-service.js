const fast2sms = require('fast-two-sms')
exports.sendSms = async (phoneNumber, message) => {

    try {

        await fast2sms.sendMessage({
            authorization:process.env.SMS_API_KEY,
            message,
            numbers:[phoneNumber]
        });
    
        console.log("SMS send !");
        
    } catch (error) {
        
        console.log("Unable to send SMS!",error.message)
    }
    

}