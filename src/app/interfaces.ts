export interface Listing {
    listingId?: string,
    listingName?: string,
    listingDescription?: string,
    minSalary?:number,
    maxSalary?:number,
    location?:string,
    listingStartDate?: string,
    listingEndDate?: string,
    isActive?: boolean
    userId?:string
}

export interface Questionnaire{
   questionnaireId? : string,
   questionnaireName? : string, 
   listingId?:string,
   isQuestionnaireManadatory?:boolean
}


export interface QuestionnaireDetails{
    questionnaireDetId? : string,
    questionnaireId? : string,
    htmlElementId? : string, 
    questionnaireQuestion?:string,
    minimumRequirement?:number,
    additionalDetails?:string,
 }

 export interface QuestionnaireDetailOptions{
    questionnaireDetOptId? : string,
    questionnaireDetId? : string,
    questionnaireDetOptName? : number
 }

 export interface HtmlElementTypes{
   htmlElementId?:string,
   htmlElementName?:string,
   htmlElementDesc?:string
 }

 export interface User{

 }

 export interface openAIModel
 {
   id: string,
   object: string,
   created: Date,
   model: string,
   system_fingerprint: string
   choices: [{
     index: number,
     message: {
       role: string,
       content?: string ,
     },
     finish_reason: string
   }],
   usage: {
     prompt_tokens?: number,
     completion_tokens?: number,
     total_tokens?: number
   }
 }
 