import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import ResourceDownload from "@/components/sections/ResourceDownload";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "資料ダウンロード",
  description: "サービス資料・料金資料・導入事例資料をダウンロードいただけます。",
};

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="DOWNLOAD"
          title="資料ダウンロード。"
          subtitle="サービス概要、料金体系、導入事例などの資料をPDFでまとめてご用意しています。ご検討にご利用ください。"
          image="/images/img-plaza.jpg"
          imagePosition="left"
        />
        <ResourceDownload />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
