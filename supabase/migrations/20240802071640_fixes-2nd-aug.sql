create type "public"."privacy" as enum ('public', 'private');

drop policy "Restrict write access" on "public"."profiles";

drop policy "Enable read access for all users" on "public"."submissions";

alter table "public"."quizzes" drop constraint "public_quizzes_user_id_fkey";

alter table "public"."quizzes" add column "privacy" privacy not null default 'public'::privacy;

alter table "public"."quizzes" alter column "user_id" set not null;

alter table "public"."quizzes" enable row level security;

alter table "public"."submissions" add column "ended_at" timestamp with time zone;

alter table "public"."submissions" add column "results" jsonb[];

alter table "public"."submissions" alter column "created_at" drop default;

alter table "public"."submissions" alter column "quiz_id" set not null;

alter table "public"."submissions" alter column "submitter" set not null;

alter table "public"."submissions" add constraint "public_submissions_submitter_fkey" FOREIGN KEY (submitter) REFERENCES profiles(id) not valid;

alter table "public"."submissions" validate constraint "public_submissions_submitter_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
begin
  insert into public.profiles (id, first_name, last_name, email)
  values (new.id, new.raw_user_meta_data ->> 'first_name', new.raw_user_meta_data ->> 'last_name', new.email);
  return new;
end;
$function$
;

create policy "Enable delete for users based on user_id"
on "public"."quizzes"
as permissive
for delete
to public
using ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable insert for users based on user_id"
on "public"."quizzes"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = user_id));


create policy "Enable read access for all users"
on "public"."quizzes"
as permissive
for select
to public
using (true);


create policy "Admin access"
on "public"."submissions"
as permissive
for select
to public
using ((EXISTS ( SELECT 1
   FROM quizzes
  WHERE ((quizzes.id = submissions.quiz_id) AND (quizzes.user_id = auth.uid())))));


create policy "logged in"
on "public"."submissions"
as permissive
for insert
to authenticated
with check (true);


create policy "update based on user_id"
on "public"."submissions"
as permissive
for update
to public
using ((( SELECT auth.uid() AS uid) = submitter));



