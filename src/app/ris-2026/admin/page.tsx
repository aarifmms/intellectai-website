import { redirect } from "next/navigation";

export default function RIS2026AdminRedirect() {
  redirect("/popup/admin?event=RIS+2026");
}
