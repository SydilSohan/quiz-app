SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

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
	('00000000-0000-0000-0000-000000000000', 'e2a5bb82-a39a-4c5b-994f-7c3528013740', '{"action":"token_revoked","actor_id":"b409af35-6819-4ecd-9616-d27120a88751","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-06-08 16:07:18.658852+00', ''),
	('00000000-0000-0000-0000-000000000000', '34c7027f-d478-4797-b27d-dccdc40e53c4', '{"action":"user_repeated_signup","actor_id":"36463b4f-a933-4f24-b255-32a79088990a","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-07-04 18:36:54.883657+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f38962d4-b4f9-4f6a-adf1-17e24d98fa54', '{"action":"user_repeated_signup","actor_id":"e8173199-f53b-41c2-a62e-d93eaaf4005f","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-07-04 18:37:21.256755+00', ''),
	('00000000-0000-0000-0000-000000000000', '596afde4-5236-47c9-a5a3-1d3a7168cbbd', '{"action":"user_signedup","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-04 18:37:36.556734+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d87803b-a7bd-4f59-b46e-268a773829aa', '{"action":"login","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-04 18:37:36.562712+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab5bb03a-6040-4167-9fb8-25b2bdbf9573', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 11:36:38.351141+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ad35c8e6-9d95-4bef-a39a-f8ba3dfe5e3a', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 11:36:38.367818+00', ''),
	('00000000-0000-0000-0000-000000000000', '354151fa-8a6c-448a-9495-43cb1b7c9fcb', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:04.768657+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd22e1d08-fa33-4b4c-9c34-9cb381be6427', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:04.833654+00', ''),
	('00000000-0000-0000-0000-000000000000', '4903fbe4-1273-4036-8832-847fd5097239', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:04.98561+00', ''),
	('00000000-0000-0000-0000-000000000000', '202f36bb-cc1d-45d0-8c35-57dd6dfcfe5d', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:05.037069+00', ''),
	('00000000-0000-0000-0000-000000000000', '20b574f8-dcc0-4920-9997-2fdfb5416df1', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:05.063081+00', ''),
	('00000000-0000-0000-0000-000000000000', '62ea3094-9609-469f-929b-9b024d71be2e', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:05.080462+00', ''),
	('00000000-0000-0000-0000-000000000000', '4bfb8a09-44c6-44ef-ab03-bc3c2a1679d5', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 12:46:05.097121+00', ''),
	('00000000-0000-0000-0000-000000000000', '079c1ace-7567-41e8-9550-bdc42ce25a40', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 13:48:07.764077+00', ''),
	('00000000-0000-0000-0000-000000000000', '190a6192-1ccf-4f1c-9bd7-0347d5306ed8', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 13:48:07.782016+00', ''),
	('00000000-0000-0000-0000-000000000000', '7670d84a-9a3c-4151-ae87-d11e0b10bbe1', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 16:31:24.55606+00', ''),
	('00000000-0000-0000-0000-000000000000', '11394a7d-ce4f-413e-b1ed-625cf49d473d', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 16:31:24.563349+00', ''),
	('00000000-0000-0000-0000-000000000000', '77447e6e-f2e5-484e-9bbe-f3923b37db37', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"test@test.com","user_id":"e8eb1dce-c5b8-4ca4-aad1-1d060d82ca7e","user_phone":""}}', '2024-07-05 16:47:34.164921+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aa8458c6-2fd8-4476-82c2-03218c601965', '{"action":"user_signedup","actor_id":"fb69c52b-7476-4be8-b6a8-9b72af76364c","actor_username":"admin@axialmanagement.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-05 16:48:29.779974+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7a6f332-793d-4fa0-b484-5c5d43ecaef7', '{"action":"login","actor_id":"fb69c52b-7476-4be8-b6a8-9b72af76364c","actor_username":"admin@axialmanagement.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-05 16:48:29.785+00', ''),
	('00000000-0000-0000-0000-000000000000', '6fea8a73-4c64-4cf3-b380-2276e01e9e85', '{"action":"logout","actor_id":"fb69c52b-7476-4be8-b6a8-9b72af76364c","actor_username":"admin@axialmanagement.com","actor_via_sso":false,"log_type":"account"}', '2024-07-05 16:49:07.16491+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cb60462b-bace-4766-9877-4404e1c4095b', '{"action":"user_signedup","actor_id":"ea0993cd-2a44-4642-b2e0-98e80d5bec6d","actor_username":"test@sbrf.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-05 16:49:32.925767+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3f63316-e10d-44e8-ba39-39922a4c7b8f', '{"action":"login","actor_id":"ea0993cd-2a44-4642-b2e0-98e80d5bec6d","actor_username":"test@sbrf.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-05 16:49:32.929423+00', ''),
	('00000000-0000-0000-0000-000000000000', '5866226f-67b6-431a-9b6d-1e44a50abfdd', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"handlenew@test.com","user_id":"0cbc30fb-216f-4b7f-a3d3-5715ed1a258c","user_phone":""}}', '2024-07-05 16:52:03.333376+00', ''),
	('00000000-0000-0000-0000-000000000000', '1381f5d3-108c-4722-8c25-570b0f65c565', '{"action":"user_signedup","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-05 16:53:21.555933+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd1f4367c-03c8-400f-9b10-1e20fcba7025', '{"action":"login","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-05 16:53:21.560087+00', ''),
	('00000000-0000-0000-0000-000000000000', '18634f37-2075-4b0a-8e09-6f36f40a1277', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-05 18:03:01.6684+00', ''),
	('00000000-0000-0000-0000-000000000000', '887f3457-8848-4439-a470-27111239acc1', '{"action":"token_revoked","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-05 18:03:01.680285+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e4c32b1c-b381-4a35-8ec1-a44a35894c21', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 18:14:06.854732+00', ''),
	('00000000-0000-0000-0000-000000000000', '1da6aa3c-4eec-46e6-bd1e-11389577d33e', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-05 18:14:06.858155+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a255ea9e-691e-4e7c-a8e8-1d636939aca9', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-06 16:55:55.539496+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e18de278-93ed-425f-a6ea-a0748b9ae2bf', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-06 16:55:55.551297+00', ''),
	('00000000-0000-0000-0000-000000000000', '52ce9aee-0e2b-47cd-ab71-07669e3b8a41', '{"action":"token_refreshed","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-12 15:12:03.941261+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c9f30033-6ae8-4c56-a417-5ee22fea346e', '{"action":"token_revoked","actor_id":"f55d4c8b-c81a-48ca-880a-d193d85ec86a","actor_username":"sydil420@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-12 15:12:03.950282+00', ''),
	('00000000-0000-0000-0000-000000000000', '254f9ee3-f0be-4ea7-ab14-8a0641a3e672', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 15:58:34.524406+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c2fbc2f5-a522-4150-b21a-cdc04a99fdd6', '{"action":"token_revoked","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 15:58:34.537245+00', ''),
	('00000000-0000-0000-0000-000000000000', '73a7de02-a819-4c97-aa3b-5df5cfefbba1', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 16:00:01.020141+00', ''),
	('00000000-0000-0000-0000-000000000000', '69236af1-9c0a-45ea-a495-d96a551f64d1', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 16:04:29.806087+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f591111b-0963-49c1-b6d0-36b24430b0b2', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 16:04:33.639677+00', ''),
	('00000000-0000-0000-0000-000000000000', '060990c9-da12-4e21-8f3c-b558295acab9', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 16:04:53.322217+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab8e2a87-9c42-48bb-8315-941f0dfb90a7', '{"action":"token_refreshed","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 17:12:42.144333+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f72877bc-e324-40b5-9468-51020db2663e', '{"action":"token_revoked","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"token"}', '2024-07-12 17:12:42.158009+00', ''),
	('00000000-0000-0000-0000-000000000000', '072227ec-ddcd-4b77-a067-a740c7089bcd', '{"action":"logout","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account"}', '2024-07-12 17:23:31.713909+00', ''),
	('00000000-0000-0000-0000-000000000000', '4dc5c0fe-55c5-4916-a012-24af214342b3', '{"action":"login","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-12 17:25:10.165786+00', ''),
	('00000000-0000-0000-0000-000000000000', '4fa925b5-2d9a-4002-ab1e-906ae0498948', '{"action":"logout","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account"}', '2024-07-12 17:25:18.214137+00', ''),
	('00000000-0000-0000-0000-000000000000', '27a5ac17-8acb-4aa7-8927-3a2525ff730e', '{"action":"login","actor_id":"8c82b201-c4c7-4a9c-b317-11807afc2f54","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-12 17:29:50.168441+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e38d0e8-1fc9-4b64-8aac-d01961adc5fb', '{"action":"user_signedup","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-07-12 17:30:55.623423+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f0a1291-c464-4e1b-be03-560c09b4c534', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-12 17:30:55.630893+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dc0cd9d5-415f-4895-9d4f-f15d8035e5ed', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-01 17:04:37.224492+00', ''),
	('00000000-0000-0000-0000-000000000000', '9091a12b-c695-4aa5-bd4a-03c6179ab2e8', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-01 17:08:37.447095+00', ''),
	('00000000-0000-0000-0000-000000000000', '49bcfe17-1622-4db2-be86-ecc303c12a44', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-01 17:08:44.744833+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b1e9d145-bed3-495a-b1be-90b60c1d5da6', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 05:22:56.351983+00', ''),
	('00000000-0000-0000-0000-000000000000', '298e9c37-bd32-4cd9-af93-11a3f380163e', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 05:22:56.361621+00', ''),
	('00000000-0000-0000-0000-000000000000', '4cd1c115-16f7-4460-9b60-003bf123441a', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 06:31:27.255101+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd30c4a17-0e4e-47c3-b238-eb98b748ed30', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 06:31:27.271103+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fcbe8881-a6ba-4b92-a69e-cd7d5f6a0bd9', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-02 07:11:03.081727+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e00a30bb-212e-41c9-a61c-183ec1e55569', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-02 07:11:30.086794+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bcadd4d3-11a2-43c1-afe2-819037361604', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-02 07:15:49.729433+00', ''),
	('00000000-0000-0000-0000-000000000000', '88caab20-eb82-4bdd-a1af-defd21afcb20', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-02 17:25:39.290849+00', ''),
	('00000000-0000-0000-0000-000000000000', '0f446246-ae43-4b65-a37d-ca99625ddf6b', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 16:52:52.247173+00', ''),
	('00000000-0000-0000-0000-000000000000', '0b5c401b-b21e-4ec5-991d-415c999b0568', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-03 17:10:17.712711+00', ''),
	('00000000-0000-0000-0000-000000000000', '7c951ad4-d2c7-4157-893a-be13006d41e4', '{"action":"user_signedup","actor_id":"90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-08-03 17:10:35.719376+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a256f6c8-78be-4336-b226-b220c6e9d482', '{"action":"login","actor_id":"90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 17:10:35.730837+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd28126fe-b33b-4200-9c23-98d9e052690c', '{"action":"logout","actor_id":"90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd","actor_username":"s26-2019614935@ier.du.ac.bd","actor_via_sso":false,"log_type":"account"}', '2024-08-03 17:12:30.497709+00', ''),
	('00000000-0000-0000-0000-000000000000', '627f4dd1-848c-4dbb-84d7-cdade4ea98b5', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 17:12:35.308907+00', ''),
	('00000000-0000-0000-0000-000000000000', '70fb5086-aa4b-49c7-9821-05da4e51d7e9', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-03 17:28:54.073649+00', ''),
	('00000000-0000-0000-0000-000000000000', '8ee578ee-9aec-4283-8256-6b191057ee2c', '{"action":"user_signedup","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-08-03 17:29:23.097374+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dccb21dc-bb14-4fc2-9eda-4036c366cd05', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 17:29:23.105345+00', ''),
	('00000000-0000-0000-0000-000000000000', '09b30158-5687-4962-a9d3-6933c273fdc3', '{"action":"logout","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-03 17:37:40.420236+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c8d29388-f402-482f-9c23-393950e05a49', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 17:37:48.568916+00', ''),
	('00000000-0000-0000-0000-000000000000', '957398b2-a711-4dbe-b8db-4ed07d008fdb', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-03 18:00:41.228456+00', ''),
	('00000000-0000-0000-0000-000000000000', '422e2621-856c-4023-a3a6-9dc03d2a74ca', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 06:04:38.593159+00', ''),
	('00000000-0000-0000-0000-000000000000', '5675a0a9-96a9-4e21-8c11-14f05908d4a9', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 07:05:44.810136+00', ''),
	('00000000-0000-0000-0000-000000000000', '36635086-6768-4f2d-889f-fe20ce8e5b19', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 07:05:44.828999+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e4f7aeb-00fe-4180-8d90-359e1f5609a3', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-04 07:17:38.826185+00', ''),
	('00000000-0000-0000-0000-000000000000', '533ef420-d7b5-4302-8a68-adaf70d72e1f', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 07:19:43.165209+00', ''),
	('00000000-0000-0000-0000-000000000000', '697305de-ed10-403d-ab5c-2ea6760f1145', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-04 08:16:22.624179+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c56228e0-8eff-48ca-83e1-c8baa0f8e433', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 08:16:27.460284+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4291f69-c400-45ee-96f2-9ffa41c99ff8', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-04 08:25:21.087299+00', ''),
	('00000000-0000-0000-0000-000000000000', '44b72512-bb36-44a1-9c0b-501ca602ff97', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 08:25:25.148542+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f70fc050-e162-4580-a25e-f46244fee50e', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 08:27:22.776878+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd678a4c9-9fdf-414d-a34e-31013bc7c94b', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 11:28:51.022203+00', ''),
	('00000000-0000-0000-0000-000000000000', '9060c73c-5b6e-44ed-97d0-ad6d4c5e5215', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 11:28:51.033038+00', ''),
	('00000000-0000-0000-0000-000000000000', '96503cc3-6f48-4fa5-aa2a-8ba0ebf0f9a9', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 11:42:23.062939+00', ''),
	('00000000-0000-0000-0000-000000000000', '07cb012a-63b4-405d-ae84-d9e4e14aa00a', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 12:32:45.033338+00', ''),
	('00000000-0000-0000-0000-000000000000', '9cee05b6-6c25-4e0d-9e1b-a0b877ea1201', '{"action":"logout","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-04 12:41:49.281273+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f6cd8baa-8dd5-4f37-9369-82916c3b1644', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 12:42:20.107491+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd9967d52-d88f-4307-8dca-54497e143015', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 12:43:50.892894+00', ''),
	('00000000-0000-0000-0000-000000000000', '0021150c-a6c8-4d01-aacb-06ba170baf8a', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 12:43:50.894948+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f5698691-ea44-473f-9884-bf7ad45e24ad', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 12:44:47.889264+00', ''),
	('00000000-0000-0000-0000-000000000000', '6bd5da9f-103a-4065-9b1f-4daf11579b8a', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 13:44:34.10231+00', ''),
	('00000000-0000-0000-0000-000000000000', '05bf9781-8a96-4fb6-9986-ff9fc6139ee1', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 13:44:34.110844+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a401e5fe-4a59-49a9-8884-6921087adec0', '{"action":"token_refreshed","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 13:50:25.841695+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ae12866b-9d0e-47db-9fce-7330a7553026', '{"action":"token_revoked","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 13:50:25.844256+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b9f215ac-9ab4-484e-887d-1d04be897f24', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 16:48:19.499564+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e5893648-a2bc-4c4b-b459-9190a3e9e4fd', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 16:48:19.504263+00', ''),
	('00000000-0000-0000-0000-000000000000', '5362ec06-5dbb-4ec1-a296-31de86c7ee70', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-04 16:48:20.997739+00', ''),
	('00000000-0000-0000-0000-000000000000', '257ec624-e2bb-43d4-adf2-16d7f9543c34', '{"action":"login","actor_id":"5205ae41-3894-4b63-a9cf-783dc6f7ce11","actor_username":"nusratjahan61088@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-04 17:03:24.069695+00', ''),
	('00000000-0000-0000-0000-000000000000', '63bb356b-9088-4040-96d2-deebebe5255d', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 06:01:58.895771+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a5bc563d-6b3a-44f9-817d-dd1f908dbb85', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 06:01:58.906573+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c287eb2c-40e2-4348-940a-b7a5e0560e42', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 07:44:51.36623+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a5e6567-8c6c-47ce-8823-27fccdff952a', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 07:44:51.369955+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f81c5f74-42c3-45bc-beb1-b1e6130246b0', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 14:17:49.867981+00', ''),
	('00000000-0000-0000-0000-000000000000', '428ea257-7b68-4bb2-9d69-d1bd26afed3a', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-05 14:17:49.891247+00', ''),
	('00000000-0000-0000-0000-000000000000', '61d2d999-7fde-4035-a122-a3ae3de0032d', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-06 17:02:03.99444+00', ''),
	('00000000-0000-0000-0000-000000000000', '3c3ed51c-9396-47d8-84d1-d03f4fde43ef', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-06 17:02:03.999034+00', ''),
	('00000000-0000-0000-0000-000000000000', '21bcbdb2-b1f1-49e3-a322-0355538e3624', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 08:12:43.646416+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ebc126f3-617e-4284-94d6-6d41614f0503', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 08:12:43.65135+00', ''),
	('00000000-0000-0000-0000-000000000000', 'df90666b-ac86-4a51-bbf0-1919bc2b321f', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-07 08:59:11.394433+00', ''),
	('00000000-0000-0000-0000-000000000000', '07d528fe-ded9-43e1-894e-d3a75fc86d64', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-07 09:00:23.386618+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a2b684bd-fb21-4627-98e5-75b6e10f22eb', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 10:00:46.089578+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c75c656b-142f-46ba-98b1-83d55be26b23', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 10:00:46.110481+00', ''),
	('00000000-0000-0000-0000-000000000000', '1a944a07-fd15-44cf-819d-a955ab03f4f5', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 11:00:37.606458+00', ''),
	('00000000-0000-0000-0000-000000000000', '9529e7db-3e2d-4f18-9fe4-11819453322f', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 11:00:37.639249+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ccfdb807-7209-4229-bdbb-b99a9f549418', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 12:31:56.979746+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f50139d-2593-4102-9283-21128bad7ed8', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 12:31:56.995035+00', ''),
	('00000000-0000-0000-0000-000000000000', '4956d526-8b09-422f-bdbe-096c0989bfd5', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 13:45:59.618029+00', ''),
	('00000000-0000-0000-0000-000000000000', '25707b09-3f34-4cfa-ab54-8af124b8a68d', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 13:45:59.627002+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dcc72708-45e2-4915-b6a6-636fc7d0672a', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 14:44:15.149986+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e83366d1-54e3-41a4-a73d-61ee306716ec', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 14:44:15.160265+00', ''),
	('00000000-0000-0000-0000-000000000000', '1c62ed00-5080-4b45-a21a-caa881f939d0', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 15:56:31.384654+00', ''),
	('00000000-0000-0000-0000-000000000000', '1cf0e9ed-a91b-4727-8d44-a627374f7330', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-07 15:56:31.393411+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f02db7d5-37a2-4ed1-ae19-49e6c8114d39', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 10:41:36.825685+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf738773-b2ea-4e6e-8e6c-eeb0274728df', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 10:41:36.831412+00', ''),
	('00000000-0000-0000-0000-000000000000', 'de8fd189-f687-4499-9682-44cc80c0ca47', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 11:45:07.153055+00', ''),
	('00000000-0000-0000-0000-000000000000', '35634baa-1d8a-4c67-95cc-7b14b707353f', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 11:45:07.176586+00', ''),
	('00000000-0000-0000-0000-000000000000', '1034dca4-d6fb-42b0-af45-7c6630e7ed0d', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 12:44:40.895244+00', ''),
	('00000000-0000-0000-0000-000000000000', '0fc46e3f-da69-41e7-9206-7b91f12ea3e6', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-08 12:44:40.918685+00', ''),
	('00000000-0000-0000-0000-000000000000', '18253268-7ae4-445a-918d-011b3848272d', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-09 11:42:47.864502+00', ''),
	('00000000-0000-0000-0000-000000000000', '19a2433d-8003-475b-9a02-3082bdf19503', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-09 11:44:32.419036+00', ''),
	('00000000-0000-0000-0000-000000000000', '4edd24fd-e996-4a5e-84ab-36c4ae4dd762', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-09 11:45:18.062861+00', ''),
	('00000000-0000-0000-0000-000000000000', 'df0dbe11-ad9d-4b94-a312-b33ed56ab407', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-09 11:45:20.680458+00', ''),
	('00000000-0000-0000-0000-000000000000', '7b2f83e0-9b1c-4567-bac8-868e17e77d34', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-09 11:45:33.512737+00', ''),
	('00000000-0000-0000-0000-000000000000', '53cc75b3-4003-49ac-9a56-0e18232a7f66', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-09 11:45:35.394445+00', ''),
	('00000000-0000-0000-0000-000000000000', '632b367f-b459-49de-810f-d63192c01973', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-09 11:46:12.604486+00', ''),
	('00000000-0000-0000-0000-000000000000', '545d7857-93bf-40de-b387-93c0f5292dbf', '{"action":"logout","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-08-09 11:46:13.663815+00', ''),
	('00000000-0000-0000-0000-000000000000', '436f5ed0-6b15-4753-b229-7fc9ea6caf19', '{"action":"login","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-08-09 11:46:23.723058+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e3cfd54-9805-4835-9e98-fdc0b10d5927', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-09 12:46:24.785848+00', ''),
	('00000000-0000-0000-0000-000000000000', '27ba030e-44a6-439b-8b49-5f1923d7c946', '{"action":"token_revoked","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-09 12:46:24.805194+00', ''),
	('00000000-0000-0000-0000-000000000000', 'be85d784-a685-4003-9e78-4ad6685783d6', '{"action":"token_refreshed","actor_id":"a05fa8dd-0abd-453d-8b8b-661f848e8a54","actor_username":"mdsohan383@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-09 12:46:27.040113+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('f0e11e39-b92b-42a2-bce9-2cc18b7c49a0', '36463b4f-a933-4f24-b255-32a79088990a', 'aa480d56-c126-4706-8de4-0ffc816c5eaf', 's256', 'dBtPZ_8uFth5JLepXXsQSRhkgDQXn6_9UQsqhuc8ZE4', 'recovery', '', '', '2024-06-06 17:32:49.529396+00', '2024-06-06 17:32:49.529396+00', 'recovery', NULL);


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd', 'authenticated', 'authenticated', 's26-2019614935@ier.du.ac.bd', '$2a$10$Tx7aVmv2jCcmPTSbyfJNiuOa2DVTuakSi.4.zVJKX0oIbo9.LgNVu', '2024-08-03 17:10:35.720526+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-08-03 17:10:35.732091+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd", "email": "s26-2019614935@ier.du.ac.bd", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', NULL, '2024-08-03 17:10:35.674866+00', '2024-08-03 17:10:35.74584+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', 'authenticated', 'authenticated', 'nusratjahan61088@gmail.com', '$2a$10$hCNM0Pd5tSyJgTzdQg0sLO9WVSgZfKohc1L2FBorv/A5o4aZbuSjK', '2024-08-03 17:29:23.099538+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-08-04 17:03:24.080847+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "5205ae41-3894-4b63-a9cf-783dc6f7ce11", "email": "nusratjahan61088@gmail.com", "last_name": "Jahan", "first_name": "Nusrat", "email_verified": false, "phone_verified": false}', NULL, '2024-08-03 17:29:23.050628+00', '2024-08-04 17:03:24.101127+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', 'authenticated', 'authenticated', 'mdsohan383@gmail.com', '$2a$10$GtLbwlLXIjfM/9sIhqH9seAoC1NsDUZklenDPhUYW59eKckW1ewDG', '2024-07-12 17:30:55.624806+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-08-09 11:46:23.724302+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "a05fa8dd-0abd-453d-8b8b-661f848e8a54", "email": "mdsohan383@gmail.com", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', NULL, '2024-07-12 17:30:55.579235+00', '2024-08-09 12:46:24.839777+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('a05fa8dd-0abd-453d-8b8b-661f848e8a54', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"sub": "a05fa8dd-0abd-453d-8b8b-661f848e8a54", "email": "mdsohan383@gmail.com", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', 'email', '2024-07-12 17:30:55.614817+00', '2024-07-12 17:30:55.614947+00', '2024-07-12 17:30:55.614947+00', 'f31f0ca8-d4c7-426e-b9db-77e9b451cd29'),
	('90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd', '90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd', '{"sub": "90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd", "email": "s26-2019614935@ier.du.ac.bd", "last_name": "Ragib", "first_name": "Md.", "email_verified": false, "phone_verified": false}', 'email', '2024-08-03 17:10:35.709822+00', '2024-08-03 17:10:35.709933+00', '2024-08-03 17:10:35.709933+00', '3483daaa-7fab-4a99-b555-7b589e27fde6'),
	('5205ae41-3894-4b63-a9cf-783dc6f7ce11', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', '{"sub": "5205ae41-3894-4b63-a9cf-783dc6f7ce11", "email": "nusratjahan61088@gmail.com", "last_name": "Jahan", "first_name": "Nusrat", "email_verified": false, "phone_verified": false}', 'email', '2024-08-03 17:29:23.087579+00', '2024-08-03 17:29:23.087649+00', '2024-08-03 17:29:23.087649+00', 'e3f0f965-6688-462d-bb8c-4c56734a6f62');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('af373515-7e98-4a81-b0fc-32fdf9dfdc9a', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-09 11:46:23.724362+00', '2024-08-09 12:46:27.122408+00', NULL, 'aal1', NULL, '2024-08-09 12:46:27.091782', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/127.0.0.0', '172.19.0.1', NULL),
	('c8907688-4b86-4498-82c8-35f7c47cfc05', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', '2024-08-04 12:42:20.11064+00', '2024-08-04 12:42:20.11064+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0', '172.20.0.1', NULL),
	('1e08cd0b-6cab-49b8-9eae-6eeef7a630c5', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', '2024-08-04 12:44:47.890768+00', '2024-08-04 13:50:25.853108+00', NULL, 'aal1', NULL, '2024-08-04 13:50:25.853016', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0', '172.20.0.1', NULL),
	('418894b2-f05f-4b17-beda-e3be3373cf21', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', '2024-08-04 17:03:24.081984+00', '2024-08-04 17:03:24.081984+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0', '172.18.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('c8907688-4b86-4498-82c8-35f7c47cfc05', '2024-08-04 12:42:20.120572+00', '2024-08-04 12:42:20.120572+00', 'password', 'f02956b7-4371-4d31-abd2-0cbf9662d482'),
	('1e08cd0b-6cab-49b8-9eae-6eeef7a630c5', '2024-08-04 12:44:47.903709+00', '2024-08-04 12:44:47.903709+00', 'password', 'ae80f0e2-2a16-4669-a476-eff0848c408d'),
	('418894b2-f05f-4b17-beda-e3be3373cf21', '2024-08-04 17:03:24.10296+00', '2024-08-04 17:03:24.10296+00', 'password', '8bd17538-3a6f-4b68-b648-9449275c0b82'),
	('af373515-7e98-4a81-b0fc-32fdf9dfdc9a', '2024-08-09 11:46:23.727436+00', '2024-08-09 11:46:23.727436+00', 'password', 'e12b6516-d88a-4e80-8d68-20be9ec540ec');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 148, 'qkatcWhF0HSKRg8AwSlm8g', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', false, '2024-08-04 12:42:20.115171+00', '2024-08-04 12:42:20.115171+00', NULL, 'c8907688-4b86-4498-82c8-35f7c47cfc05'),
	('00000000-0000-0000-0000-000000000000', 150, 'DkyRbP_GhEcdl5CxuFWY_g', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', true, '2024-08-04 12:44:47.89318+00', '2024-08-04 13:50:25.845295+00', NULL, '1e08cd0b-6cab-49b8-9eae-6eeef7a630c5'),
	('00000000-0000-0000-0000-000000000000', 152, 'VRno_lhu1Fw2qnnaTg0KOg', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', false, '2024-08-04 13:50:25.847156+00', '2024-08-04 13:50:25.847156+00', 'DkyRbP_GhEcdl5CxuFWY_g', '1e08cd0b-6cab-49b8-9eae-6eeef7a630c5'),
	('00000000-0000-0000-0000-000000000000', 154, 'Hg53ADmm2q-0gy6ktnkd_A', '5205ae41-3894-4b63-a9cf-783dc6f7ce11', false, '2024-08-04 17:03:24.092663+00', '2024-08-04 17:03:24.092663+00', NULL, '418894b2-f05f-4b17-beda-e3be3373cf21'),
	('00000000-0000-0000-0000-000000000000', 174, '33OM83Q8A4IGKGKXLiswcQ', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', true, '2024-08-09 11:46:23.725356+00', '2024-08-09 12:46:24.807014+00', NULL, 'af373515-7e98-4a81-b0fc-32fdf9dfdc9a'),
	('00000000-0000-0000-0000-000000000000', 175, 'WwVpuGIRwRVNqHD3E6vIlw', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', false, '2024-08-09 12:46:24.828905+00', '2024-08-09 12:46:24.828905+00', '33OM83Q8A4IGKGKXLiswcQ', 'af373515-7e98-4a81-b0fc-32fdf9dfdc9a');


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
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "email", "metadata", "first_name", "last_name", "saved") VALUES
	('0cbc30fb-216f-4b7f-a3d3-5715ed1a258c', '2024-07-05 16:52:03.322022+00', 'handlenew@test.com', NULL, NULL, NULL, '{}'),
	('8c82b201-c4c7-4a9c-b317-11807afc2f54', '2024-07-05 16:53:21.546883+00', 's26-2019614935@ier.du.ac.bd', NULL, 'Md.', 'Ragib', '{}'),
	('90ec0d0d-ef5e-4c74-97c9-dda7895a0bbd', '2024-08-03 17:10:35.669042+00', 's26-2019614935@ier.du.ac.bd', NULL, 'Md.', 'Ragib', '{}'),
	('f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-08-16 17:25:35+00', NULL, NULL, NULL, NULL, '{}'),
	('5205ae41-3894-4b63-a9cf-783dc6f7ce11', '2024-08-03 17:29:23.046541+00', 'nusratjahan61088@gmail.com', NULL, 'Nusrat', 'Jahan', '{}'),
	('a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-07-12 17:30:55.576367+00', 'mdsohan383@gmail.com', NULL, 'Md.', 'Ragib', '{39,35}');


--
-- Data for Name: quizzes; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."quizzes" ("id", "created_at", "questions", "instructions", "name", "image", "answers", "inst", "logo", "time", "user_id", "retake", "privacy", "hidden_answers", "neg_marking", "pass_mark") VALUES
	(35, '2024-07-12 15:22:16.125906+00', '[{"id": "0", "name": "test", "type": "mcq", "image": "", "answer": "A", "options": ["A", "B", "C", "D"]}]', 'test', 'test test', '', NULL, '', NULL, 20, 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', false, 'public', true, 0, 33),
	(37, '2024-08-01 17:06:13.025374+00', '[{"id": "0", "name": "test", "type": "mcq", "answer": "A", "options": ["A", "B", "C", "D"]}]', 'test', 'test', '', NULL, '', NULL, 20, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', true, 'public', true, 0, 33),
	(42, '2024-08-04 17:04:54.4354+00', '[{"id": "0", "name": "Test", "type": "mcq", "answer": "B", "options": ["A", "B", "C", "D"]}, {"id": "1", "name": "Example True False Statement", "type": "truefalse", "answer": "True", "options": ["True", "False"]}, {"id": "2", "name": "FIll question", "type": "fill", "answer": "example answer", "options": []}, {"id": "3", "name": "Example", "type": "mcq", "answer": "C", "options": ["A", "C", "D"]}]', 'please keep a calm mind', 'New General Knowledge quiz of 4th aug', '', NULL, '', NULL, 120, '5205ae41-3894-4b63-a9cf-783dc6f7ce11', true, 'public', true, 0, 33),
	(39, '2024-08-04 11:45:47.506575+00', '[{"id": "7f2561a4-ab0d-49f1-9ca4-5c96f3961f74", "name": "Example True False Statement", "type": "truefalse", "answer": "True", "options": ["True", "False"]}, {"id": "731fe8a7-fc1f-41c1-8dbf-3bff24e6b080", "name": "Test test", "type": "mcq", "answer": "A", "options": ["A", "B", "C", "D"]}]', 'test', 'test with time limit', '', NULL, '', NULL, 1, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', true, 'private', true, 0, 33),
	(45, '2024-08-08 11:29:30.874354+00', '[{"id": "2", "name": "test 6", "type": "mcq", "image": "a05fa8dd-0abd-453d-8b8b-661f848e8a54/153500436_214504173702935_1613170860867587917_n.jpg", "answer": "A", "options": ["A", "B", "C", "D"]}, {"id": "4f24061d-a181-4b1a-a43e-876f1ddb52df", "name": "new ", "type": "mcq", "image": "a05fa8dd-0abd-453d-8b8b-661f848e8a54/2B986AD8-C9C3-44F7-A7A0-041CC40B99A0.jpeg", "answer": "C", "options": ["A", "B", "C", "D"]}]', 'tsrsrsrsrs', 'image test', '', NULL, '', NULL, 0, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', false, 'public', true, 0, 33.33),
	(38, '2024-08-03 17:58:52.53876+00', '[{"id": "9c59c659-6f02-42b8-b6b6-02247fb5f675", "name": "Set to new value", "type": "mcq", "image": "0.060907414887604316-dopes4.jpg", "answer": "Africa", "options": ["Africa", "Asia", "Europe", "America"]}, {"id": "c4ed405e-973d-474a-8c70-fe8c02373a20", "name": "Which river flows through the Grand Canyon?", "type": "mcq", "image": "0.04220507134366702-massage.png", "answer": "Colorado River", "options": ["Colorado River", "B", "D"]}, {"id": "6e2eee46-b00c-41d8-84b0-6d846b723e79", "name": "Where is Angel Falls, the world’s largest waterfall, located?", "type": "fill", "image": "0.2526769963826707-1_BlSOcG0cCdJ_j7uLWh3STA.jpeg", "answer": "Venezuela", "options": []}, {"id": "d126947f-02e2-47d4-a0f1-0fecb06fe2e5", "name": "Holland is a region in The Netherlands", "type": "truefalse", "image": "0.047254118359878694-DECA Logo.png", "answer": "True", "options": ["True", "False"]}]', 'Now let''s move on to the geographical. Rivers, lakes, countries, and states. Plenty of diverse questions to choose from.', 'General Geography', '', NULL, '', NULL, 1, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', true, 'public', true, 0.25, 20),
	(43, '2024-08-08 11:23:19.057363+00', '[{"id": "0", "name": "test Media 1", "type": "mcq", "image": "a05fa8dd-0abd-453d-8b8b-661f848e8a54/2B986AD8-C9C3-44F7-A7A0-041CC40B99A0.jpeg", "answer": "A", "options": ["A", "B", "C", "D"]}, {"id": "1", "name": "Example True False Statement", "type": "truefalse", "image": "a05fa8dd-0abd-453d-8b8b-661f848e8a54/3C36A40A-0739-406F-9F64-F43C7D6218D5.jpeg", "answer": "True", "options": ["True", "False"]}]', 'test', 'test', '', NULL, '', NULL, NULL, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', false, 'public', true, 0, 33.33),
	(44, '2024-08-08 11:29:04.83616+00', '[{"id": "14731edc-e544-4a53-8e4d-2c568015c1c1", "name": "test", "type": "fill", "answer": "example answer", "options": []}, {"id": "46c030ca-d867-4195-a003-1ea43b7416ad", "name": "test", "type": "mcq", "answer": "A", "options": ["A", "B", "C", "D"]}, {"id": "70a73c4d-a2b6-40b6-87c5-68b28c80e327", "name": "Example True False Statement", "type": "truefalse", "answer": "True", "options": ["True", "False"]}]', 'test', 'test', '', NULL, '', NULL, NULL, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', false, 'public', true, 0, 33.33);


--
-- Data for Name: submissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."submissions" ("id", "created_at", "answers", "quiz_id", "grade", "score", "submitter", "results", "ended_at") VALUES
	(135, '2024-08-07 16:39:59.903+00', NULL, 39, 'F', 2, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"{\"name\": \"Example True False Statement\", \"answer\": \"True\", \"isCorrect\": true, \"questionId\": \"7f2561a4-ab0d-49f1-9ca4-5c96f3961f74\", \"correctAnswer\": null}","{\"name\": \"Test test\", \"answer\": \"A\", \"isCorrect\": true, \"questionId\": \"731fe8a7-fc1f-41c1-8dbf-3bff24e6b080\", \"correctAnswer\": null}"}', '2024-08-07 16:40:02.744+00'),
	(136, '2024-08-05 15:09:48.224+00', NULL, 37, 'F', 0, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"{\"name\": \"test\", \"answer\": \"B\", \"isCorrect\": false, \"questionId\": \"0\", \"correctAnswer\": null}"}', '2024-08-05 15:09:51.202+00'),
	(137, '2024-08-06 17:19:56.19+00', NULL, 42, 'F', 2, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"{\"name\": \"Test\", \"answer\": \"A\", \"isCorrect\": false, \"questionId\": \"0\", \"correctAnswer\": null}","{\"name\": \"Example True False Statement\", \"answer\": \"True\", \"isCorrect\": true, \"questionId\": \"1\", \"correctAnswer\": null}","{\"name\": \"FIll question\", \"answer\": \"example answer\", \"isCorrect\": true, \"questionId\": \"2\", \"correctAnswer\": null}","{\"name\": \"Example\", \"answer\": \"A\", \"isCorrect\": false, \"questionId\": \"3\", \"correctAnswer\": null}"}', '2024-08-06 17:20:25.464+00'),
	(134, '2024-08-05 06:14:11.13+00', NULL, 35, 'F', 0, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"{\"name\": \"test\", \"answer\": \"B\", \"isCorrect\": false, \"questionId\": \"0\", \"correctAnswer\": null}"}', '2024-08-05 06:14:13.945+00'),
	(133, '2024-08-07 16:48:47.497+00', NULL, 38, 'F', 1.5, 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '{"{\"name\": \"What is the only continent with land in all four hemispheres? \", \"answer\": \"Africa\", \"isCorrect\": true, \"questionId\": \"9c59c659-6f02-42b8-b6b6-02247fb5f675\", \"correctAnswer\": null}","{\"name\": \"Which river flows through the Grand Canyon?\", \"answer\": \"B\", \"isCorrect\": false, \"questionId\": \"c4ed405e-973d-474a-8c70-fe8c02373a20\", \"correctAnswer\": null}","{\"name\": \"Where is Angel Falls, the world’s largest waterfall, located?\", \"answer\": \"venezuEla\", \"isCorrect\": true, \"questionId\": \"6e2eee46-b00c-41d8-84b0-6d846b723e79\", \"correctAnswer\": null}","{\"name\": \"Holland is a region in The Netherlands\", \"answer\": \"False\", \"isCorrect\": false, \"questionId\": \"d126947f-02e2-47d4-a0f1-0fecb06fe2e5\", \"correctAnswer\": null}"}', '2024-08-07 16:48:58.627+00');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('assets', 'assets', NULL, '2024-06-06 17:36:07.428616+00', '2024-06-06 17:36:07.428616+00', true, false, NULL, NULL, NULL),
	('quizassets', 'quizassets', NULL, '2024-06-08 09:52:23.436112+00', '2024-06-08 09:52:23.436112+00', true, false, 6291456, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('0eafe8b7-9476-442d-9967-8eab2535a50d', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/444092.jpg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-08 11:27:10.904501+00', '2024-08-08 11:27:10.904501+00', '2024-08-08 11:27:10.904501+00', '{"eTag": "\"50770e54174587497c06db08ef7604cb\"", "size": 170686, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T11:27:10.835Z", "contentLength": 170686, "httpStatusCode": 200}', '77070425-5545-4feb-b087-a9d734b99ec6', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('3dde4f67-b11e-4e30-a9d0-ce1d55c491de', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/11702272-B0C1-401C-B240-492496AC1D28-e1693321872605 (1).webp', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-08 11:27:25.674426+00', '2024-08-08 11:27:25.674426+00', '2024-08-08 11:27:25.674426+00', '{"eTag": "\"236b8eefe857f2ca1ffd09112456f4f1\"", "size": 42752, "mimetype": "image/webp", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T11:27:25.665Z", "contentLength": 42752, "httpStatusCode": 200}', '291a3b5a-006d-4a49-8899-ebc823422bff', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('540fd530-e7ae-4d70-822a-a4431441ce83', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/1_BlSOcG0cCdJ_j7uLWh3STA.jpeg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-09 12:48:10.103052+00', '2024-08-09 12:48:10.103052+00', '2024-08-09 12:48:10.103052+00', '{"eTag": "\"54e503e427ceb1c987a07423ad63cced\"", "size": 245111, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-09T12:48:10.053Z", "contentLength": 245111, "httpStatusCode": 200}', '76603e5c-4bc3-4845-b599-22d6bc1c9631', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('e3a2557b-3a7b-4f74-a2dc-b5354d7a6fcb', 'quizassets', '5205ae41-3894-4b63-a9cf-783dc6f7ce11/2B986AD8-C9C3-44F7-A7A0-041CC40B99A0.jpeg', NULL, '2024-08-07 08:18:00.320437+00', '2024-08-07 08:18:00.320437+00', '2024-08-07 08:18:00.320437+00', '{"eTag": "\"6b9ef0b7fb258a8c8492ef1dd892fba0\"", "size": 3231684, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-07T08:18:00.267Z", "contentLength": 3231684, "httpStatusCode": 200}', '9c9d31e7-980e-417b-af3e-f5b2bf898e2e', NULL),
	('00f8d2a8-fca4-43cc-9e9d-86a417a9a206', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/974.jpg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-08 11:27:18.864756+00', '2024-08-08 11:27:18.864756+00', '2024-08-08 11:27:18.864756+00', '{"eTag": "\"a2c4616be166116bd7e887dbe9890c07\"", "size": 1380385, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T11:27:18.826Z", "contentLength": 1380385, "httpStatusCode": 200}', 'eed5b4b1-79ea-476c-9afc-b7a184b2eea2', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('58be43b1-f581-4796-bb22-a930c7079013', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/153500436_214504173702935_1613170860867587917_n.jpg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-08 11:27:32.390664+00', '2024-08-08 11:27:32.390664+00', '2024-08-08 11:27:32.390664+00', '{"eTag": "\"647fd3ef3e77bd619c337de6888449b0\"", "size": 349529, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T11:27:32.375Z", "contentLength": 349529, "httpStatusCode": 200}', '3789e533-d6ef-434c-a252-4d4f68a540f6', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('c6bcd868-79bc-49c7-89c2-e21a356dc6da', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/3-devices-white.png', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-09 12:48:18.564349+00', '2024-08-09 12:48:18.564349+00', '2024-08-09 12:48:18.564349+00', '{"eTag": "\"81d739af0a15d54f250e9f1057b3942b\"", "size": 271892, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-08-09T12:48:18.553Z", "contentLength": 271892, "httpStatusCode": 200}', 'f167934d-2805-4f34-9e74-d3457049ee74', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('710f95a9-4292-4cc2-bf93-2167329385b6', 'quizassets', '0.2526769963826707-1_BlSOcG0cCdJ_j7uLWh3STA.jpeg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-06 17:07:32.336837+00', '2024-08-06 17:07:32.336837+00', '2024-08-06 17:07:32.336837+00', '{"eTag": "\"54e503e427ceb1c987a07423ad63cced\"", "size": 245111, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-06T17:07:32.301Z", "contentLength": 245111, "httpStatusCode": 200}', '05f1ac3e-c309-4994-9a12-af3f5e4ec333', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('74442f33-8ce7-4721-a241-263cebe9e40f', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/3771589.jpg', NULL, '2024-08-08 12:31:00.562616+00', '2024-08-08 12:31:00.562616+00', '2024-08-08 12:31:00.562616+00', '{"eTag": "\"7802664e27003940b5bb2743df44c5b7\"", "size": 42003, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T12:31:00.472Z", "contentLength": 42003, "httpStatusCode": 200}', 'b0d21a40-d1cf-47ac-988d-9c7be1bd8b97', NULL),
	('f7e645a3-9c02-4d06-9a81-3701a8596280', 'quizassets', '.emptyFolderPlaceholder', NULL, '2024-07-12 15:29:48.69948+00', '2024-07-12 15:29:48.69948+00', '2024-07-12 15:29:48.69948+00', '{"eTag": "\"d41d8cd98f00b204e9800998ecf8427e\"", "size": 0, "mimetype": "application/octet-stream", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:29:48.687Z", "contentLength": 0, "httpStatusCode": 200}', '6183fd7a-adb7-4785-8948-ac93b3203e15', NULL),
	('a63837e8-0755-467c-9ebe-e7fa9fbc81fe', 'quizassets', 'Globe Final.png-0.6129557750411749', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:30:32.410917+00', '2024-07-12 15:30:32.410917+00', '2024-07-12 15:30:32.410917+00', '{"eTag": "\"13aad4ece8a74f6b29e261a8567cf220\"", "size": 664259, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:30:32.387Z", "contentLength": 664259, "httpStatusCode": 200}', 'eef1d0df-b9fe-49eb-9ad1-f0bf8e06f9da', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('8cdf2fe6-52be-4093-9fa0-b1c0f7d78749', 'quizassets', '0.047254118359878694-DECA Logo.png', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-06 17:07:32.334537+00', '2024-08-06 17:07:32.334537+00', '2024-08-06 17:07:32.334537+00', '{"eTag": "\"4990f13aeffbdbc36212cb351eea4ea0\"", "size": 78965, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-08-06T17:07:32.301Z", "contentLength": 78965, "httpStatusCode": 200}', 'ad84f491-d860-477b-a5d9-95d569dbde35', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('48277a3d-89e1-4612-983c-3a1cf50b934f', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/526057-SL-ZF-5371-03973-1-002.jpg', NULL, '2024-08-08 12:31:00.568486+00', '2024-08-08 12:31:00.568486+00', '2024-08-08 12:31:00.568486+00', '{"eTag": "\"2e600c2970dc55aea52960390e48b944\"", "size": 266890, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T12:31:00.472Z", "contentLength": 266890, "httpStatusCode": 200}', '3054fe50-7dad-44aa-af34-2cf889bf5690', NULL),
	('ad9f7cc8-bd6a-4f8a-96d3-5cce25b7cb7b', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/Apex_Service_Page_Hard_Floors_Box_Image_2.jpg', NULL, '2024-08-08 12:31:00.726762+00', '2024-08-08 12:31:00.726762+00', '2024-08-08 12:31:00.726762+00', '{"eTag": "\"9145a07e5e1f71468f62d4fb3aa29a05\"", "size": 1242121, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T12:31:00.542Z", "contentLength": 1242121, "httpStatusCode": 200}', 'fd0de5eb-d5e3-4e4a-8070-a2b78c34d9c6', NULL),
	('3d46a7eb-60fa-4f4d-b140-9bc1280ac59b', 'quizassets', 'Globe Final 3.png-0.9306027205950609', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:33:00.534134+00', '2024-07-12 15:33:00.534134+00', '2024-07-12 15:33:00.534134+00', '{"eTag": "\"3a6c9fd04edc4e463610b816bc574ec0\"", "size": 718624, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:33:00.514Z", "contentLength": 718624, "httpStatusCode": 200}', '18d06c59-b6e8-43c3-b946-77b917210a7b', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('f815a3df-4268-4aa5-9a0f-d015a09dc29b', 'quizassets', '0.04220507134366702-massage.png', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-06 17:07:32.333774+00', '2024-08-06 17:07:32.333774+00', '2024-08-06 17:07:32.333774+00', '{"eTag": "\"b54a69087e597935ecf9df4b418bc96c\"", "size": 76849, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-08-06T17:07:32.301Z", "contentLength": 76849, "httpStatusCode": 200}', '9f063cfa-f012-4dbd-b308-97229be7dd74', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('e20373f0-fcb7-49ad-a6fe-a278192ed175', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/197277.jpg', NULL, '2024-08-08 12:31:00.567676+00', '2024-08-08 12:31:00.567676+00', '2024-08-08 12:31:00.567676+00', '{"eTag": "\"3b6da174842fa92aa742ea24da67fbd2\"", "size": 271495, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-08T12:31:00.472Z", "contentLength": 271495, "httpStatusCode": 200}', 'a26ab1f5-2a64-4f82-9264-756d6175e2f2', NULL),
	('060c02c2-52e9-49b2-89ec-9156e8271551', 'quizassets', 'Globe Final 3.png-0.6483728133863949', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:36:12.169953+00', '2024-07-12 15:36:12.169953+00', '2024-07-12 15:36:12.169953+00', '{"eTag": "\"3a6c9fd04edc4e463610b816bc574ec0\"", "size": 718624, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:36:12.153Z", "contentLength": 718624, "httpStatusCode": 200}', '3347d74b-7037-4dc7-bb4e-7398734d94e7', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('f1a69df9-d51b-412e-b462-9c52e4eea207', 'quizassets', 'target_new_logo-removebg-preview.png-0.34350761296058785', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:37:07.524114+00', '2024-07-12 15:37:07.524114+00', '2024-07-12 15:37:07.524114+00', '{"eTag": "\"c996f58379037ca23138307c06b643ac\"", "size": 100114, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:37:07.504Z", "contentLength": 100114, "httpStatusCode": 200}', '73d834ae-2da3-4fb4-b146-b459904c7404', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('26e6d8f0-ef0b-411b-833a-f217af1a4440', 'quizassets', '0.060907414887604316-dopes4.jpg', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54', '2024-08-06 17:07:32.367088+00', '2024-08-06 17:07:32.367088+00', '2024-08-06 17:07:32.367088+00', '{"eTag": "\"2132804375ecfb9452547a9bbb292411\"", "size": 1007422, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-06T17:07:32.301Z", "contentLength": 1007422, "httpStatusCode": 200}', '6c1f1fba-92f4-4ef1-833f-87577ae4b070', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54'),
	('9f048a0c-66ab-4599-adf3-2f237535dcf4', 'quizassets', '0.7001629086450771-Globe Final 3.png', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:38:43.047552+00', '2024-07-12 15:38:43.047552+00', '2024-07-12 15:38:43.047552+00', '{"eTag": "\"3a6c9fd04edc4e463610b816bc574ec0\"", "size": 718624, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:38:43.001Z", "contentLength": 718624, "httpStatusCode": 200}', '8b973645-0938-410c-8b2b-08211cf4ff5c', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('d009e792-d52a-4bb2-88fe-3e52e297f62c', 'quizassets', '0.994650007868392-OIP.jpeg', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:43:52.766184+00', '2024-07-12 15:43:52.766184+00', '2024-07-12 15:43:52.766184+00', '{"eTag": "\"6dbc67ac8b53c073fa5f20b3fa9d1c4d\"", "size": 18842, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:43:52.747Z", "contentLength": 18842, "httpStatusCode": 200}', '5f259bf5-72de-4377-be56-d75b84a6ede1', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('4c981e08-09d4-43d1-a1af-0c3b82801568', 'quizassets', '0.9253994975226858-OIP.jpeg', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:44:24.790244+00', '2024-07-12 15:44:24.790244+00', '2024-07-12 15:44:24.790244+00', '{"eTag": "\"6dbc67ac8b53c073fa5f20b3fa9d1c4d\"", "size": 18842, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:44:24.767Z", "contentLength": 18842, "httpStatusCode": 200}', '216cb100-c172-45e0-aa5c-41866e1cf478', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('33d3c4c6-91aa-4e35-a202-c8c4cd2ce52f', 'quizassets', '0.5672441338780778-OIP.jpeg', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:46:19.097839+00', '2024-07-12 15:46:19.097839+00', '2024-07-12 15:46:19.097839+00', '{"eTag": "\"6dbc67ac8b53c073fa5f20b3fa9d1c4d\"", "size": 18842, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:46:19.082Z", "contentLength": 18842, "httpStatusCode": 200}', 'f1c50efd-b9e6-47d4-91c8-8a0e359cb281', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('b8fe31e3-ba82-4ddd-b3a8-428d6161ec79', 'quizassets', '0.13562771943323626-OIP.jpeg', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a', '2024-07-12 15:48:09.92491+00', '2024-07-12 15:48:09.92491+00', '2024-07-12 15:48:09.92491+00', '{"eTag": "\"6dbc67ac8b53c073fa5f20b3fa9d1c4d\"", "size": 18842, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-07-12T15:48:09.910Z", "contentLength": 18842, "httpStatusCode": 200}', '42c9e348-b68f-493f-bf9e-aca59480999b', 'f55d4c8b-c81a-48ca-880a-d193d85ec86a'),
	('29bc0600-a516-4412-a5d9-2275b132e759', 'quizassets', 'a05fa8dd-0abd-453d-8b8b-661f848e8a54/2B986AD8-C9C3-44F7-A7A0-041CC40B99A0.jpeg', NULL, '2024-08-07 14:37:58.377171+00', '2024-08-07 14:37:58.377171+00', '2024-08-07 14:37:58.377171+00', '{"eTag": "\"6b9ef0b7fb258a8c8492ef1dd892fba0\"", "size": 3231684, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-08-07T14:37:58.326Z", "contentLength": 3231684, "httpStatusCode": 200}', '9dd3a501-83f3-4fd1-8988-718bc752cac6', NULL);


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 175, true);


--
-- Name: quizzes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."quizzes_id_seq"', 45, true);


--
-- Name: submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."submissions_id_seq"', 137, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
