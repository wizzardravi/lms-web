export interface Listing {
    listingId?: string,
    listingName?: string,
    listingDescription?: string,
    salary?:number,
    listingStartDate?: string,
    listingEndDate?: string,
    isActive?: boolean
}

export interface Questionnaire{
   questionnaireid? : string,
   questionnairename? : string, 
   listingid?:string,
   isQuestionnaireManadatory?:boolean
}


export interface QuestionnaireDetails{
    questionnairedetid? : string,
    questionnaireid? : string,
    questionnairequestion? : string, 
    minimumrequirement?:string,
    additionaldetails?:string
 }