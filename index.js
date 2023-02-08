// import important module
const { Telegraf, Markup } = require("telegraf");
// import { message } from 'telegraf/filters';
const { message } = require("telegraf/filters");
//const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();
const { BOT_TOKEN, PORT, SERVER_URL, SECRET_KEY } = process.env;
console.log("BOT_TOKEN: ", BOT_TOKEN);
// create bot
const bot = new Telegraf(BOT_TOKEN);

// bot.on("message", (ctx) => {+
//     ctx.reply("Hello, welcome to ALX information bot")
// })

bot.command("start", async (ctx) => {
  console.log(ctx.from);

  let buttons = [
    [Markup.button.callback("Available Programs", "programs")],
    [Markup.button.callback("Frequently Asked Questions (FAQs)", "faq")],
  ];

  ctx.reply("Hello, Welcome to ALX information bot. 👋👋👋");

  await ctx.reply(
    "Please click on the buttons below to find the information you need",
    Markup.inlineKeyboard(buttons)
  );
});

bot.action("programs", async (ctx) => {
  // bot.telegram.sendMessage(ctx.chat.id, "Our Programs");
  let buttons = [
    [Markup.button.callback("AWS", "aws")],
    [Markup.button.callback("Salesforce", "salesforce")],
    [Markup.button.callback("Data Analytics", "da")],
    [Markup.button.callback("Data Science", "ds")],
    [Markup.button.callback("Software Engineering", "se")],
  ];
  await ctx.reply(
    "Please click on the buttons below to find information you need",
    Markup.inlineKeyboard(buttons)
  );
});

// Courses

// AWS
bot.action("aws", awsMenu);

bot.action("career", async (ctx) => {
  let message = ` You will be prepared to become: 

  📌 Cloud DevOps Engineer

  📌 Full Stack Web Developer

  📌 Cloud Developer/Engineer

  📌 Cloud Architect

  📌 Cloud Consultant

  📌 Project Manager \\- AWS Cloud`;

  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/aws-cloud-practitioner/"
      ),
    ],
    [
      Markup.button.callback("🔙 Go back", "aws_back")
    ]
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("aws_back", async (ctx) => {
  let messageId;
  if (ctx.message)
    messageId = ctx.message.message_id;
  else
    messageId = ctx.callbackQuery.message.message_id;
  
  try {
    await ctx.deleteMessage(messageId);
    awsMenu(ctx);
  } catch (error) {
    return error;
  }
})

async function awsMenu(ctx) {
    let message = `Take your career to new heights with cloud computing
  
    Become certified in Cloud Computing\\. Advance your expertise in IT and Cloud Fluency and acquire the skills for global opportunities\\.
    
    In partnership with *Amazon Web Services*\\(AWS\\), the market leader among the world\\'s biggest cloud services, the AWS Cloud Practitioner programme will prepare you for a career with top international companies that use cloud\\-based technologies\\. 
  
    *Deadline for Application*: April 17th, 2023
    `;
    await ctx.replyWithMarkdownV2(message);
    let buttons = [
      [
        Markup.button.callback(
          "What Careers will this Programme prepare me for?",
          "career"
        ),
      ],
      [Markup.button.callback("What You'll Learn?", "learning")],
      [Markup.button.callback("Requirments", "req")],
      [Markup.button.callback("What's Next?", "next")],
      [
        Markup.button.url(
          "Apply Now",
          "https://www.alxethiopia.com/aws-cloud-practitioner/"
        ),
      ],
      [
        Markup.button.url(
          "Course curriculum",
          "https://drive.google.com/file/d/1xc8A6dEHkCHnqUlMcwnLZRYXMr9l8ytr/view?usp=sharing"
        ),
      ],
    ];
    await ctx.replyWithMarkdownV2(
      "For More Information",
      Markup.inlineKeyboard(buttons)
    );
    // await ctx.replyWithMarkdownV2("*Hello*")
}

async function awsLearn(ctx) {
  let message = `You will learn:\n
  📌 Knowledge of core AWS and cloud computing services, including use cases, data security, billing and pricing models\\.

  📌 Understanding of how software and hardware systems bring business visions to life\\.

  📌 Navigating the architecting and deployment of applications within Amazon Web Services \\(AWS\\) platforms\\.

  📌 Developing plans for the adaptation of cloud solutions\\.

  📌 Management and monitoring of cloud platforms\\.
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/aws-cloud-practitioner/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
}

bot.action("learning", awsLearn);

bot.action("req", async (ctx) => {
  let message = `In order to successfully be accepted and finish this program, you have to:\n
  📌 dedicate 7 months, 25 to 30 hours/week

  📌 have access to a laptop or desktop computer

  📌 have access to a stable internet connection

  📌 be proficient in written and spoken English

  📌 be between 18 to 34 years of age

  📌 be of African Origin

  📌 Reside and able to attend in\\-person activities in Addis Ababa
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/aws-cloud-practitioner/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("next", async (ctx) => {
  let message = `What happens after you finish the program?\n

  📌 Receive an AWS Cloud Essentials Certification

  📌 Receive an AWS Solutions Architect Certification

  📌 Join our global tech talent community and continue your career journey

  📌 Build life\\-changing relationships for your future of success
  `;

  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/aws-cloud-practitioner/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

// Salesforce
bot.action("salesforce", async (ctx) => {
  let message = `Equip Yourself for a World of Opportunities

  Become a Salesforce Certified Administrator and secure one of the most in\\-demand technical positions across a multitude of industries\\. 
  
  The Salesforce ecosystem is an interconnected network of Trailblazers building their careers, companies, and communities with Salesforce\\. As the Salesforce ecosystem grows, so does the Salesforce Administrator role\\. The opportunities for Administrators are endless and with the right skills and tools, you will continue to thrive\\.  

  *Deadline for Application*: April 17th, 2023
  `;

  let buttons = [
    [
      Markup.button.callback(
        "What Careers will this Programme prepare me for?",
        "sales_career"
      ),
    ],
    [Markup.button.callback("What You'll Learn?", "sales_learning")],
    [Markup.button.callback("Requirments", "sales_req")],
    [Markup.button.callback("What's Next?", "sales_next")],
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
    [
      Markup.button.url(
        "Course curriculum",
        "https://drive.google.com/file/d/17QgYYSWrAXnAHtdEPNehHVs_P-G3CevV/view?usp=sharing"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("sales_career", async (ctx) => {
  let message = `You will be prepared to become:

  📌 Salesforce System Administrator

  📌 Customer Relationship Manager

  📌 Business Analyst

  📌 General Manager

  📌 Marketing Cloud Administrator

  📌 Platform App Builder
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("sales_learning", async (ctx) => {
  let message = `You will learn:

  📌 Understand how to navigate and change the user interface of Salesforce as well as configure and make an invoicing application on the platform

  📌 How to process automation, security & reporting functionality within Salesforce

  📌 Understand the two clouds: Sales & Marketing and Support Cloud

  📌 Data management and Setup navigation
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("sales_req", async (ctx) => {
  let message = `In order to successfully be accepted and finish this program, you have to:
  
  📌 7 months, 30 to 40 hours/week

  📌 Access to a laptop or desktop computer

  📌 Access to a stable internet connection

  📌 Proficiency in written and spoken English

  📌 Between 18 to 34 years of age

  📌 Of African Origin

  📌 Reside and able to attend in\\-person activities in Addis Ababa
  `;

  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});
bot.action("sales_next", async (ctx) => {
  let message = `What happens after you finish the program?

📌 Receive a Salesforce Administrator Certification

📌 Join Our global tech talent community and continue your career journey

📌 Build life\\-changing relationships for your success
`;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

// Data Analytics
bot.action("da", async (ctx) => {
  let message = `Analyze the Future Kickstart Your Career

  Become an ALX certified Data Analyst for a career in one of the most in\\-demand fields in any industry\\. 
  
  As a data analyst, you will have the power to increase efficiency and improve a company\\'s performance by learning to read data patterns\\. Work with complex datasets by advancing your programming skills, and use these skills for data manipulation, analysis and exploration\\. 
    

  *Deadline for Application*: April 17th, 2023
  `;

  let buttons = [
    [
      Markup.button.callback(
        "What Careers will this Programme prepare me for?",
        "da_career"
      ),
    ],
    [Markup.button.callback("What You'll Learn?", "da_learning")],
    [Markup.button.callback("Requirments", "da_req")],
    [Markup.button.callback("What's Next?", "da_next")],
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
    [
      Markup.button.url(
        "Course curriculum",
        "https://drive.google.com/file/d/17QgYYSWrAXnAHtdEPNehHVs_P-G3CevV/view?usp=sharing"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("da_career", async (ctx) => {
  let message = `You will be prepared to become:

  📌 Financial Analyst

  📌 Business Intelligence Analyst

  📌 Operations Analyst

  📌 Data Visualisation Developer

  📌 Marketing Analytics Specialist

  📌 Healthcare Data Analyst

  📌 Customer Insights Analyst

  📌 Risk Management Analyst
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/data-analytics/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("da_learning", async (ctx) => {
  let message = `You will learn:

  📌 An introduction to data analysis and data structures

  📌 To analyze data and build statistical models for practical, real\\-world scenarios

  📌 Logic, design thinking, and problem\\-solving

  📌 How to prepare and build dashboards to communicate findings with purpose
  `;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/data-analytics/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("da_req", async (ctx) => {
  let message = `In order to successfully be accepted and finish this program, you have to:
  
  📌 6 months, 30 to 40 hours/week

  📌 Access to a laptop or desktop computer

  📌 Access to a stable internet connection

  📌 Proficiency in written and spoken English

  📌 Between 18 to 34 years of age

  📌 Of African Origin

  📌 Reside and able to attend in\\-person activities in Addis Ababa
  `;

  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/data-analytics/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

bot.action("da_next", async (ctx) => {
  let message = `What happens after you finish the program?

📌 Receive a Salesforce Administrator Certification

📌 Join Our global tech talent community and continue your career journey

📌 Build life\\-changing relationships for your success
`;
  let buttons = [
    [
      Markup.button.url(
        "Apply Now",
        "https://www.alxethiopia.com/salesforce-administrator/"
      ),
    ],
  ];

  await ctx.replyWithMarkdownV2(message, Markup.inlineKeyboard(buttons));
});

// FAQ

bot.action("faq", async (ctx) => {
  let buttons = [
    [Markup.button.callback("About ALX", "about")],
    [Markup.button.callback("Scholarship", "scholarship")],
    [Markup.button.callback("Selection Process", "selection")],
    [Markup.button.callback("Application Process", "application")],
    [Markup.button.callback("Course Detail", "detail")],
    [Markup.button.callback("Learning hubs", "hubs")],
  ];
  // bot.telegram.sendMessage(ctx.chat.id, "FAQs");
  await ctx.reply(
    "Please click on the buttons below to find the information you need",
    Markup.inlineKeyboard(buttons)
  );
});

bot.action("about", async (ctx) => {
  // await ctx.reply("About");

  let message =
    "*What is ALX*? \n\tALX focuses on the in\\-demand technology careers that support the kinds of digital transformation employers are required to make now and in the future\\. We offer agile, modular programs focused on developing the skills that accelerate young Africans' growth\\. Our innovative approach for developing these skills is based on the 10\\-20\\-70 rule of learning \\(10% from classroom training,  20% from developmental relationships \\(coaches, mentors, and peers\\), and 70% from real\\-world projects/expeience\\)\n*Is ALX for me?* \n\t Our programs are for you if you want to build employable skills and thrive in an impactful career\\. You are welcome to apply if you are between the ages of 18 to 34\\.\n\n*Do you provide jobs after the program?*\n\tALX does not ' provide jobs\\.' You drive your own future\\. Through ALX: you will activate the mindsets; learn the skills, and gain experiences to prepare you for employment\\. You will also gain access to an incredible network and community where you can get connected to opportunities\\. However, you will always be responsible for your own employment journey and create opportunities for yourself to live a life of impact\\.\n\n*What are you looking for in ALX applicants?*\n\tWe're looking for young Africans who seek out growth opportunities, and who strive to be the best version of themselves\\. Those who put in the work to get the job or grow their business—and add value once they get there\\. Grit, resilience, drive, open mindedness, humility, proactivity, and ethical judgment\\. Those are some of the qualities we look for in future ALX young leaders\\.\n\n*Is the application available in languages other than English?*\n\tThe ALX application is currently only available to applicants with strong English proficiency\\. This is because our program is only offered in English at the moment\\. English proficiency is crucial to thriving in this program\\.";
  // await ctx.reply(message);
  await ctx.replyWithMarkdownV2(message);
});

bot.action("scholarship", async (ctx) => {
  let message =
    "*How do I qualify for the scholarship?*\n\tTo be eligible for the scholarship, you must meet the following requirements:\n\t\t*Part one*:\n\t\tYou need to be: \n\t\t\t ▶️ of African Origin, \n\t\t\t ▶️ between the ages of 18\\-34, \n\t\t\t ▶️ must be located in 1 of 8 cities \\(Addis Ababa is one of them\\), \n\t\t\t ▶️ have reliable computers and wifi\\.\n\n\t\t*Part two*: \n\t\t\t ▶️ Get accepted to the ALX program with a passing score\\. \n\n*Will these programs continue to be given in 2024 with scholarships?*\n\tYes, the scholarships will be offered in 2024 and beyond to those who qualify\\.";
  await ctx.replyWithMarkdownV2(message);
});

bot.action("selection", async (ctx) => {
  let message =
    "When will we receive the decision emails to join the new programmes?\n\n- For the Data Analytics and Data Science applications, you will receive a decision email one week after the application closes. \n- For the Cloud Computing and Salesforce Administrator applications, you will receive a decision email one week after submission.";
  await ctx.reply(message);
});

bot.action("application", async (ctx) => {
  let message =
    "Where can we get the application form?\n\tYou can apply for each programme at www.alxethiopia.com.\n\nWhen will the application for the second cohort open?\n\tWe have 2 cohorts for 2023 with the second cohort applications launching in June. Note:The Data Science programme will only have one cohort this year.\n\nCan we take the application again and again if rejected?\n\tYou can only apply ONE TIME per application period. If you get rejected to join the current cohort, you can re-apply again when the next application starts in June.\n\nI started the application before but have not finished, so can I reapply?\n\tYou can continue the application from where you stopped by finding the email sent from ALX Selection with your application link.\n\nCan we participate if we started and withdrew from the Alx Software engineering program?\n\tIt depends on the reason for withdrawal and can differ from case to case.\n\nCan I do two programs at the same time?\n\tNo. You can only take one programme at a time.";
  await ctx.reply(message);
});

bot.action("detail", async (ctx) => {
  let message =
    "When will the programme start?\n\tThe new programmes start May 8th, 2023.\n\nHow long do the programmes take?\n\tThe foundation course takes 3 months at the beginning of all the programmes, then \n\t- The Salesforce programme takes 3-4 months.\n\t- The AWS programme takes 3 months.\n\t- The Data Science programme takes 12 months.\n\t- The Data Analytics programme takes 4 months.\n\t- Software Engineering programme takes 12 months.\n\nAre the programmes available for those who are out of Addis Ababa?\n\t- All of the courses are available for Africans. The only difference is the eligibility for the scholarships.\n\nWhy am I required to come in person?\n\t- There will be a peer to peer learning during the duration of the programmes that will require you to do peer projects in person.\n\nDoes ALX provide further certificates and programs after this first program ends as a series?\n\t- We will continue to offer the core programmes for the foreseeable future.\n\nHow is the weekly schedule? How much time should we use for learning per week?\n\t- You can find the programme curriculum on www.alxethiopia.com or join our telegram @alxethiopiaofficial. On average, you will need to commit 30-40 hours per week.\n\nWhat is in the Foundation programme?\n\t- The ALX Foundations programme is designed to give entry-level tech services employees a strong advantage by providing them with “The ALX Special Sauce”-- a curated combination of meaningful opportunities to learn, practice, and deepen the knowledge, skill sets, and character qualities that are highly desired by employers, but that is not taught in most tech training programs. \n\nCan anyone with no technical background or knowledge join these programmes?\n\t- Absolutely, you do not need any prior knowledge in coding or mathematics to join any of these programs. You will learn the necessary scripting languages within the programme";
  await ctx.reply(message);
});

bot.action("hubs", async (ctx) => {
  let message =
    "When will learning hubs be open?\n\t- We will announce the opening of the hubs when the programmes begin.\n\nIs it mandatory to attend the in-person learning sessions at the hubs?\n\t- Yes, it is mandatory to go to the tech hub in Addis Ababa at least twice a week.\n\nWill the hub be open 24/7?\n\t- The hub will be open 7 days a week and we will release the times in May.\n\nWhat about other students living out of Addis? Is there any working space outside of Addis? Like Adama, Hawassa, or Bahir Dar?\n\t- No, at the moment we only have hubs in Addis Ababa.";
  await ctx.reply(message);
});

let secretPath = `/telegraf/${bot.secretPathComponent()}`;

bot.telegram.setWebhook(`${SERVER_URL}${secretPath}`);

app.use(bot.webhookCallback(secretPath));

console.log(`${SERVER_URL}${secretPath}`);
app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
