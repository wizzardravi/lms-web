import { Listing, Questionnaire, QuestionnaireDetails } from "./interfaces";



export const fakeListings: Listing[] = 
[
    {
    listingId:"1",
    listingName:"Full Stack Angular .NET Lead",
    listingDescription:"Full Stack Angular .NET Lead Some desc for job roles, responsibilities, day to day tasks, required skillset...",
    salary:6200,
    listingStartDate:"07/18/2023",
    listingEndDate:"08/18/2023",
    isActive:true
    },
    {
        listingId:"3",
    listingName:"Full Stack Angular JAVA Lead",
    listingDescription:"Full Stack Angular JAVA Lead Some desc for job roles, responsibilities, day to day tasks, required skillset...",
    salary:6300,
    listingStartDate:"07/19/2023",
    listingEndDate:"07/19/2023",
    isActive:true
    },
    {
        listingId:"4",
        listingName:"Oracle Administrator",
        listingDescription:"Oracle Administrator Some desc for job roles, responsibilities, day to day tasks, required skillset...",
        salary:7500,
        listingStartDate:"07/18/2023",
        listingEndDate:"08/18/2023",
        isActive:true
        },
        {
            listingId:"5",
        listingName:"Sales Force Architect",
        listingDescription:"Some desc for job roles, responsibilities, day to day tasks, required skillset...",
        salary:8200,
        listingStartDate:"07/19/2023",
        listingEndDate:"07/19/2023",
        isActive:true
        },
        {
            listingId:"6",
            listingName:"MuleSoft Developer",
            listingDescription:"MuleSoft Developer Some desc for job roles, responsibilities, day to day tasks, required skillset...",
            salary:5200,
            listingStartDate:"07/18/2023",
            listingEndDate:"08/18/2023",
            isActive:true
            },
            {
                listingId:"7",
            listingName:"Hana Developer",
            listingDescription:"Hana Developer Some desc for job roles, responsibilities, day to day tasks, required skillset...",
            salary:4800,
            listingStartDate:"07/19/2023",
            listingEndDate:"07/19/2023",
            isActive:true
            },
            {
                listingId:"8",
                listingName:"SAP Architect",
                listingDescription:"SAP Architect Some desc for job roles, responsibilities, day to day tasks, required skillset...",
                salary:8800,
                listingStartDate:"07/18/2023",
                listingEndDate:"08/18/2023",
                isActive:true
                },
                {
                    listingId:"9",
                listingName:"Microsoft Business Intelligence",
                listingDescription:"MSBI Some desc for job roles, responsibilities, day to day tasks, required skillset...",
                salary:9200,
                listingStartDate:"07/19/2023",
                listingEndDate:"07/19/2023",
                isActive:true
                }
]

export const fakeQuestionnaire: Questionnaire[] = 
[
    {
    questionnaireid : "1",
    questionnairename : "Full Stack .Net", 
    listingid:"1",
    isQuestionnaireManadatory:true
},
{
    questionnaireid : "2",
    questionnairename : "Full Stack Java", 
    listingid:"3",
    isQuestionnaireManadatory:true
},
{
    questionnaireid : "3",
    questionnairename : "Oracle Administrator", 
    listingid:"4",
    isQuestionnaireManadatory:true
},
{
    questionnaireid : "5",
    questionnairename : "Sales Force Architect", 
    listingid:"5",
    isQuestionnaireManadatory:true
}
]

export const fakeQuestionnaireDetails: QuestionnaireDetails[] = 
[
    {
        questionnairedetid : "1",
        questionnaireid : "1",
        questionnairequestion : "How many years of .NET experience do you have?", 
        minimumrequirement:"5",
        additionaldetails:"This position requires a minimum of 5 years .net application debug, develop and maintain experience."
},
{
        questionnairedetid : "2",
        questionnaireid : "1",
        questionnairequestion : "How many years of Angular experience do you have?", 
        minimumrequirement:"5",
        additionaldetails:"This position requires a minimum of 5 years Angular debug, develop and maintain experience."
},
{
    questionnairedetid : "3",
    questionnaireid : "3",
    questionnairequestion : "How many years of Java experience do you have?", 
    minimumrequirement:"5",
    additionaldetails:"This position requires a minimum of 9 years .net application debug, develop and maintain experience."
},
{
    questionnairedetid : "4",
    questionnaireid : "3",
    questionnairequestion : "How many years of Angular experience do you have?", 
    minimumrequirement:"5",
    additionaldetails:"This position requires a minimum of 9 years Angular debug, develop and maintain experience."
}
]