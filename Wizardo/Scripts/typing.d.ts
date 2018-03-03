//to enable import from a json file
declare module "*.json" {
    const value: any;
    export default value;
}


//helper interfaces
interface String {
    hashCode: () => number;
}

//Store interfaces
interface Action {
    type: string,
    index?: number,
    value?: string
}

interface Question {
    title: string,
    text: string,
    type: string,
    options: string[],
    value: string
    required: boolean
}

interface QuestionDisplay extends Question {
    isCompleted: boolean;
}

interface Store {
    completed: boolean,
    current: number,
    questions: Question[]
}

//component props interfaces
interface PreviewContainerProps {
    answered: Question[];
}

interface QuestionContainerState {
    isValid: boolean;
    value: string;
}

interface InputProps {
    options?: string[];
    value: string;
    onValueChange: (value:string) => void;
}