revoke delete on table "public"."answers" from "anon";

revoke insert on table "public"."answers" from "anon";

revoke references on table "public"."answers" from "anon";

revoke select on table "public"."answers" from "anon";

revoke trigger on table "public"."answers" from "anon";

revoke truncate on table "public"."answers" from "anon";

revoke update on table "public"."answers" from "anon";

revoke delete on table "public"."answers" from "authenticated";

revoke insert on table "public"."answers" from "authenticated";

revoke references on table "public"."answers" from "authenticated";

revoke select on table "public"."answers" from "authenticated";

revoke trigger on table "public"."answers" from "authenticated";

revoke truncate on table "public"."answers" from "authenticated";

revoke update on table "public"."answers" from "authenticated";

revoke delete on table "public"."answers" from "service_role";

revoke insert on table "public"."answers" from "service_role";

revoke references on table "public"."answers" from "service_role";

revoke select on table "public"."answers" from "service_role";

revoke trigger on table "public"."answers" from "service_role";

revoke truncate on table "public"."answers" from "service_role";

revoke update on table "public"."answers" from "service_role";

alter table "public"."answers" drop constraint "public_answers_quiz_fkey";

alter table "public"."answers" drop constraint "answers_pkey";

drop index if exists "public"."answers_pkey";

drop table "public"."answers";

alter table "public"."profiles" disable row level security;

alter table "public"."quizzes" alter column "user_id" drop default;

alter table "public"."quizzes" add constraint "quizzes_user_id_fkey" FOREIGN KEY (user_id) REFERENCES profiles(id) not valid;

alter table "public"."quizzes" validate constraint "quizzes_user_id_fkey";


