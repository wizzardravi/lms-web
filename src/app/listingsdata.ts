import { Listing, Questionnaire, QuestionnaireDetailOptions, QuestionnaireDetails } from "./interfaces";



export const fakeListings: Listing[] = 
[
    {
      listingId: "1",
      listingName: "Full Stack .Net Developer",
      listingDescription: "Hybrid Work Environment: 40% in-office and up to 60% work-from-home, if desired. Must live within commutable distance from our officeJob Summary\r\n\r\nAs part of a development technology team, individual analyzes business requirements and problems and drives research to design quality technical solutions. This individual will be involved in portions of the full systems life cycle (based on experience/skills) and is responsible for designing, coding, testing, implementing, maintaining and supporting application software that is delivered on time and within budget. Handles complex problems independently and demonstrates analytical thinking. Is able to make judgements and recommendations based on the analysis and interpretation of data.",
      minSalary: 110000,
      maxSalary: 120000,
      location: "Memphis, TN",
      listingStartDate: "2023-08-07T00:00:00",
      listingEndDate: "2023-09-10T00:00:00",
      isActive: false
    },
    {
      listingId: "2",
      listingName: "Full Stack Java Developer",
      listingDescription: "We are seeking an experienced full stack software engineer with strong C# skills to join our team, specifically to design and develop software for medical devices. The ideal candidate will have a passion for building robust and scalable software and will be able to work on both front-end and back-end development tasks.About PhilipsWe are a health technology company. We built our entire company around the belief that every human matters, and we won't stop until everybody everywhere has access to the quality healthcare that we all deserve. Do the work of your life to help the lives of others. • Learn more about our business.• Discover our rich and exciting history.• Learn more about our purpose.If you’re interested in this role and have many, but not all, of the experiences needed, we encourage you to apply. You may still be the right candidate for this or other opportunities at Philips. Learn more about our commitment to diversity and inclusion here.",
      minSalary: 109000,
      maxSalary: 200000,
      location: "Latham",
      listingStartDate: "2023-09-09T00:00:00",
      listingEndDate: "2023-10-11T00:00:00",
      isActive: true
    },
    {
      listingId: "3",
      listingName: "Data Architect",
      listingDescription: "This role is for data archicitent to analyze the sql database events for performance tuning",
      minSalary: 140000,
      maxSalary: 180000,
      location: "Tampa, FL",
      listingStartDate: "2023-08-07T00:00:00",
      listingEndDate: "2023-08-09T00:00:00",
      isActive: true
    },
    {
      listingId: "4",
      listingName: "Oracle Speacialist",
      listingDescription: "Database Expert",
      minSalary: 100000,
      maxSalary: 200000,
      location: "A",
      listingStartDate: "2023-07-22T11:58:24.537",
      listingEndDate: "2023-07-22T11:58:24.537",
      isActive: true
    }
  ]

export const fakeQuestionnaire: Questionnaire[] = 
[
    {
      questionnaireId: "1",
      questionnaireName: ".NET FULL STACK",
      listingId: "1",
      isQuestionnaireManadatory: true
    }
  ]

export const fakeQuestionnaireDetails: QuestionnaireDetails[] = 
[
    {
        questionnaireDetId : "1",
        questionnaireId : "1",
        questionnaireQuestion : "How many years of .NET experience do you have?", 
        minimumRequirement:5,
        htmlElementId:"1",
        additionalDetails:"This position requires a minimum of 5 years .net application debug, develop and maintain experience."
}
]

export const fakeQuestionnaireDetOps: QuestionnaireDetailOptions[] = 
[
    {
        questionnaireDetId : "1",
        questionnaireDetOptId : "1",
        questionnaireDetOptName : 2022
}
]