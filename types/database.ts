import { MergeDeep } from 'type-fest'
import { Database as DatabaseGenerated, Tables as TablesGenerated  } from './supabase';
import {AnswerColumnType, AnswerType, QuestionColumnType, QuestionType} from './schemas'
export type { Json } from './supabase'

// Override the type for a specific column in a view:
export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
        Tables : {
            quizzes : {
                Row : {
                    questions: QuestionColumnType[];
                    answers : AnswerColumnType[];
                }
                Insert : {
                   questions: QuestionColumnType[];
                    answers : AnswerColumnType[];
                }
                Update : {
                    questions: QuestionColumnType[];
                    answers : AnswerColumnType[];
                }
            }
        }
        Views : {
          exam  : {
            Row : {
              questions: QuestionColumnType[];
            
            }
            Insert : {
              questions: QuestionColumnType[];
            
            },
            Update : {
              questions: QuestionColumnType[];
            }
          }
        }
    }
  }
>

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never
