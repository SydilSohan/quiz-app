alter table "public"."submissions" drop constraint "public_submissions_quiz_id_fkey";

alter table "public"."submissions" add constraint "submissions_quiz_id_fkey" FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."submissions" validate constraint "submissions_quiz_id_fkey";


