import { getRisLeads, getDistinctEventNames, ensureRisLeadsTable } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata = { robots: { index: false, follow: false } };

interface RisLead {
  id: string;
  full_name: string;
  company_name: string | null;
  phone: string | null;
  email: string;
  requirements: string;
  audio_base64: string | null;
  event_name: string | null;
  created_at: string;
}

export default async function PopupAdminPage({
  searchParams,
}: {
  searchParams: Promise<{ event?: string }>;
}) {
  await ensureRisLeadsTable();
  const { event } = await searchParams;

  const [leads, events] = await Promise.all([
    getRisLeads(event),
    getDistinctEventNames(),
  ]);

  return (
    <main style={{ backgroundColor: "#0E0F11", minHeight: "100vh" }}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">
              {event ? `${event} Leads` : "All Pop-Up Leads"}
            </h1>
            <p className="text-[#8A8D93]">
              {(leads as RisLead[]).length} lead{(leads as RisLead[]).length !== 1 ? "s" : ""} collected
              {event ? ` for ${event}` : " across all events"}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {events.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <a
                  href="/popup/admin"
                  className={`rounded-full px-3 py-1 text-sm transition-colors ${
                    !event
                      ? "bg-brass-500 text-white"
                      : "bg-[rgba(255,255,255,0.04)] text-[#B6B8BC] hover:text-white"
                  }`}
                >
                  All
                </a>
                {events.map((e) => (
                  <a
                    key={e.event_name}
                    href={`/popup/admin?event=${encodeURIComponent(e.event_name)}`}
                    className={`rounded-full px-3 py-1 text-sm transition-colors ${
                      event === e.event_name
                        ? "bg-brass-500 text-white"
                        : "bg-[rgba(255,255,255,0.04)] text-[#B6B8BC] hover:text-white"
                    }`}
                  >
                    {e.event_name}
                  </a>
                ))}
              </div>
            )}
            <a
              href={event ? `/popup/admin?event=${encodeURIComponent(event)}` : "/popup/admin"}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] px-4 py-2 text-sm text-white hover:bg-[rgba(255,255,255,0.04)]"
            >
              Refresh
            </a>
          </div>
        </div>

        {(leads as RisLead[]).length === 0 ? (
          <div
            className="rounded-2xl border border-[rgba(255,255,255,0.06)] p-12 text-center"
            style={{ backgroundColor: "#17181B" }}
          >
            <p className="text-lg text-[#8A8D93]">No leads yet{event ? ` for ${event}` : ""}.</p>
            <p className="mt-1 text-sm text-[#8A8D93]">
              Leads will appear here when visitors scan the QR code and submit the form.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {(leads as RisLead[]).map((lead) => (
              <div
                key={lead.id}
                className="rounded-2xl border border-[rgba(255,255,255,0.06)] p-6"
                style={{ backgroundColor: "#17181B" }}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-semibold text-white">
                        {lead.full_name}
                      </h2>
                      {lead.event_name && !event && (
                        <span className="rounded-full border border-brass-500/30 bg-brass-500/10 px-2 py-0.5 text-xs text-brass-300">
                          {lead.event_name}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#8A8D93]">
                      {lead.company_name || "No company"} &middot;{" "}
                      {new Date(lead.created_at).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {lead.email ? (
                      <a
                        href={`mailto:${lead.email}`}
                        className="rounded-full bg-brass-500/10 px-3 py-1 text-brass-300 hover:underline"
                      >
                        {lead.email}
                      </a>
                    ) : null}
                    {lead.phone ? (
                      <a
                        href={`tel:${lead.phone}`}
                        className="rounded-full bg-[rgba(255,255,255,0.04)] px-3 py-1 text-white hover:underline"
                      >
                        {lead.phone}
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mb-4 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[#0E0F11] p-4">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#B6B8BC]">
                    {lead.requirements}
                  </p>
                </div>

                {lead.audio_base64 ? (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[#8A8D93]">
                      Voice Recording
                    </p>
                    <audio controls src={lead.audio_base64} className="h-8 w-full max-w-md" />
                  </div>
                ) : null}

                <p className="mt-3 text-xs text-[#8A8D93]">
                  ID: {lead.id.slice(0, 8)}...
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
