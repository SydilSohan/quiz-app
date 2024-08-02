create or replace view "public"."quizzes_view" as  SELECT jsonb_set(quizzes.questions, '{answer}'::text[], 'null'::jsonb) AS questions
   FROM quizzes;



