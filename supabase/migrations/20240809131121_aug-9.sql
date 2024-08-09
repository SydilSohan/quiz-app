alter table "auth"."audit_log_entries" enable row level security;

alter table "auth"."flow_state" enable row level security;

alter table "auth"."identities" enable row level security;

alter table "auth"."instances" enable row level security;

alter table "auth"."mfa_amr_claims" enable row level security;

alter table "auth"."mfa_challenges" enable row level security;

alter table "auth"."mfa_factors" enable row level security;

alter table "auth"."one_time_tokens" enable row level security;

alter table "auth"."refresh_tokens" enable row level security;

alter table "auth"."saml_providers" enable row level security;

alter table "auth"."saml_relay_states" enable row level security;

alter table "auth"."schema_migrations" enable row level security;

alter table "auth"."sessions" enable row level security;

alter table "auth"."sso_domains" enable row level security;

alter table "auth"."sso_providers" enable row level security;

alter table "auth"."users" enable row level security;


drop policy "Give anon users access to JPG images in folder 5s44yg_0" on "storage"."objects";

drop policy "Give anon users access to JPG images in folder 5s44yg_1" on "storage"."objects";

drop policy "Give anon users access to JPG images in folder 5s44yg_2" on "storage"."objects";

drop policy "Give anon users access to JPG images in folder 5s44yg_3" on "storage"."objects";

drop policy "dw 5s44yg_0" on "storage"."objects";

drop policy "dw 5s44yg_1" on "storage"."objects";

drop policy "dw 5s44yg_2" on "storage"."objects";

drop policy "dw 5s44yg_3" on "storage"."objects";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION storage.operation()
 RETURNS text
 LANGUAGE plpgsql
 STABLE
AS $function$
BEGIN
    RETURN current_setting('storage.operation', true);
END;
$function$
;

create policy "Enable delete for users based on user_id"
on "storage"."buckets"
as permissive
for delete
to public
using (true);


create policy "Give users access to own folder 5s44yg_0"
on "storage"."objects"
as permissive
for select
to public
using (((bucket_id = 'quizassets'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));


create policy "Give users access to own folder 5s44yg_1"
on "storage"."objects"
as permissive
for insert
to public
with check (((bucket_id = 'quizassets'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));


create policy "Give users access to own folder 5s44yg_2"
on "storage"."objects"
as permissive
for update
to public
using (((bucket_id = 'quizassets'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));


create policy "Give users access to own folder 5s44yg_3"
on "storage"."objects"
as permissive
for delete
to public
using (((bucket_id = 'quizassets'::text) AND (( SELECT (auth.uid())::text AS uid) = (storage.foldername(name))[1])));


create policy "folder access 5s44yg_0"
on "storage"."objects"
as permissive
for delete
to public
using (true);


create policy "folder access 5s44yg_1"
on "storage"."objects"
as permissive
for select
to public
using (true);



drop policy "Id Access" on "public"."profiles";

drop view if exists "public"."exam";

drop view if exists "public"."quizzes_view";

drop view if exists "public"."userquiz";

alter table "public"."profiles" add column "saved" bigint[] not null default '{}'::bigint[];

alter table "public"."profiles" enable row level security;

alter table "public"."quizzes" add column "hidden_answers" boolean not null default true;

alter table "public"."quizzes" add column "neg_marking" real not null default '0'::real;

alter table "public"."quizzes" add column "pass_mark" real not null default '33.33'::real;

alter table "public"."quizzes" add column "retake" boolean not null default false;

alter table "public"."quizzes" alter column "time" drop default;

alter table "public"."submissions" alter column "score" set data type real using "score"::real;

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


create or replace view "public"."quizzes_view" as  SELECT jsonb_set(quizzes.questions, '{answer}'::text[], 'null'::jsonb) AS questions
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


create policy "Enable select for users based on user_id"
on "public"."profiles"
as permissive
for select
to public
using ((( SELECT auth.uid() AS uid) = id));


create policy "update based on userId"
on "public"."profiles"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = id));



