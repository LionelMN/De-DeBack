const mail = require('./mailer')

function formattingData(data, recivers){
    let html = `<div><h1>Seems that somebody needs you, go on and take a look</h1>
     <h2><a href='https://dr17bl09ju7k1.cloudfront.net/post/${data}'>Let's see that post</a></h2></div>`
    mail.sendMail(html, recivers).catch(console.error)
}

module.exports = {formattingData}