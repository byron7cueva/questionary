export interface Question {
  idQuestion: number | null;
  question: string;
  answere: string;
  idCourse?: number;
  // TODO Temporal por el mock de datps
  id?: string;
}