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