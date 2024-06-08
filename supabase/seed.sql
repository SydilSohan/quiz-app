SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.6 (Ubuntu 15.6-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'e3ac85d1-5dd6-41e4-91ae-982bb861a212', '{"action":"user_signedup","actor_id":"c94477f8-a406-4889-8b62-84c347eb1d73","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-06 16:09:53.621153+00', ''),
	('00000000-0000-0000-0000-000000000000', '5611e3d4-07d8-49e5-9016-6e6bba97316b', '{"action":"login","actor_id":"c94477f8-a406-4889-8b62-84c347eb1d73","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-06 16:09:53.637959+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b43376e2-5d05-4dbf-9dd4-c8ac0d43ec9f', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"sydil420@gmail.com","user_id":"e8173199-f53b-41c2-a62e-d93eaaf4005f","user_phone":""}}', '2024-06-06 16:37:03.634168+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf3543d0-cf90-49f1-961b-45f089d7c24f', '{"action":"user_signedup","actor_id":"36463b4f-a933-4f24-b255-32a79088990a","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-06 16:37:58.863046+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c5a5d4f-b2e9-42e2-aacc-bbeb69847a4b', '{"action":"login","actor_id":"36463b4f-a933-4f24-b255-32a79088990a","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-06 16:37:58.867129+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a0900fb5-4870-48c9-a8d0-8daf4bbd7cb8', '{"action":"logout","actor_id":"36463b4f-a933-4f24-b255-32a79088990a","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-06 17:31:08.157437+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa556589-417d-4eb3-aa1e-b636e21a71ad', '{"action":"user_recovery_requested","actor_id":"36463b4f-a933-4f24-b255-32a79088990a","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"user"}', '2024-06-06 17:32:49.555161+00', ''),
	('00000000-0000-0000-0000-000000000000', '47c86b70-8210-4593-b6c5-2b741e269e80', '{"action":"user_repeated_signup","actor_id":"e8173199-f53b-41c2-a62e-d93eaaf4005f","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-06-06 17:34:17.399981+00', ''),
	('00000000-0000-0000-0000-000000000000', '289e16ae-1189-4bfe-a040-32eb8c0506f3', '{"action":"user_signedup","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-06 17:34:31.279933+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a3ebcbf5-3d24-4e89-a8cc-b1cd30d28014', '{"action":"login","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-06 17:34:31.286261+00', ''),
	('00000000-0000-0000-0000-000000000000', '16d7b236-33be-49aa-99e3-7fdab09cb763', '{"action":"logout","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-06 17:34:33.877443+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bb39b470-4a00-474f-8acd-eace75ec3be0', '{"action":"login","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-06 17:34:58.978697+00', ''),
	('00000000-0000-0000-0000-000000000000', '0632ed57-6489-4497-9877-2447e76c414f', '{"action":"logout","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-06 17:35:01.096508+00', ''),
	('00000000-0000-0000-0000-000000000000', '5305afcb-e000-42a4-a792-b6ea908b6ac0', '{"action":"login","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-06 17:35:43.033203+00', ''),
	('00000000-0000-0000-0000-000000000000', '67fe3d0f-8991-4216-bda1-07a54dcba194', '{"action":"logout","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-06 17:35:45.044972+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab5ac714-3302-4bfb-b9e3-8c39750f2aaa', '{"action":"user_repeated_signup","actor_id":"e8173199-f53b-41c2-a62e-d93eaaf4005f","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-06-08 04:19:33.010952+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aaa661da-ad80-40cf-85c1-4483b87b5d53', '{"action":"user_repeated_signup","actor_id":"8a6bba5c-c9ca-4cde-b95d-4378a4eddcab","actor_username":"sydilgrounded@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-06-08 04:19:43.145758+00', ''),
	('00000000-0000-0000-0000-000000000000', '4da4c678-5440-437e-84fd-335176223124', '{"action":"user_signedup","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-06-08 04:20:16.47068+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e501812-5bee-4332-9361-3e4f35f49bd6', '{"action":"login","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-08 04:20:16.479818+00', ''),
	('00000000-0000-0000-0000-000000000000', '8c72bc69-b5ec-4a13-8501-fb0779e80865', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 06:40:57.208388+00', ''),
	('00000000-0000-0000-0000-000000000000', '11319474-f863-4751-a542-4aa8af4e2572', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 06:40:57.21122+00', ''),
	('00000000-0000-0000-0000-000000000000', '358c9671-27cb-47bc-ae82-8702d6409fc7', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 07:39:26.718023+00', ''),
	('00000000-0000-0000-0000-000000000000', '4f185eaa-525c-4ab9-b34d-d9ea91793cc1', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 07:39:26.727201+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6638bde-f82c-49d4-ada9-4795cb6fe549', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 08:57:34.023184+00', ''),
	('00000000-0000-0000-0000-000000000000', '93ef38d0-2d30-40a8-95a2-125c4b4ee76b', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 08:57:34.030239+00', ''),
	('00000000-0000-0000-0000-000000000000', '23e911b5-e6ac-4445-a330-ee68ecd1d46a', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 10:33:05.696167+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f96f67f8-c7a7-4747-8bcc-8645461f65ed', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 10:33:05.706391+00', ''),
	('00000000-0000-0000-0000-000000000000', '078931e8-bad8-4db2-a968-6923e80b0584', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 13:05:54.470958+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a9373ced-c92d-4d31-a678-bc5b182481d6', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 13:05:54.485628+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd56ba26c-6004-4136-a96f-4e65636c85d7', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 14:05:10.927472+00', ''),
	('00000000-0000-0000-0000-000000000000', '526ba281-b7b6-4399-868b-b990b16c3a90', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 14:05:10.93842+00', ''),
	('00000000-0000-0000-0000-000000000000', '00155574-d6f3-4cff-bb44-f8987f41d9d8', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 15:05:46.313769+00', ''),
	('00000000-0000-0000-0000-000000000000', '6421120e-431e-419d-a090-3ef493bba7bc', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 15:05:46.322426+00', ''),
	('00000000-0000-0000-0000-000000000000', '084361e8-4b62-4d42-abf6-770930db5121', '{"action":"token_refreshed","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 16:07:18.637655+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2a5bb82-a39a-4c5b-994f-7c3528013740', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 16:07:18.658852+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('f0e11e39-b92b-42a2-bce9-2cc18b7c49a0', '36463b4f-a933-4f24-b255-32a79088990a', 'aa480d56-c126-4706-8de4-0ffc816c5eaf', 's256', 'dBtPZ_8uFth5JLepXXsQSRhkgDQXn6_9UQsqhuc8ZE4', 'recovery', '', '', '2024-06-06 17:32:49.529396+00', '2024-06-06 17:32:49.529396+00', 'recovery', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '36463b4f-a933-4f24-b255-32a79088990a', 'authenticated', 'authenticated', 'mdsohan383@gmail.com', '$2a$10$7fx38VjqvjCRLS6Jq12kTuNASc16iD3sU.hEu7tByWqdSVU05.cRG', '2024-06-06 16:37:58.864026+00', NULL, '', NULL, 'pkce_bd741a048d0b82bd4475959225fbeec007742e9821df0bcd7dd940ca', '2024-06-06 17:32:49.562993+00', '', '', NULL, '2024-06-06 16:37:58.867924+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "36463b4f-a933-4f24-b255-32a79088990a", "email": "mdsohan383@gmail.com", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', NULL, '2024-06-06 16:37:58.852473+00', '2024-06-06 17:32:49.668356+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '8a6bba5c-c9ca-4cde-b95d-4378a4eddcab', 'authenticated', 'authenticated', 'sydilgrounded@gmail.com', '$2a$10$MDCw4u2D91Gsmdq7Fb1EY.zXKTf/RUStFN2eKL6xjSlEUXjsKySC6', '2024-06-06 17:34:31.281093+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-06 17:35:43.034458+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "8a6bba5c-c9ca-4cde-b95d-4378a4eddcab", "email": "sydilgrounded@gmail.com", "last_name": "Sohan", "first_name": "Sydil", "email_verified": false, "phone_verified": false}', NULL, '2024-06-06 17:34:31.216904+00', '2024-06-06 17:35:43.039149+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'e8173199-f53b-41c2-a62e-d93eaaf4005f', 'authenticated', 'authenticated', 'sydil420@gmail.com', '$2a$10$tthxmuon4dv3BQpPXcFd4e1ymHUujDErv5figU9YlZVAb0engH0UG', '2024-06-06 16:37:03.636989+00', NULL, '', NULL, '', NULL, '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-06 16:37:03.631306+00', '2024-06-06 16:37:03.637588+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'b409af35-6819-4ecd-9616-d27120a88751', 'authenticated', 'authenticated', 's26-2019614935@ier.du.ac.bd', '$2a$10$SoRosfBWL17x3a9S58INb.LFgwANndAi633La//.HpoB4/KY2UZhu', '2024-06-08 04:20:16.472407+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-08 04:20:16.480505+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "b409af35-6819-4ecd-9616-d27120a88751", "email": "s26-2019614935@ier.du.ac.bd", "last_name": "Sohan", "first_name": "Sydil", "email_verified": false, "phone_verified": false}', NULL, '2024-06-08 04:20:16.441756+00', '2024-06-08 16:07:18.688775+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('e8173199-f53b-41c2-a62e-d93eaaf4005f', 'e8173199-f53b-41c2-a62e-d93eaaf4005f', '{"sub": "e8173199-f53b-41c2-a62e-d93eaaf4005f", "email": "sydil420@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-06 16:37:03.633026+00', '2024-06-06 16:37:03.63307+00', '2024-06-06 16:37:03.63307+00', '2f35af00-d20d-4c53-880c-1042c9e49fdc'),
	('36463b4f-a933-4f24-b255-32a79088990a', '36463b4f-a933-4f24-b255-32a79088990a', '{"sub": "36463b4f-a933-4f24-b255-32a79088990a", "email": "mdsohan383@gmail.com", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', 'email', '2024-06-06 16:37:58.857987+00', '2024-06-06 16:37:58.858022+00', '2024-06-06 16:37:58.858022+00', '376ddc9a-9198-4a71-a7a7-b51c553d8575'),
	('8a6bba5c-c9ca-4cde-b95d-4378a4eddcab', '8a6bba5c-c9ca-4cde-b95d-4378a4eddcab', '{"sub": "8a6bba5c-c9ca-4cde-b95d-4378a4eddcab", "email": "sydilgrounded@gmail.com", "last_name": "Sohan", "first_name": "Sydil", "email_verified": false, "phone_verified": false}', 'email', '2024-06-06 17:34:31.269135+00', '2024-06-06 17:34:31.269185+00', '2024-06-06 17:34:31.269185+00', 'e9e8f717-85d2-43d7-81da-42f5efd05b64'),
	('b409af35-6819-4ecd-9616-d27120a88751', 'b409af35-6819-4ecd-9616-d27120a88751', '{"sub": "b409af35-6819-4ecd-9616-d27120a88751", "email": "s26-2019614935@ier.du.ac.bd", "last_name": "Sohan", "first_name": "Sydil", "email_verified": false, "phone_verified": false}', 'email', '2024-06-08 04:20:16.462434+00', '2024-06-08 04:20:16.462516+00', '2024-06-08 04:20:16.462516+00', 'e997a2f3-145f-47df-b87c-ef51e6c41182');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('17c38c76-f1d2-4063-a7fe-5621a1d2efb2', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 04:20:16.481099+00', '2024-06-08 16:07:18.715191+00', NULL, 'aal1', NULL, '2024-06-08 16:07:18.715124', 'Next.js Middleware', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('17c38c76-f1d2-4063-a7fe-5621a1d2efb2', '2024-06-08 04:20:16.494685+00', '2024-06-08 04:20:16.494685+00', 'password', '76784498-919c-4879-a150-07738f718a95');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") VALUES
	('4ab82c90-372e-4f44-870b-9f6c0cf2838e', '36463b4f-a933-4f24-b255-32a79088990a', 'recovery_token', 'pkce_bd741a048d0b82bd4475959225fbeec007742e9821df0bcd7dd940ca', 'mdsohan383@gmail.com', '2024-06-06 17:32:49.700017', '2024-06-06 17:32:49.700017');


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 6, 'eYGDLeywXMK6qBAQEBGeZg', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 04:20:16.485669+00', '2024-06-08 06:40:57.211957+00', NULL, '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 7, 'FKRts0X0udavkIy4IMXa9g', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 06:40:57.213881+00', '2024-06-08 07:39:26.728214+00', 'eYGDLeywXMK6qBAQEBGeZg', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 8, '3jrh1o5YmzPNFM-ZR-TKTw', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 07:39:26.73316+00', '2024-06-08 08:57:34.031313+00', 'FKRts0X0udavkIy4IMXa9g', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 9, 'rRobIbzJn68UhQMbJj3fQA', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 08:57:34.034979+00', '2024-06-08 10:33:05.713161+00', '3jrh1o5YmzPNFM-ZR-TKTw', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 10, 'M20Uqz7-gwYd5fmyVupv6A', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 10:33:05.721167+00', '2024-06-08 13:05:54.490836+00', 'rRobIbzJn68UhQMbJj3fQA', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 11, 'PeL0WjLj7cBbwmlTKm5fUg', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 13:05:54.501083+00', '2024-06-08 14:05:10.940839+00', 'M20Uqz7-gwYd5fmyVupv6A', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 12, '-o9LBXKmVdRdF6yS6ApWYw', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 14:05:10.949246+00', '2024-06-08 15:05:46.324071+00', 'PeL0WjLj7cBbwmlTKm5fUg', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 13, 'dkIuFyNzqyoiBRknDlfcvQ', 'b409af35-6819-4ecd-9616-d27120a88751', true, '2024-06-08 15:05:46.331033+00', '2024-06-08 16:07:18.660197+00', '-o9LBXKmVdRdF6yS6ApWYw', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2'),
	('00000000-0000-0000-0000-000000000000', 14, 'OYt1EPvbFgUa10G0_dAHHg', 'b409af35-6819-4ecd-9616-d27120a88751', false, '2024-06-08 16:07:18.679818+00', '2024-06-08 16:07:18.679818+00', 'dkIuFyNzqyoiBRknDlfcvQ', '17c38c76-f1d2-4063-a7fe-5621a1d2efb2');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: answers; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "email", "metadata", "first_name", "last_name") VALUES
	('b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:05:46.303285+00', 's26-2019614935@ier.du.ac.bd', '{"sub": "b409af35-6819-4ecd-9616-d27120a88751", "email": "s26-2019614935@ier.du.ac.bd", "last_name": "Sohan", "first_name": "Sydil", "email_verified": false, "phone_verified": false}', 'Sydil', 'Sohan');


--
-- Data for Name: quizzes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."quizzes" ("id", "created_at", "questions", "instructions", "name", "image") VALUES
	(9, '2024-06-08 15:58:24.659409+00', '[{"id": 0, "name": "test", "type": "sampling", "image": "01-Explore.jpg", "answer": "A", "options": ["A", "B", "C", "D"]}, {"id": 1, "name": "test", "type": "fill", "image": "1_BlSOcG0cCdJ_j7uLWh3STA.jpeg", "answer": "example answer", "options": []}, {"id": 2, "name": "Example True False Statement", "type": "truefalse", "image": "1.png", "answer": "True", "options": ["True", "False"]}, {"id": 3, "name": "test", "type": "mcq", "image": "3-devices-white.png", "answer": "A", "options": ["A", "B", "C"]}]', 'test', 'test', NULL),
	(8, '2024-06-08 14:21:47.948287+00', '[{"id": 0, "name": "test", "type": "mcq", "image": "image_2024_05_31T13_51_29_985Z.png", "answer": "A", "options": ["A", "B", "C", "D"]}, {"id": 1, "name": "test", "type": "sampling", "image": "6103980f7b7ea076d550c565_hero.png", "answer": "A", "options": ["A", "B", "C"]}, {"id": 2, "name": "test", "type": "fill", "image": "5.jpg", "answer": "example", "options": []}]', 'test', 'test', NULL);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('assets', 'assets', NULL, '2024-06-06 17:36:07.428616+00', '2024-06-06 17:36:07.428616+00', true, false, NULL, NULL, NULL),
	('quizassets', 'quizassets', NULL, '2024-06-08 09:52:23.436112+00', '2024-06-08 09:52:23.436112+00', true, false, 2097152, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('6cccd352-2a9d-4c7b-bc6f-84292dd0a5d6', 'quizassets', 'quizassets/Screenshot (9).png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 10:36:14.504008+00', '2024-06-08 10:36:14.504008+00', '2024-06-08 10:36:14.504008+00', '{"eTag": "\"bed0a2fa80544e3c099643fd03351ceb\"", "size": 1187642, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T10:36:14.420Z", "contentLength": 1187642, "httpStatusCode": 200}', 'dce2ec21-a8b8-4a81-ac9b-cfb32027f455', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('1d28b65a-9221-42e9-96c2-14d4c98a9b1f', 'quizassets', 'undefined', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 13:44:50.526539+00', '2024-06-08 13:44:50.526539+00', '2024-06-08 13:44:50.526539+00', '{"eTag": "\"fc5e430b42f57adf09aaca6f05927021\"", "size": 29, "mimetype": "text/plain;charset=UTF-8", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T13:44:50.489Z", "contentLength": 29, "httpStatusCode": 200}', '4bb9b2bd-e824-46a8-baaa-2024d783f8e1', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('ad6ef356-7180-413c-87b5-bed9696c311d', 'quizassets', 'Target_Bullseye-Logo_Black.jpg', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 14:07:59.867469+00', '2024-06-08 14:07:59.867469+00', '2024-06-08 14:07:59.867469+00', '{"eTag": "\"ed62e465a695930d394d5d9db164001b\"", "size": 1252066, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T14:07:59.611Z", "contentLength": 1252066, "httpStatusCode": 200}', 'e003df45-8cdd-4b64-80bd-963037993cd0', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('40149b23-bc65-4657-ac66-dfdc32351b86', 'quizassets', 'RJ-Headshot-min.png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 14:07:59.883679+00', '2024-06-08 14:07:59.884719+00', '2024-06-08 14:07:59.883679+00', '{"eTag": "\"0236da5c281e1cbaafba5cafa6dad8ce\"", "size": 1658027, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T14:07:59.611Z", "contentLength": 1658027, "httpStatusCode": 200}', '6d1863f2-2a11-4373-9e36-3e6124e43cef', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('5776917e-2361-4949-8e19-eea7268a5eb0', 'quizassets', '6103980f7b7ea076d550c565_hero.png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:36:13.678407+00', '2024-06-08 15:36:13.678407+00', '2024-06-08 15:36:13.678407+00', '{"eTag": "\"d257df409f515172638348506c9a9e86\"", "size": 44116, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:36:13.625Z", "contentLength": 44116, "httpStatusCode": 200}', '493f4fd9-be3f-44a1-baf1-a9560c0d4a05', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('9eb70aaf-10a8-492d-964b-fc214af6db57', 'quizassets', 'image_2024_05_31T13_51_29_985Z.png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:38:39.699394+00', '2024-06-08 15:38:39.699394+00', '2024-06-08 15:38:39.699394+00', '{"eTag": "\"6567b9b670291aa21b359ac65f9ed428\"", "size": 32772, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:38:39.681Z", "contentLength": 32772, "httpStatusCode": 200}', 'b030c2be-b373-4e05-8723-4749460b9eb5', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('156fb4b2-6b26-4437-843b-bd2ccdb05e2e', 'quizassets', '5.jpg', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:43:19.237612+00', '2024-06-08 15:43:19.237612+00', '2024-06-08 15:43:19.237612+00', '{"eTag": "\"efc067af08802a307c20ac6fdf6f3028\"", "size": 104678, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:43:19.213Z", "contentLength": 104678, "httpStatusCode": 200}', '6ee7d73e-db3a-4985-bb77-cdecc771f14b', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('6a27471d-20f6-4d5b-915e-d832da4e1f2d', 'quizassets', '01-Explore.jpg', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:58:24.268752+00', '2024-06-08 15:58:24.268752+00', '2024-06-08 15:58:24.268752+00', '{"eTag": "\"8e89ac316ad6b8fd8ebc618786e1111f\"", "size": 91171, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:58:24.204Z", "contentLength": 91171, "httpStatusCode": 200}', 'fa2800e1-5e25-42a1-8aee-eeed13b5283b', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('0a9b4954-637b-4ed6-bf41-76cfa21e6ffc', 'quizassets', '3-devices-white.png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:58:24.376116+00', '2024-06-08 15:58:24.376116+00', '2024-06-08 15:58:24.376116+00', '{"eTag": "\"81d739af0a15d54f250e9f1057b3942b\"", "size": 271892, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:58:24.204Z", "contentLength": 271892, "httpStatusCode": 200}', '8e34d79b-4953-4bce-ab50-4431c93c69ba', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('d392177e-d2e2-4ced-ad58-b7e3b6358b2c', 'quizassets', '1_BlSOcG0cCdJ_j7uLWh3STA.jpeg', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:58:24.362798+00', '2024-06-08 15:58:24.362798+00', '2024-06-08 15:58:24.362798+00', '{"eTag": "\"54e503e427ceb1c987a07423ad63cced\"", "size": 245111, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:58:24.204Z", "contentLength": 245111, "httpStatusCode": 200}', '08f97b10-df9e-4456-82cc-5b888cb6e67d', 'b409af35-6819-4ecd-9616-d27120a88751'),
	('b3c2b892-0817-43f9-9e8e-5f913e61700c', 'quizassets', '1.png', 'b409af35-6819-4ecd-9616-d27120a88751', '2024-06-08 15:58:24.540386+00', '2024-06-08 15:58:24.540386+00', '2024-06-08 15:58:24.540386+00', '{"eTag": "\"895342e715aadcb5ac23a3dbb2fad4fe\"", "size": 1036560, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-06-08T15:58:24.204Z", "contentLength": 1036560, "httpStatusCode": 200}', 'bde6b609-21e0-43e4-9692-d5276256a89e', 'b409af35-6819-4ecd-9616-d27120a88751');


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 14, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: answers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."answers_id_seq"', 1, false);


--
-- Name: quizzes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."quizzes_id_seq"', 9, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
