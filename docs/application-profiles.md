# HGM Application Profiles

Choose the profile before designing routes, data, or authentication. A combined application must describe and test each profile separately.

## Decision table

| Decision | Internal employee app | Anonymous public app | Customer portal |
| --- | --- | --- | --- |
| Users | Named HGM employees | Any visitor | Named customers or partner users |
| Authentication | Microsoft Entra SAML SSO only | None for deliberately public reads | Passwordless email; MFA for sensitive access |
| Authorization source | Stable database membership or protected app metadata linked to the Supabase user ID | Explicit public grants and public-row policies only | User ownership or tenant membership linked to the Supabase user ID |
| Browser route protection | Authenticated layout for user experience | None for public routes | Authenticated layout for user experience |
| Data boundary | RLS and privileged Edge Functions | Public projection only; private data never shares its policy | RLS isolates users and tenants; functions repeat authorization for privileged work |
| Anonymous writes | Not applicable | Edge Function with validation and abuse controls | Only approved pre-login flows through an Edge Function |
| Storage | Private buckets and user-scoped access | Public only for approved publishable assets | Private buckets with user or tenant policies |
| Operations | Joiner, mover, leaver and access reviews | Abuse monitoring, content ownership, availability | Account recovery, support, tenant lifecycle, access reviews |

## Internal employee applications

Use this profile for tools intended only for HGM staff.

- Require named Microsoft Entra identities through Supabase SAML SSO. Do not add a password, passwordless, social, shared-account, or email-domain fallback for internal routes.
- Confirm the Entra tenant, SAML provider, and assigned group or users. An HGM-looking email address is not authorization.
- Map the signed-in identity to a stable Supabase user ID and an application membership record.
- Store authorization in protected app metadata or database records, never user-editable metadata.
- Define roles by permitted actions. Avoid a generic `staff` role that silently gains every future permission.
- Confirm the Supabase plan, Entra metadata, and non-production SAML test identities before Build. If they are unavailable, stop with an IT handoff containing the project Entity ID and ACS URL and requesting the App Federation Metadata URL or XML, email NameID, and assigned test users or group. Request the required Pro-or-above plan separately; no client secret is needed.
- Test a permitted SAML employee, a non-SAML account with the same email, an unassigned employee, a signed-in employee without membership, a removed employee, and an unauthenticated visitor.
- Document who approves access and how access is removed when responsibilities change.

## Anonymous public applications

Use this profile when visitors can access information without signing in.

- Publish only an explicit projection of information approved for public release. Customer, personal, confidential, unpublished, and operational data are never anonymously readable.
- Grant `anon` only the operations and objects required for that public experience.
- Do not put unpublished, personal, confidential, or operational fields behind a client-side filter.
- Send forms, uploads, email requests, third-party calls, and other anonymous writes through an Edge Function.
- Validate size, type, format, and business rules at the Edge Function boundary.
- Apply rate limits, quotas, bot or spam controls, and safe failure behavior proportionate to likely abuse.
- Do not return internal error details, identifiers, secrets, or stack traces to visitors.
- Record a content owner, support owner, abuse-monitoring path, and takedown or correction process.

## Customer portals

Use this profile for customers or partners who sign in to see non-public information.

- Default to Supabase email magic links or one-time codes. Record the selected method, enrollment, verification, recovery, and support process in the technical brief.
- Prevent automatic account creation unless self-registration is explicitly approved. A new account has no customer-data access until ownership or tenant membership is securely established.
- Link every protected record to an individual owner or tenant membership that RLS can verify.
- `TO authenticated` is not sufficient authorization. Every policy needs the ownership, membership, or permission predicate.
- For updates, enforce both which existing rows may be changed and which resulting values may be written.
- Verify tenant changes, invitations, removals, account closure, and session revocation behavior.
- Require MFA for sensitive customer data, exports, billing, administration, and other privileged actions. Enforce it in restrictive RLS policies or Edge Functions, not only in the interface.
- Test two users in the same tenant, users in different tenants, a removed member, and an unauthenticated visitor.
- Treat exports, bulk operations, billing actions, and third-party integrations as privileged operations requiring an Edge Function and repeated authorization.

## Combined applications

An application may have public content and a signed-in portal, or internal administration and a customer-facing area. The technical brief must then specify:

- which routes belong to each profile
- which Data API objects and Storage paths each profile can reach
- which identities and roles apply to each profile
- how internal routes verify the Entra SAML provider separately from customer passwordless identities
- where public and private data are separated
- how functions distinguish and authorize each caller
- independent allowed and denied tests for every profile boundary

Do not create one broad authenticated policy and rely on the React interface to separate audiences.
