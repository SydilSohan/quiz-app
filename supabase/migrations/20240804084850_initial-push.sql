alter table "auth"."audit_log_entries" disable row level security;

alter table "auth"."flow_state" disable row level security;

alter table "auth"."identities" disable row level security;

alter table "auth"."instances" disable row level security;

alter table "auth"."mfa_amr_claims" disable row level security;

alter table "auth"."mfa_challenges" disable row level security;

alter table "auth"."mfa_factors" disable row level security;

alter table "auth"."one_time_tokens" disable row level security;

alter table "auth"."refresh_tokens" disable row level security;

alter table "auth"."saml_providers" disable row level security;

alter table "auth"."saml_relay_states" disable row level security;

alter table "auth"."schema_migrations" disable row level security;

alter table "auth"."sessions" disable row level security;

alter table "auth"."sso_domains" disable row level security;

alter table "auth"."sso_providers" disable row level security;

alter table "auth"."users" disable row level security;


drop function if exists "storage"."operation"();


