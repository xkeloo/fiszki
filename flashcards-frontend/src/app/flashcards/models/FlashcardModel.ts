export interface FlashcardModel {
    id: number;
    question: string;
    answer: string;
    toRemind: boolean;
    userId: string;
    userName: string;
}