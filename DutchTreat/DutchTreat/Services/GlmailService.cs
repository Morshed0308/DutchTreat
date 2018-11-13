using DutchTreat.Model;
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

            System.Net.Mail.SmtpClient smtp = new System.Net.Mail.SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 465,
                EnableSsl = true,
                DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential("shahriar.morshed@brainstation-23.com", "shahriarbs@23")

            };


            //  Contact contact = new Contact();
            // MailMessage mlmsg=new MailMessage();


        smtp.Send(new MailMessage("shahriar.morshed@brainstation-23.com", to, subject, body));

        }
    }
}
