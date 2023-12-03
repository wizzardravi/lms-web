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
  displayName?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  photoURL?: string | null,
  providerId?: string | null,
  uid?: string | null,
  providerUserId?:string | null
 }

 export interface KnowledgeBase{
  knowledgeBaseId : number,
  userId : number,
  timeZoneId : number, 
  startDate?:string,
  endDate?:string,
  isValid?:boolean,
  providerUserId?:string
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

 export interface ManageKey{
  manageKeyId : number,
  manageKeyName : string,
  manageKeyValue : string, 
  manageKeyDescription?:string,
  createdDate?:string

}

export interface KnowledgeBaseRelay{
  Q?:string;
  A?:string; 
}
 



export enum MessageRoles {
  SYSTEM = 'system',
  USER = 'user',
  ASSISTANT = 'assistant',
  ERROR = 'error',
  }
  export interface IMessage {
  content: string;
  role: 'user' | 'assistant' | 'system' | 'error';
  }
  export interface IUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  }
  export interface IChoice {
  message?: IMessage;
  finish_reason: string;
  index: number;
  delta?: IMessage;
  }
  export interface ICompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: IUsage;
  choices: IChoice[];
  }