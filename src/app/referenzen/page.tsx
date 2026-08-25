import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import ReferenceGrid from "@/components/ReferenceGrid";
import { references } from "@/data/referenzen";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Ausgewählte Produktionen aus Dokutainment, Show, Magazin & Nachrichten, Reportage, Corporate Media und technischen Dienstleistungen.",
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHead
        label={`Referenzen · ${references.length} Projekte`}
        title={
          <>
            Was wir machen
            <br />
            und für wen.
          </>
        }
        size="md"
        wide
        paddingBottom={44}
      />
      <ReferenceGrid />
    </>
  );
}
