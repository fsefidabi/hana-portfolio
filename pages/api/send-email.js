import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
      }
    })

    const contactMailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: "📧 You Have New Email!",
      html: `
       <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Failure</title>
      </head>
      <body style="font-family: sans-serif; background-color: #ffffff; padding: 50px; max-width: 500px; margin: 0 auto;">
        <div style="background-color: #d35d3d; margin-bottom: 44px; padding: 4px 0; color: #000 !important;">
          <p style="font-weight: bold; font-size: 28px; text-align: center;">📧 You Got New Email 📧</p>
        </div>
      
        <div
            style="background-color: #eee; font-size: 13px; font-weight: bold; padding: 30px 20px; margin: 20px 0; color: #393939">
          <p style="text-transform: uppercase; margin-bottom: 28px">Message details</p>
          <p style="margin-bottom: 20px;">Date: ${new Date().toLocaleString()}</p>
          <p style="margin-bottom: 20px;">Name: ${name}</p>
          <p style="margin-bottom: 20px;">Email: ${email}</p>
            <div style="margin-bottom: 20px; display: flex;"><p>Message:</p> <p style="white-space: pre-line; margin-left: 10px;">${message}</p></p>
        </div>
      </body>
      </html>
      `
    }

    const successfulEmailReceiptOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Email Confirmation",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Confirmation</title>
        </head>
        <body style="font-family: sans-serif; background-color: #ffffff; padding: 50px; max-width: 500px; margin: 0 auto;">
        <div style="background-color: #d35d3d; margin-bottom: 44px; padding: 4px 0; color: #000 !important;">
          <p style="font-weight: bold; font-size: 28px; text-align: center;">I'VE GOT YOUR MESSAGE ;)</p>
        </div>
        
        <div style="margin-bottom: 50px; color: #000 !important;">
          <p>Hi ${name},</p>
          <p>Thanks for reaching out! Just a quick note to let you know that I've received your message. I'm looking forward to
            our conversation. I'll be in touch soon to discuss further.</p>
          <div>
            <p style="margin: 0;">Cheers,</p>
            <p style="margin: 0;">Hananeh</p>
          </div>
        </div>
        
        <hr/>
        
        <div
            style="background-color: #eee; font-size: 13px; font-weight: bold; padding: 30px 20px; margin: 20px 0; color: #393939;">
          <p style="text-transform: uppercase; margin-bottom: 28px">Your message details</p>
          <p style="margin-bottom: 20px;">Date: ${new Date().toLocaleString()}</p>
          <p style="margin-bottom: 20px;">Name: ${name}</p>
          <p style="margin-bottom: 20px;">Email: ${email}</p>
            <div style="margin-bottom: 20px; display: flex;"><p>Message:</p> <p style="white-space: pre-line; margin-left: 10px;">${message}</p></p>
        </div>
        
        <hr/>
        
        <div style="display: flex; justify-content: center; align-items: center; gap: 12px">
          <a href="https://www.instagram.com/hananehsefidabi/" target="_blank">
            <?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1"
                 id="Layer_1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px"
                 y="0px"
                 width="22"
                 height="22"
                 viewBox="0 0 56.7 56.7"
                 enable-background="new 0 0 56.7 56.7" xml:space="preserve">
              <g>
              \t<path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
              \t\tc-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
                <circle cx="41.5" cy="16.4" r="2.9"/>
                <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
              \t\th20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
              \t\ts-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
              \t\tc3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
              </g>
            </svg>
          </a>
        
          <a href="https://www.behance.net/hananehsefidabi" target="_blank">
            <svg width="26" height="18" viewBox="0 0 40 25" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M36.32 3.375H24.9449V0.125H36.32V3.375ZM39.1247 19.625C38.4064 21.7326 35.8276 24.5 30.8356 24.5C25.8403 24.5 21.7941 21.6904 21.7941 15.2781C21.7941 8.92437 25.5722 5.65812 30.6763 5.65812C35.6846 5.65812 38.7428 8.55387 39.4107 12.8504C39.5374 13.6726 39.5878 14.7809 39.5651 16.3279H26.5212C26.7324 21.5457 32.1811 21.7099 33.9767 19.625H39.1247ZM26.635 13.125H34.7031C34.5324 10.6111 32.8571 9.51912 30.6779 9.51912C28.2957 9.51912 26.9778 10.7671 26.635 13.125ZM11.0772 24.4805H0.569946V0.159125H11.8686C20.7671 0.29075 20.9361 9.00562 16.2886 11.3814C21.9127 13.4289 22.1012 24.4805 11.0772 24.4805ZM5.44495 9.875H11.2689C15.3444 9.875 15.9912 5 10.7619 5H5.44495V9.875ZM10.9553 14.75H5.44495V19.651H10.8741C15.8384 19.651 15.5346 14.75 10.9553 14.75Z"/>
            </svg>
          </a>
        
          <a href="https://www.linkedin.com/in/hananehsefidabi/" target="_blank">
            <svg width="18" height="18" viewBox="0 0 29 29" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M6.21233 28.1593H0V9.53349H6.21233V28.1593ZM3.10616 7.05303C1.38548 7.05303 0 5.65637 0 3.94686C0 2.23735 1.38548 0.840698 3.10616 0.840698C4.82684 0.840698 6.21233 2.23735 6.21233 3.94686C6.21233 5.65637 4.81567 7.05303 3.10616 7.05303ZM28.57 28.1593H22.6035V19.0978C22.6035 16.9302 22.5588 14.1592 19.4973 14.1592C16.4359 14.1592 15.9107 16.5168 15.9107 18.9414V28.1593H9.94419V9.52232H15.6761V12.0698H15.7543C16.5476 10.6061 18.5029 9.06421 21.4079 9.06421C27.4527 9.06421 28.57 12.9302 28.57 17.9469V28.1705V28.1593Z"/>
            </svg>
          </a>
        
        </div>
        </body>
        </html>
      `
    }

    const failureEmailReceiptOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Email Failure",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Failure</title>
        </head>
        <body style="font-family: sans-serif; background-color: #ffffff; padding: 50px; max-width: 500px; margin: 0 auto;">
          <div style="background-color: #d35d3d; margin-bottom: 44px; padding: 4px 0; color: #000 !important;">
            <p style="font-weight: bold; font-size: 28px; text-align: center;">OOPS... THERE WAS AN ISSUE :(</p>
          </div>
          
          <div style="margin-bottom: 50px; color: #000 !important;">
            <p>Hi ${name},</p>
            <p>I'm sorry to let you know that there was a hiccup with sending your message. Please double-check your details and
              try again. If the issue persists, feel free to reach out to me directly at <span
                  style="text-decoration: underline;">hananehsefidabi@gmail.com</span> or DM me on <a
                  href="https://www.linkedin.com/in/hananehsefidabi/">LinkdeIn</a> or <a
                  href="https://www.instagram.com/hananehsefidabi/">Instagram</a>. </p>
            <p>I'll get back to you soon!</p>
            <div>
              <p style="margin: 0;">Cheers,</p>
              <p style="margin: 0;">Hananeh</p>
            </div>
          </div>
          
          <hr/>
          
          <div
              style="background-color: #eee; font-size: 13px; font-weight: bold; padding: 30px 20px; margin: 20px 0; color: #393939;">
            <p style="text-transform: uppercase; margin-bottom: 28px">Your message details</p>
            <p style="margin-bottom: 20px;">Date: ${new Date().toLocaleString()}</p>
            <p style="margin-bottom: 20px;">Name: ${name}</p>
            <p style="margin-bottom: 20px;">Email: ${email}</p>
            <div style="margin-bottom: 20px; display: flex;"><p>Message:</p> <p style="white-space: pre-line; margin-left: 10px;">${message}</p></p>
          </div>
          
          <hr/>
          
          <div style="display: flex; justify-content: center; align-items: center; gap: 12px">
            <a href="https://www.instagram.com/hananehsefidabi/" target="_blank">
              <?xml version="1.0" encoding="utf-8"?>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   x="0px"
                   y="0px"
                   width="22"
                   height="22"
                   viewBox="0 0 56.7 56.7" enable-background="new 0 0 56.7 56.7" xml:space="preserve">
                <g>
                  <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
                    c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
                  <circle cx="41.5" cy="16.4" r="2.9"/>
                  <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
                    h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
                    s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
                    c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"/>
                </g>
              </svg>
            </a>
          
            <a href="https://www.behance.net/hananehsefidabi" target="_blank">
              <svg width="26" height="18" viewBox="0 0 40 25" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M36.32 3.375H24.9449V0.125H36.32V3.375ZM39.1247 19.625C38.4064 21.7326 35.8276 24.5 30.8356 24.5C25.8403 24.5 21.7941 21.6904 21.7941 15.2781C21.7941 8.92437 25.5722 5.65812 30.6763 5.65812C35.6846 5.65812 38.7428 8.55387 39.4107 12.8504C39.5374 13.6726 39.5878 14.7809 39.5651 16.3279H26.5212C26.7324 21.5457 32.1811 21.7099 33.9767 19.625H39.1247ZM26.635 13.125H34.7031C34.5324 10.6111 32.8571 9.51912 30.6779 9.51912C28.2957 9.51912 26.9778 10.7671 26.635 13.125ZM11.0772 24.4805H0.569946V0.159125H11.8686C20.7671 0.29075 20.9361 9.00562 16.2886 11.3814C21.9127 13.4289 22.1012 24.4805 11.0772 24.4805ZM5.44495 9.875H11.2689C15.3444 9.875 15.9912 5 10.7619 5H5.44495V9.875ZM10.9553 14.75H5.44495V19.651H10.8741C15.8384 19.651 15.5346 14.75 10.9553 14.75Z"/>
              </svg>
            </a>
          
            <a href="https://www.linkedin.com/in/hananehsefidabi/" target="_blank">
              <svg width="18" height="18" viewBox="0 0 29 29" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.21233 28.1593H0V9.53349H6.21233V28.1593ZM3.10616 7.05303C1.38548 7.05303 0 5.65637 0 3.94686C0 2.23735 1.38548 0.840698 3.10616 0.840698C4.82684 0.840698 6.21233 2.23735 6.21233 3.94686C6.21233 5.65637 4.81567 7.05303 3.10616 7.05303ZM28.57 28.1593H22.6035V19.0978C22.6035 16.9302 22.5588 14.1592 19.4973 14.1592C16.4359 14.1592 15.9107 16.5168 15.9107 18.9414V28.1593H9.94419V9.52232H15.6761V12.0698H15.7543C16.5476 10.6061 18.5029 9.06421 21.4079 9.06421C27.4527 9.06421 28.57 12.9302 28.57 17.9469V28.1705V28.1593Z"/>
              </svg>
            </a>
          </div>
        </body>
        </html>
      `
    }

    try {
      const response = await transporter.sendMail(contactMailOptions)
      if (response?.messageId) {
        await transporter.sendMail(successfulEmailReceiptOptions)
      }
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      await transporter.sendMail(failureEmailReceiptOptions)
      res.status(500).json({ message: "Error sending email", error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}
