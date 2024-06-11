alter table "public"."answers" alter column "quiz" set data type bigint using "quiz"::bigint;

alter table "public"."quizzes" add column "answers" jsonb;

alter table "public"."quizzes" add column "inst" text default ''::text;

alter table "public"."quizzes" add column "logo" text;

alter table "public"."quizzes" add column "time" numeric default '20'::numeric;

alter table "public"."quizzes" add column "user_id" uuid default auth.uid();

alter table "public"."quizzes" alter column "image" set default ''::text;

alter table "public"."quizzes" alter column "instructions" set default ''::text;

alter table "public"."quizzes" alter column "name" set default ''::text;

alter table "public"."answers" add constraint "public_answers_quiz_fkey" FOREIGN KEY (quiz) REFERENCES quizzes(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."answers" validate constraint "public_answers_quiz_fkey";

alter table "public"."quizzes" add constraint "public_quizzes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) ON UPDATE RESTRICT ON DELETE RESTRICT not valid;

alter table "public"."quizzes" validate constraint "public_quizzes_user_id_fkey";

create or replace view "public"."exam" as  SELECT quizzes.id,
    quizzes.instructions,
    quizzes.image,
    quizzes.questions,
    quizzes.logo,
    quizzes.inst,
    quizzes."time",
    quizzes.user_id,
    quizzes.name
   FROM quizzes;


create or replace view "public"."userquiz" as  SELECT quizzes.id,
    quizzes.instructions,
    quizzes.image,
    quizzes.questions,
    quizzes.logo,
    quizzes.inst,
    quizzes."time",
    quizzes.user_id,
    quizzes.name
   FROM quizzes;



