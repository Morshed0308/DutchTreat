using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Model
{
    public class Contact
    {
        [Required]
        [MinLength(5,ErrorMessage ="Name must be greater than 5 character")]
        public string Name { get; set; }
        [Required]
        [EmailAddress]
        public string  Email { get; set; }
        [Required]
        
        public string Subject { get; set; }
        [Required]
        [MaxLength(150 ,ErrorMessage ="Too long messege!")]
        public string  Messege { get; set; }
        
    }
}
