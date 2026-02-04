--
-- PostgreSQL database dump
--

\restrict yKT1P6QYY6hvbOoc8sz2QkctBvPI0gdejZTTudUW67fE0TSj9q9GOnzcg2G63G4

-- Dumped from database version 18.0
-- Dumped by pg_dump version 18.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: DownloadFile; Type: TABLE DATA; Schema: public; Owner: postgres
--

SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public."DownloadFile" DISABLE TRIGGER ALL;



ALTER TABLE public."DownloadFile" ENABLE TRIGGER ALL;

--
-- Data for Name: GalleryImage; Type: TABLE DATA; Schema: public; Owner: postgres
--

ALTER TABLE public."GalleryImage" DISABLE TRIGGER ALL;

INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('FIRST', 'MAPABA VII', '/gallery/foto1.jpg', '2026-02-02 17:00:00');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('TWO', 'MAPABA VII', '/gallery/foto2.jpg', '2026-02-03 12:04:12.095');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('SATU', 'RTAR V', '/gallery/foto3.jpg', '2026-02-03 12:15:05.85');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('DUA', 'RTAR V', '/gallery/foto4.jpg', '2026-02-03 12:15:12.546');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('TIGA', 'RTAR V', '/gallery/foto5.jpg', '2026-02-03 12:15:16.435');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('EMPAT', 'RTAR V', '/gallery/foto6.jpg', '2026-02-03 12:15:19.347');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('LIMA', 'FOLLOW UP MAPABA VII', '/gallery/foto7.jpg', '2026-02-03 12:17:02.606');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('ENAM', 'FOLLOW UP MAPABA VII', '/gallery/foto8.jpg', '2026-02-03 12:17:05.766');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('TUJUH', 'ZIARAH RAYON VI', '/gallery/foto9.jpg', '2026-02-03 12:18:36.577');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('DELAPAN', 'FUN FUSAL RAYON VI', '/gallery/foto10.jpg', '2026-02-03 12:18:39.739');
INSERT INTO public."GalleryImage" (id, title, url, "createdAt") VALUES ('SEMBILAN', 'FUN FUSAL RAYON VI', '/gallery/foto11.jpg', '2026-02-03 12:18:43.29');


ALTER TABLE public."GalleryImage" ENABLE TRIGGER ALL;

--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

ALTER TABLE public."User" DISABLE TRIGGER ALL;

INSERT INTO public."User" (id, name, email, password, role, "createdAt") VALUES ('cml40uun80000ug2gfvd00ut4', 'Admin', 'admin@example.com', '$2b$10$/KZZ3FYwUjkD3L7xBjE7bumJOnKJ3pGVV6205fBPqaOgw9SQ6RmOe', 'ADMIN', '2026-02-01 17:35:43.267');


ALTER TABLE public."User" ENABLE TRIGGER ALL;

--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: postgres
--

ALTER TABLE public."Post" DISABLE TRIGGER ALL;



ALTER TABLE public."Post" ENABLE TRIGGER ALL;

--
-- Data for Name: TeamMember; Type: TABLE DATA; Schema: public; Owner: postgres
--

ALTER TABLE public."TeamMember" DISABLE TRIGGER ALL;

INSERT INTO public."TeamMember" (id, name, role, "photoUrl", "order", "createdAt") VALUES ('dua', 'abiyasa fadli akbar', 'sekretaris', NULL, 0, '2026-02-04 04:04:13.858');
INSERT INTO public."TeamMember" (id, name, role, "photoUrl", "order", "createdAt") VALUES ('tiga', 'M. rehan agusti', 'bendahara', NULL, 0, '2026-02-04 04:04:13.858');
INSERT INTO public."TeamMember" (id, name, role, "photoUrl", "order", "createdAt") VALUES ('firs', 'ahmad azarruddin', 'ketua rayon', '/foto-1.jpg', 1, '2026-02-04 04:02:55.972');


ALTER TABLE public."TeamMember" ENABLE TRIGGER ALL;

--
-- PostgreSQL database dump complete
--

\unrestrict yKT1P6QYY6hvbOoc8sz2QkctBvPI0gdejZTTudUW67fE0TSj9q9GOnzcg2G63G4

