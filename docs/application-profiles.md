# HGM Application Profiles

Choose the profile before designing routes, data, or authentication. A combined application must describe and test each profile separately.

## Decision table

| Decision | Internal employee app | Anonymous public app | Customer portal |
| --- | --- | --- | --- |
| Users | Named HGM employees | Any visitor | Named customers or partner users |
| Authentication | Microsoft Entra SSO through Supabase SAML SSO | None for deliberately public reads | Approved Supabase Auth method recorded in the technical brief |
| Authorization source | Stable database membership or protected app metadata linked to the Supabase user ID | Explicit public grants and public-row policies only | User ownership or tenant membership linked to the Supabase user ID |
| Browser route protection | Authenticated layout for user experience | None for public routes | Authenticated layout for user experience |
| Data boundary | RLS and privileged Edge Functions | Public projection only; private data never shares its policy | RLS isolates users and tenants; functions repeat authorization for privileged work |
| Anonymous writes | Not applicable | Edge Function with validation and abuse controls | Only approved pre-login flows through an Edge Function |
| Storage | Private buckets and user-scoped access | Public only for approved publishable assets | Private buckets with user or tenant policies |
| Operations | Joiner, mover, leaver and access reviews | Abuse monitoring, content ownership, availability | Account recovery, support, tenant lifecycle, access reviews |

## Internal employee applications

Use this profile for tools intended only for HGM staff.

- Require named Microsoft Entra identities through Supabase SAML SSO.
- Confirm the Entra tenant and the approved group or application role. An HGM-looking email address is not authorization.
- Map the signed-in identity to a stable Supabase user ID and an application membership record.
- Store authorization in protected app metadata or database records, never user-editable metadata.
- Define roles by permitted actions. Avoid a generic `staff` role that silently gains every future permission.
- Test a permitted employee, a signed-in employee without membership, a removed employee, and an unauthenticated visitor.
- Document who approves access and how access is removed when responsibilities change.

## Anonymous public applications

Use this profile when visitors can access information without signing in.

- Publish only an explicit projection of information approved for public release.
- Grant `anon` only the operations and objects required for that public experience.
- Do not put unpublished, personal, confidential, or operational fields behind a client-side filter.
- Send forms, uploads, email requests, third-party calls, and other anonymous writes through an Edge Function.
- Validate size, type, format, and business rules at the Edge Function boundary.
- Apply rate limits, quotas, bot or spam controls, and safe failure behavior proportionate to likely abuse.
- Do not return internal error details, identifiers, secrets, or stack traces to visitors.
- Record a content owner, support owner, abuse-monitoring path, and takedown or correction process.

## Customer portals

Use this profile for customers or partners who sign in to see non-public information.

- Record the approved Supabase Auth method, enrollment, verification, recovery, and support process in the technical brief.
- Link every protected record to an individual owner or tenant membership that RLS can verify.
- `TO authenticated` is not sufficient authorization. Every policy needs the ownership, membership, or permission predicate.
- For updates, enforce both which existing rows may be changed and which resulting values may be written.
- Verify tenant changes, invitations, removals, account closure, and session revocation behavior.
- Test two users in the same tenant, users in different tenants, a removed member, and an unauthenticated visitor.
- Treat exports, bulk operations, billing actions, and third-party integrations as privileged operations requiring an Edge Function and repeated authorization.

## Combined applications

An application may have public content and a signed-in portal, or internal administration and a customer-facing area. The technical brief must then specify:

- which routes belong to each profile
- which Data API objects and Storage paths each profile can reach
- which identities and roles apply to each profile
- where public and private data are separated
- how functions distinguish and authorize each caller
- independent allowed and denied tests for every profile boundary

Do not create one broad authenticated policy and rely on the React interface to separate audiences.
