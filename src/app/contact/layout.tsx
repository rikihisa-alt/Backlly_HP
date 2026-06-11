import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "無料相談",
  description:
    "バックオフィスの現状を、まずはお聞かせください。初回相談は無料です。業務整理からシステム化まで、状況に合わせてご提案します。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
