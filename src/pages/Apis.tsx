import { Link } from 'react-router-dom';
import { API_BASE } from '../lib/api';

type HttpMethod = 'GET' | 'POST';
type RouteStatus = 'live' | 'planned';

type ApiField = {
  name: string;
  type: string;
  notes: string;
};

type ApiRoute = {
  method: HttpMethod;
  path: string;
  status: RouteStatus;
  summary: string;
  request: string;
  response: string;
  fields?: ApiField[];
  expansion: string;
};

type SiteRoute = {
  path: string;
  page: string;
  notes: string;
};

const API_ROUTES: ApiRoute[] = [
  {
    method: 'GET',
    path: '/health',
    status: 'live',
    summary: 'Liveness for the Flask process.',
    request: 'None',
    response: '{ status: "ok", service: "red-api" }',
    expansion: 'Keep this shape. Add a version field if you need deploy checks.',
  },
  {
    method: 'GET',
    path: '/db/ping',
    status: 'live',
    summary: 'Executes SELECT 1 against DATABASE_URL (SQLite default; Postgres-capable).',
    request: 'None',
    response: '{ ok: true, database_url_scheme: "sqlite" }',
    expansion: 'Do not replace this with a second data layer. New tables use the same engine.',
  },
  {
    method: 'GET',
    path: '/debug/health',
    status: 'live',
    summary: 'Diagnostic health: DB ping plus mail_mode and recent log lines (Render/staging).',
    request: 'None',
    response:
      '{ status: "ok", service: "red-api", mail_mode, db_scheme, recent_log_lines }',
    expansion: 'Ops/debug only — do not expose secrets in recent_log_lines.',
  },
  {
    method: 'POST',
    path: '/auth/register',
    status: 'live',
    summary: 'Create account. Returns bearer token + user. Shared with RPS via localStorage.',
    request: 'JSON body',
    response: '201 { token, user }. 400/409 on validation or duplicate email.',
    fields: [
      { name: 'email', type: 'string', notes: 'Required. Normalized lower-case.' },
      { name: 'password', type: 'string', notes: 'Required. Min 8 characters.' },
      { name: 'name', type: 'string', notes: 'Optional. Trimmed.' },
    ],
    expansion: 'Client stores token as red_auth_token and sends Authorization: Bearer.',
  },
  {
    method: 'POST',
    path: '/auth/login',
    status: 'live',
    summary: 'Sign in. Returns bearer token + user.',
    request: 'JSON body',
    response: '{ token, user }. 401 on invalid credentials.',
    fields: [
      { name: 'email', type: 'string', notes: 'Required.' },
      { name: 'password', type: 'string', notes: 'Required.' },
    ],
    expansion: 'Same token key as register — red_auth_token in localStorage.',
  },
  {
    method: 'POST',
    path: '/auth/logout',
    status: 'live',
    summary: 'Revokes the bearer token server-side (in-memory demo store).',
    request: 'Bearer optional; empty JSON body OK',
    response: '{ ok: true }',
    expansion: 'Client always clears red_auth_token after logout.',
  },
  {
    method: 'GET',
    path: '/auth/me',
    status: 'live',
    summary: 'Current user for a valid bearer token.',
    request: 'Authorization: Bearer <token>',
    response: '{ user }. 401 if missing/invalid.',
    expansion: 'Used by the account drawer and RPS auth hooks.',
  },
  {
    method: 'POST',
    path: '/contact',
    status: 'live',
    summary: 'Lead capture. Persists a row; may log or SMTP mail per MAIL_MODE.',
    request: 'JSON body',
    response: '{ ok: true, id, mail }. 400 if name/email/note missing.',
    fields: [
      { name: 'name', type: 'string', notes: 'Required. Trimmed.' },
      { name: 'email', type: 'string', notes: 'Required. Must look like an email.' },
      { name: 'company', type: 'string', notes: 'Optional. Trimmed; omit or empty OK.' },
      { name: 'note', type: 'string', notes: 'Required. Trimmed.' },
    ],
    expansion: 'Keep Contact form fields aligned with this card.',
  },
  {
    method: 'GET',
    path: '/docs',
    status: 'planned',
    summary: 'Swagger UI — not shipped (Flask has no OpenAPI UI by default).',
    request: '—',
    response: '—',
    expansion: 'Add only if we adopt flasgger/apispec; until then use this catalog.',
  },
  {
    method: 'GET',
    path: '/openapi.json',
    status: 'planned',
    summary: 'OpenAPI schema — not shipped on the Flask app.',
    request: '—',
    response: '—',
    expansion: 'Prefer documenting live routes in API_ROUTES on this page.',
  },
];

const SITE_ROUTES: SiteRoute[] = [
  { path: '/', page: 'Home', notes: 'Five-band brochure; contact form posts to POST /contact.' },
  { path: '/about', page: 'About', notes: 'Company story.' },
  { path: '/team', page: 'Team', notes: 'People.' },
  { path: '/services', page: 'Services', notes: 'Design-to-Delivery.' },
  { path: '/how-we-deliver', page: 'How we deliver', notes: 'Delivery path.' },
  { path: '/demos', page: 'Demo Portal', notes: 'Interactive proofs and portals.' },
  {
    path: '/rps',
    page: 'RPS hub',
    notes: 'Internal planning teaser. Nested: /features, /how-it-works, /use-cases, /roadmap.',
  },
  { path: '/apis', page: 'APIs', notes: 'This catalog. Add a row when you add a route.' },
];

export default function Apis() {
  return (
    <main id="main" className="page-shell">
      <div className="band-inner">
        <p className="identity-kicker">APIS</p>
        <h1>
          <span className="word-red">RED</span> HTTP surface
        </h1>
        <p className="lede">
          Live Flask routes and the site pages that call them. Ben override (Batch 3): Flask +
          SQLAlchemy for this shared auth/contact demo path. Base URL{' '}
          <code className="api-base">{API_BASE}</code>
          {'. '}
          Set <code>VITE_API_URL</code> for the public Render URL when deployed; default is{' '}
          <code>http://127.0.0.1:8000</code>. Auth uses Bearer tokens stored as{' '}
          <code>red_auth_token</code> (shared with RPS).
        </p>

        <h2 className="api-section-title">HTTP APIs</h2>
        <ul className="api-grid">
          {API_ROUTES.map((route) => (
            <li key={`${route.method}-${route.path}`} className="value-card api-card">
              <div className="api-card-head">
                <span className={`api-method api-method--${route.method.toLowerCase()}`}>
                  {route.method}
                </span>
                <code>{route.path}</code>
                <span className="demo-meta">{route.status}</span>
              </div>
              <p>{route.summary}</p>
              <p className="api-meta-line">
                Request: {route.request}
                <span className="sep"> · </span>
                Response: {route.response}
              </p>
              {route.fields ? (
                <ul className="api-fields">
                  {route.fields.map((field) => (
                    <li key={field.name}>
                      <code>{field.name}</code>
                      <span className="api-field-type">{field.type}</span>
                      {field.notes}
                    </li>
                  ))}
                </ul>
              ) : null}
              <p className="api-expand">{route.expansion}</p>
            </li>
          ))}
        </ul>

        <h2 className="api-section-title">Site routes</h2>
        <p className="lede" style={{ marginBottom: '1rem' }}>
          Pages nest under the app shell. Extra routes already in the tree stay. Add a row here
          when you add a page.
        </p>
        <div className="value-card" style={{ overflowX: 'auto' }}>
          <table className="api-table">
            <thead>
              <tr>
                <th>Path</th>
                <th>Page</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {SITE_ROUTES.map((row) => (
                <tr key={row.path}>
                  <td>
                    <Link to={row.path}>
                      <code>{row.path}</code>
                    </Link>
                  </td>
                  <td>{row.page}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="api-section-title">Expand later</h2>
        <ol className="api-expand-steps">
          <li>
            Add the Flask handler in <code>backend/main.py</code>. Reuse the existing SQLAlchemy
            engine; do not add a second data layer.
          </li>
          <li>
            Append an object to <code>API_ROUTES</code> in this file (method, path, body, response,
            expansion note).
          </li>
          <li>
            If it is a page, add a <code>Route</code> in <code>AppRouter.tsx</code> and a{' '}
            <code>SITE_ROUTES</code> row.
          </li>
        </ol>
      </div>
    </main>
  );
}
