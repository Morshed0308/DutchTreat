﻿using DutchTreat.Model;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace DutchTreat.Services
{
    public class GlMailService:IMailService
    {
       
        public void SendMessage(string to,string subject,string body) 
        {
            /*SmtpClient client = new SmtpClient("mysmtpserver");
            client.Host = "smtp.gmail.com";
            client.UseDefaultCredentials = false;
            client.EnableSsl = true;
            client.Credentials = new System.Net.NetworkCredential("shahriar.morshed@brainstation-23.com", "shahriarbs@23");
            */

            SmtpClient smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential("shahriar.morshed@brainstation-23.com", "shahriarbs@23")

            };


            //  Contact contact = new Contact();
            // MailMessage mlmsg=new MailMessage();


        smtp.Send(new MailMessage("shahriar.morshed@brainstation-23.com", to, subject, body));

        }
    }
}
