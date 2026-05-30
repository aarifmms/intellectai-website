import { neon } from "@neondatabase/serverless";

let _sql: any = null;
function getSql() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    _sql = neon(process.env.DATABASE_URL);
  }
  return _sql;
}

export async function ensureRisLeadsTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS ris_leads (
      id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
      full_name TEXT NOT NULL,
      company_name TEXT,
      phone TEXT,
      email TEXT NOT NULL,
      requirements TEXT NOT NULL,
      audio_base64 TEXT,
      event_name TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`ALTER TABLE ris_leads ADD COLUMN IF NOT EXISTS event_name TEXT`;
}

export async function insertRisLead(lead: {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  requirements: string;
  audioBase64?: string | null;
  eventName?: string | null;
}) {
  const sql = getSql();
  const [row] = await sql`
    INSERT INTO ris_leads (full_name, company_name, phone, email, requirements, audio_base64, event_name)
    VALUES (${lead.fullName}, ${lead.companyName}, ${lead.phone}, ${lead.email}, ${lead.requirements}, ${lead.audioBase64 ?? null}, ${lead.eventName ?? null})
    RETURNING id, created_at
  `;
  return row as { id: string; created_at: Date };
}

export async function getRisLeads(eventName?: string) {
  const sql = getSql();
  if (eventName) {
    return sql`
      SELECT id, full_name, company_name, phone, email, requirements, audio_base64, event_name, created_at
      FROM ris_leads
      WHERE event_name = ${eventName}
      ORDER BY created_at DESC
    `;
  }
  return sql`
    SELECT id, full_name, company_name, phone, email, requirements, audio_base64, event_name, created_at
    FROM ris_leads
    ORDER BY created_at DESC
  `;
}

export async function getDistinctEventNames() {
  const sql = getSql();
  const rows = await sql`
    SELECT DISTINCT event_name FROM ris_leads WHERE event_name IS NOT NULL ORDER BY event_name
  `;
  return rows as { event_name: string }[];
}

export { getSql as sql };
