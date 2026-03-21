import Header from "@/components/sections/Header";
import ResourceDownload from "@/components/sections/ResourceDownload";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "資料ダウンロード | 株式会社Backlly",
  description: "サービス資料・料金資料・導入事例資料をダウンロードいただけます。",
};

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main>
        <div className="h-20" />
        <ResourceDownload />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
