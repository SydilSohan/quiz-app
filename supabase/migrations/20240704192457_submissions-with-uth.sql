create policy "Give anon users access to JPG images in folder 5s44yg_0"
on "storage"."objects"
as permissive
for select
to public
using (true);


create policy "Give anon users access to JPG images in folder 5s44yg_1"
on "storage"."objects"
as permissive
for insert
to public
with check (true);


create policy "Give anon users access to JPG images in folder 5s44yg_2"
on "storage"."objects"
as permissive
for delete
to public
using (true);


create policy "Give anon users access to JPG images in folder 5s44yg_3"
on "storage"."objects"
as permissive
for update
to public
using (true);



