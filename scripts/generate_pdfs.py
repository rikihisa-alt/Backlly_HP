#!/usr/bin/env python3
"""Backlly 3資料PDF生成スクリプト — 検討に耐える情報密度版"""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont

pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
pdfmetrics.registerFont(UnicodeCIDFont("HeiseiMin-W3"))

NAVY = HexColor("#0F172A")
CYAN = HexColor("#06B6D4")
GRAY = HexColor("#64748B")
LIGHT_GRAY = HexColor("#F1F5F9")
BORDER = HexColor("#E2E8F0")
WHITE = HexColor("#FFFFFF")
BG = HexColor("#F8FAFC")

GOTHIC = "HeiseiKakuGo-W5"
MINCHO = "HeiseiMin-W3"

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "docs")


def make_styles():
    return {
        "cover_title": ParagraphStyle(
            "cover_title", fontName=GOTHIC, fontSize=22, leading=32,
            textColor=NAVY, spaceAfter=8,
        ),
        "cover_sub": ParagraphStyle(
            "cover_sub", fontName=GOTHIC, fontSize=10, leading=16,
            textColor=GRAY, spaceAfter=4,
        ),
        "h1": ParagraphStyle(
            "h1", fontName=GOTHIC, fontSize=16, leading=24,
            textColor=NAVY, spaceBefore=20, spaceAfter=10,
        ),
        "h2": ParagraphStyle(
            "h2", fontName=GOTHIC, fontSize=13, leading=20,
            textColor=NAVY, spaceBefore=16, spaceAfter=8,
        ),
        "h3": ParagraphStyle(
            "h3", fontName=GOTHIC, fontSize=11, leading=17,
            textColor=NAVY, spaceBefore=12, spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "body", fontName=MINCHO, fontSize=9.5, leading=17,
            textColor=NAVY, spaceAfter=6,
        ),
        "body_small": ParagraphStyle(
            "body_small", fontName=MINCHO, fontSize=8.5, leading=14,
            textColor=GRAY, spaceAfter=4,
        ),
        "bullet": ParagraphStyle(
            "bullet", fontName=MINCHO, fontSize=9.5, leading=17,
            textColor=NAVY, leftIndent=14, spaceAfter=3,
            bulletIndent=0, bulletFontSize=9.5,
        ),
        "label": ParagraphStyle(
            "label", fontName=GOTHIC, fontSize=8, leading=12,
            textColor=CYAN, spaceAfter=2,
        ),
    }


def hr():
    return HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10, spaceBefore=6)


def sp(h=6):
    return Spacer(1, h * mm)


def cover_page(title, subtitle, s):
    return [
        sp(35),
        Paragraph("BACKLLY", s["label"]),
        sp(2),
        Paragraph(title, s["cover_title"]),
        sp(4),
        Paragraph(subtitle, s["cover_sub"]),
        sp(6),
        Paragraph("株式会社Backlly", s["body_small"]),
        Paragraph("https://backlly-hp.vercel.app", s["body_small"]),
        sp(4),
        hr(),
        Paragraph("本資料は社内検討用としてご活用ください。無断転載・二次配布はご遠慮ください。", s["body_small"]),
        PageBreak(),
    ]


def build_table(data, col_widths=None):
    style = TableStyle([
        ("FONTNAME", (0, 0), (-1, 0), GOTHIC),
        ("FONTNAME", (0, 1), (-1, -1), MINCHO),
        ("FONTSIZE", (0, 0), (-1, -1), 8.5),
        ("LEADING", (0, 0), (-1, -1), 14),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 1), (-1, -1), NAVY),
        ("BACKGROUND", (0, 1), (-1, -1), WHITE),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, BG]),
        ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ])
    t = Table(data, colWidths=col_widths, repeatRows=1)
    t.setStyle(style)
    return t


# ============================================================
# 1. サービス資料
# ============================================================
def gen_service(s):
    story = []
    story += cover_page(
        "サービス資料",
        "バックオフィスの構造設計から運用・システム構築まで\n検討に必要な情報をすべてまとめた資料です",
        s,
    )

    # TOC
    story.append(Paragraph("目次", s["h1"]))
    for t in [
        "1. バックオフィスが崩壊する構造",
        "2. なぜ「ツール導入」だけでは解決しないのか",
        "3. Backllyがやること",
        "4. 業務単位のBefore / After",
        "5. 支援体制と進め方",
        "6. やらないこと・向いていない企業",
        "7. 他社サービスとの違い",
        "8. 導入のリアル",
        "9. 相談すべきかの判断基準",
    ]:
        story.append(Paragraph(t, s["body"]))
    story.append(PageBreak())

    # 1
    story.append(Paragraph("1. バックオフィスが崩壊する構造", s["h1"]))
    story.append(Paragraph(
        "バックオフィスは「回っているように見えて、実は壊れている」状態に陥りやすい領域です。"
        "以下のような状態に心当たりはないでしょうか。", s["body"]))
    story.append(sp(3))
    story.append(build_table(
        [["業務領域", "よくある崩壊パターン"]] + [
            ["経理", "月末に特定の1人しか対応できない。その人が休むと請求が止まる。"],
            ["人事・労務", "入退社のたびに誰かが走り回る。チェックリストもなく、漏れが常態化。"],
            ["承認フロー", "紙・チャット・口頭が混在。誰が承認したか後から追えない。"],
            ["情報管理", "Excelが10個以上。どれが最新か誰もわからない。"],
            ["経営判断", "数字がリアルタイムで出ない。月次報告が翌月20日。"],
        ],
        col_widths=[80, 400],
    ))
    story.append(sp(4))
    story.append(Paragraph(
        "これらは個別の問題に見えますが、根本原因は共通しています。"
        "「業務フローが設計されていない」ことです。", s["body"]))
    story.append(PageBreak())

    # 2
    story.append(Paragraph("2. なぜ「ツール導入」だけでは解決しないのか", s["h1"]))
    story.append(Paragraph(
        "多くの企業が「SaaSを入れれば解決する」と考えます。"
        "しかし、業務フローが設計されていない状態でツールを入れても、"
        "混乱がデジタル上に移動するだけです。", s["body"]))
    story.append(sp(3))
    story.append(Paragraph("典型的な失敗パターン", s["h3"]))
    for f in [
        "・勤怠SaaSを入れたが、申請ルールが決まっておらず誰も正しく使えない",
        "・ワークフローツールを導入したが、承認者の定義が曖昧で止まる",
        "・会計ソフトを変えたが、仕訳ルールが属人化していて移行できない",
        "・チャットツールで業務連絡を管理しようとしたが、流れて消える",
    ]:
        story.append(Paragraph(f, s["bullet"]))
    story.append(sp(4))
    story.append(Paragraph(
        "ツールは「設計済みの業務フロー」の上で動いて初めて価値を持ちます。"
        "Backllyは、このフロー設計から始めます。", s["body"]))
    story.append(PageBreak())

    # 3
    story.append(Paragraph("3. Backllyがやること", s["h1"]))
    story.append(Paragraph(
        "Backllyの支援は大きく3段階で構成されます。"
        "必要な段階だけ利用することも、すべて一貫して依頼することも可能です。", s["body"]))
    story.append(sp(3))

    for title, tasks in [
        ("第1段階：整える（コンサルティング）", [
            "・現状業務のヒアリング（全部門・全フロー）",
            "・業務フローの可視化（誰が・何を・いつ・どう処理しているか）",
            "・ボトルネック特定（属人化・重複・抜け漏れの発見）",
            "・改善後フローの設計（担当・手順・判断基準の明文化）",
            "・運用ルールの策定（例外処理・エスカレーションルール含む）",
            "・導入すべきツールの選定と要件整理",
        ]),
        ("第2段階：回す（B-Hall導入）", [
            "・タスクの進行状況を一画面で把握",
            "・担当者・期限・ステータスの可視化",
            "・承認フローのデジタル化（申請→承認→完了の記録）",
            "・業務テンプレート（入退社手続き、月次締め等）の標準化",
            "・アラート機能（期限超過・未処理の自動通知）",
        ]),
        ("第3段階：作る（B-Core開発）", [
            "・業務要件に完全に合致したカスタムシステム開発",
            "・既存システム（会計・勤怠・CRM等）とのAPI連携",
            "・社内ポータル、管理画面、ダッシュボードの構築",
            "・開発後の保守・改修対応（月次の運用保守契約）",
        ]),
    ]:
        story.append(Paragraph(title, s["h2"]))
        for t in tasks:
            story.append(Paragraph(t, s["bullet"]))
        story.append(sp(3))
    story.append(PageBreak())

    # 4
    story.append(Paragraph("4. 業務単位のBefore / After", s["h1"]))
    story.append(Paragraph("以下は実際の支援で起きた変化の具体例です。", s["body"]))
    story.append(sp(3))
    story.append(build_table([
        ["業務", "Before", "After"],
        ["給与計算",
         "毎月20日〜25日に経理1名が5日間張り付き。\nExcel手計算。ミスが出ても翌月まで気づかない。",
         "勤怠データ→自動集計→確認→承認の4ステップ化。\n処理時間5日→1.5日。ダブルチェック体制構築。"],
        ["請求業務",
         "営業が口頭で依頼→経理がExcelで作成→\nメール送付。抜け漏れ月2〜3件。",
         "案件登録時に請求情報が自動生成。\n承認後に自動送付。抜け漏れゼロ。"],
        ["入退社手続き",
         "総務が記憶ベースで対応。保険・年金・\n備品・アカウント作成を個別処理。平均3日。",
         "チェックリスト＋自動タスク生成。\n担当自動割当。処理時間3日→4時間。"],
        ["承認フロー",
         "チャットで「承認お願いします」→\n既読スルー→催促→口頭承認。記録なし。",
         "申請→自動通知→ワンクリック承認→\n完了記録。平均承認時間4時間→30分。"],
        ["月次決算",
         "各部門からExcelを回収→手動統合→\nミス発見→修正依頼。報告は翌月15〜20日。",
         "データ自動集計→異常値アラート→\n確認→承認。報告は翌月5日。"],
    ], col_widths=[70, 210, 210]))
    story.append(PageBreak())

    # 5
    story.append(Paragraph("5. 支援体制と進め方", s["h1"]))
    story.append(Paragraph(
        "専任の担当者がヒアリングから運用開始まで一貫して対応します。"
        "外部パートナーへの丸投げは行いません。", s["body"]))
    story.append(sp(3))
    story.append(build_table([
        ["フェーズ", "内容", "期間目安"],
        ["ヒアリング", "現状業務の全体像把握。部門別に2〜3回。", "2〜3週間"],
        ["業務整理", "フロー図作成、課題の構造化、優先順位付け。", "2〜3週間"],
        ["設計", "改善後フロー設計、運用ルール策定、ツール選定。", "2〜4週間"],
        ["構築", "B-Hall設定 or B-Core開発。テスト運用構築。", "4〜8週間"],
        ["運用開始", "現場への説明、並行運用、切り替え、定着支援。", "2〜4週間"],
    ], col_widths=[80, 290, 80]))
    story.append(sp(4))
    story.append(Paragraph(
        "全体で3〜5ヶ月が標準的な導入期間です。"
        "コンサルティングのみの場合は1〜2ヶ月で完了します。", s["body"]))
    story.append(PageBreak())

    # 6
    story.append(Paragraph("6. やらないこと・向いていない企業", s["h1"]))
    story.append(Paragraph("Backllyが対応しないこと：", s["h3"]))
    for n in [
        "・税務申告、記帳代行（税理士業務）",
        "・社会保険手続きの代行（社労士業務）",
        "・採用代行、人材紹介",
        "・既存SaaSのカスタマーサポート代行",
        "・BtoC向けのアプリ開発・LP制作",
    ]:
        story.append(Paragraph(n, s["bullet"]))
    story.append(sp(4))
    story.append(Paragraph("向いていない企業の特徴：", s["h3"]))
    for n in [
        "・「とりあえずツールを入れたい」だけの企業",
        "・社内に業務変更の意思決定者がいない企業",
        "・現場の協力が一切得られない状態の企業",
        "・月額5万円以下の予算で全業務改善を求める企業",
    ]:
        story.append(Paragraph(n, s["bullet"]))
    story.append(sp(4))
    story.append(Paragraph(
        "これらに該当する場合は、初回相談時に率直にお伝えします。"
        "無理に契約をお勧めすることはありません。", s["body"]))
    story.append(PageBreak())

    # 7
    story.append(Paragraph("7. 他社サービスとの違い", s["h1"]))
    story.append(build_table([
        ["比較項目", "一般的なコンサル", "SaaS単体導入", "Backlly"],
        ["業務フロー設計", "提案書止まり\n（実装は別会社）", "なし\n（ツールに合わせる）", "設計から実装まで\n一貫対応"],
        ["システム構築", "外注先を紹介", "SaaSの範囲内のみ", "自社開発チームが\n専用構築"],
        ["運用支援", "報告書提出で終了", "ヘルプデスクのみ", "定着するまで並走"],
        ["カスタマイズ", "なし", "設定変更レベル", "業務に合わせて\nゼロから設計"],
        ["担当体制", "コンサルタントのみ", "カスタマーサクセス", "設計者＝開発者\n一貫体制"],
    ], col_widths=[80, 130, 130, 130]))
    story.append(sp(4))
    story.append(Paragraph(
        "Backllyの最大の違いは「設計した人間が、そのまま構築・運用まで担当する」ことです。"
        "伝言ゲームが発生しないため、設計意図がそのまま実装に反映されます。", s["body"]))
    story.append(PageBreak())

    # 8
    story.append(Paragraph("8. 導入のリアル", s["h1"]))
    for q, a in [
        ("Q. 社内の負担はどのくらいですか？",
         "ヒアリング段階で各部門の担当者に1〜2時間のインタビューをお願いします。"
         "それ以外の作業はBacklly側で行います。設計フェーズでは週1回30分の確認ミーティング。"),
        ("Q. 途中でやめることはできますか？",
         "はい。各フェーズ完了時に継続の判断ができます。"
         "コンサルティングだけで終了し、設計書を持ち帰ることも可能です。"),
        ("Q. 既存のシステムはどうなりますか？",
         "利用中のSaaS（freee、マネーフォワード、SmartHR等）はそのまま活かします。"
         "足りない部分だけを補う設計を行います。入替が必要な場合は事前に説明します。"),
    ]:
        story.append(Paragraph(q, s["h3"]))
        story.append(Paragraph(a, s["body"]))
        story.append(sp(3))
    story.append(PageBreak())

    # 9
    story.append(Paragraph("9. 相談すべきかの判断基準", s["h1"]))
    story.append(Paragraph("以下のうち、3つ以上当てはまる場合は相談をお勧めします。", s["body"]))
    story.append(sp(3))
    for c in [
        "□ 特定の人が休むと業務が止まる領域がある",
        "□ 同じ情報を複数のExcelやツールに手入力している",
        "□ 月末・月初に特定部門がパンクする",
        "□ 「誰が何を承認したか」の記録が残っていない",
        "□ 業務マニュアルが存在しない、または古い",
        "□ SaaSを入れたが定着していないものがある",
        "□ 新しい人が入っても業務を教えるのに1ヶ月以上かかる",
        "□ 経営数値の報告に2週間以上かかる",
    ]:
        story.append(Paragraph(c, s["body"]))
    story.append(sp(6))
    story.append(hr())
    story.append(Paragraph(
        "初回のご相談は無料です。現状をお聞きしたうえで、"
        "Backllyで対応可能か、どの段階から始めるべきかをお伝えします。", s["body"]))
    story.append(sp(3))
    story.append(Paragraph("お問い合わせ：https://backlly-hp.vercel.app/contact", s["body"]))
    story.append(Paragraph("返信目安：1営業日以内", s["body_small"]))
    return story


# ============================================================
# 2. 料金資料
# ============================================================
def gen_pricing(s):
    story = []
    story += cover_page(
        "料金資料",
        "費用の考え方、導入パターン別の費用感、\n判断基準をまとめた資料です",
        s,
    )

    story.append(Paragraph("目次", s["h1"]))
    for t in [
        "1. 料金が決まるロジック",
        "2. サービス別の料金体系",
        "3. 導入パターン別の費用シミュレーション",
        "4. 人件費との比較",
        "5. よくある質問",
        "6. 「やるべきか」の判断基準",
    ]:
        story.append(Paragraph(t, s["body"]))
    story.append(PageBreak())

    # 1
    story.append(Paragraph("1. 料金が決まるロジック", s["h1"]))
    story.append(Paragraph(
        "Backllyの料金は「何人月の工数がかかるか」で決まります。"
        "企業規模・業務範囲・システム開発の有無によって変動します。", s["body"]))
    story.append(sp(3))
    story.append(Paragraph("料金に影響する要素：", s["h3"]))
    for f in [
        "・対象業務の範囲（経理のみ ↔ バックオフィス全体）",
        "・現状の整理度合い（フローが一部あるか ↔ 完全に属人化か）",
        "・システム構築の有無（B-Hall設定のみ ↔ B-Coreフル開発）",
        "・拠点数（1拠点 ↔ 複数拠点で業務が分散）",
        "・運用保守の必要性（導入後の継続支援の有無）",
    ]:
        story.append(Paragraph(f, s["bullet"]))
    story.append(sp(4))
    story.append(Paragraph(
        "見積もりは初回ヒアリング後に提示します。概算は無料相談時にお伝えできます。", s["body"]))
    story.append(PageBreak())

    # 2
    story.append(Paragraph("2. サービス別の料金体系", s["h1"]))
    story.append(build_table([
        ["サービス", "内容", "料金目安", "期間目安"],
        ["コンサルティング\n（整える）", "業務ヒアリング\nフロー設計\n改善提案書作成", "月額 15〜30万円", "1〜3ヶ月"],
        ["B-Hall導入\n（回す）", "システム初期設定\nデータ移行\n運用開始支援", "初期 30〜80万円\n月額 3〜8万円", "1〜2ヶ月"],
        ["B-Core開発\n（作る）", "要件定義\n設計・開発\nテスト・納品", "150〜500万円\n（規模による）", "2〜5ヶ月"],
        ["運用保守", "月次レビュー\n改修対応\n問い合わせ対応", "月額 5〜15万円", "継続"],
    ], col_widths=[90, 150, 120, 80]))
    story.append(sp(3))
    story.append(Paragraph("※ 金額はすべて税別です。正式な見積もりはヒアリング後に提示します。", s["body_small"]))
    story.append(PageBreak())

    # 3
    story.append(Paragraph("3. 導入パターン別の費用シミュレーション", s["h1"]))

    story.append(Paragraph("パターンA：業務整理だけ（従業員10〜30名）", s["h2"]))
    story.append(build_table([
        ["項目", "内容", "費用"],
        ["コンサルティング", "経理・労務の業務整理（2ヶ月）", "40万円"],
        ["成果物", "業務フロー図、改善提案書、運用ルール", "—"],
        ["合計", "", "約40万円"],
    ], col_widths=[120, 250, 80]))
    story.append(sp(4))

    story.append(Paragraph("パターンB：業務整理＋B-Hall（従業員20〜50名）", s["h2"]))
    story.append(build_table([
        ["項目", "内容", "費用"],
        ["コンサルティング", "バックオフィス全体の業務整理（2ヶ月）", "50万円"],
        ["B-Hall初期導入", "設定・データ移行・運用テスト", "50万円"],
        ["B-Hall月額", "月額利用料（12ヶ月分）", "72万円"],
        ["合計（初年度）", "", "約172万円"],
    ], col_widths=[120, 250, 80]))
    story.append(sp(4))

    story.append(Paragraph("パターンC：フルパッケージ（従業員50〜100名）", s["h2"]))
    story.append(build_table([
        ["項目", "内容", "費用"],
        ["コンサルティング", "全部門の業務整理（3ヶ月）", "75万円"],
        ["B-Hall初期導入", "設定・移行・運用テスト", "60万円"],
        ["B-Core開発", "社内ポータル＋自動化システム", "300万円"],
        ["月額運用", "保守＋B-Hall月額（12ヶ月分）", "156万円"],
        ["合計（初年度）", "", "約591万円"],
    ], col_widths=[120, 250, 80]))
    story.append(PageBreak())

    # 4
    story.append(Paragraph("4. 人件費との比較", s["h1"]))
    story.append(Paragraph(
        "バックオフィス業務を「人を増やして対応する」場合と、"
        "Backllyで仕組み化する場合の比較です。", s["body"]))
    story.append(sp(3))
    story.append(build_table([
        ["", "人を1名採用する場合", "Backllyで仕組み化"],
        ["初期コスト", "採用費 50〜100万円\n研修 1〜3ヶ月", "コンサル 40〜75万円\n（即座に着手）"],
        ["年間コスト", "人件費 400〜500万円\n（社保・福利含む）", "月額 8〜20万円\n（年96〜240万円）"],
        ["退職リスク", "退職時にノウハウ消失\n再採用に3〜6ヶ月", "仕組みは残る\n担当変更も即日"],
        ["スケーラビリティ", "人数に比例してコスト増", "仕組みは人数に\n依存しない"],
        ["3年間の総コスト", "1,250〜1,600万円", "280〜820万円"],
    ], col_widths=[100, 190, 190]))
    story.append(sp(4))
    story.append(Paragraph(
        "人件費1名分の約半額以下で、属人化解消とシステム化が可能です。"
        "仕組みは人が変わっても維持されます。", s["body"]))
    story.append(PageBreak())

    # 5
    story.append(Paragraph("5. よくある質問", s["h1"]))
    for q, a in [
        ("Q. 最低契約期間は？",
         "コンサルティングは最低1ヶ月から。B-Hall月額は最低6ヶ月。"
         "B-Core開発は完了時点で納品。その後の保守は任意です。"),
        ("Q. 分割払いは？",
         "B-Core開発費は着手時50%・納品時50%の2回払いが標準です。"
         "月額払い（6〜12回）のご相談も可能です。"),
        ("Q. 追加費用は発生する？",
         "合意した範囲を超える追加開発は事前に見積もり提示します。"
         "承認なく追加費用が発生することはありません。"),
        ("Q. 途中解約は？",
         "各フェーズ完了時に継続・中断の判断が可能です。"
         "設計書のみ納品で完了することもできます。"),
    ]:
        story.append(Paragraph(q, s["h3"]))
        story.append(Paragraph(a, s["body"]))
        story.append(sp(3))
    story.append(PageBreak())

    # 6
    story.append(Paragraph("6. 「やるべきか」の判断基準", s["h1"]))
    story.append(Paragraph("以下の計算をしてみてください。", s["body"]))
    story.append(sp(3))
    for q, ex in [
        ("現在、バックオフィス業務に月何時間かかっていますか？",
         "例：経理20h + 労務15h + 総務10h + 管理者の確認5h = 月50時間"),
        ("その時間を時給換算するといくらですか？",
         "例：50時間 × 時給3,000円 = 月15万円 = 年180万円"),
        ("そのうち30〜50%を削減できるとしたら？",
         "例：年180万円 × 40%削減 = 年72万円のコスト削減"),
    ]:
        story.append(Paragraph(q, s["h3"]))
        story.append(Paragraph(ex, s["body"]))
        story.append(sp(2))
    story.append(sp(4))
    story.append(Paragraph(
        "年間の削減効果が導入コストを上回るなら、投資として成立します。"
        "多くの場合、1〜2年で投資回収が完了します。", s["body"]))
    story.append(sp(4))
    story.append(hr())
    story.append(Paragraph("概算の見積もりは無料相談でお伝えできます。", s["body"]))
    story.append(Paragraph("お問い合わせ：https://backlly-hp.vercel.app/contact", s["body"]))
    return story


# ============================================================
# 3. 導入事例資料
# ============================================================
def gen_cases(s):
    story = []
    story += cover_page(
        "導入事例資料",
        "業種別の課題、支援内容、導入後の変化を\nリアルにまとめた資料です",
        s,
    )

    story.append(Paragraph("掲載事例", s["h1"]))
    for t in [
        "事例1. 訪問看護事業者（従業員25名 / 大阪府）",
        "事例2. ITスタートアップ企業（従業員40名 / 東京都）",
        "事例3. 介護事業者・多拠点（従業員80名 / 関西圏）",
    ]:
        story.append(Paragraph(t, s["body"]))
    story.append(PageBreak())

    # Case 1
    story.append(Paragraph("事例1. 訪問看護事業者", s["h1"]))
    story.append(build_table([
        ["業種", "医療・ヘルスケア（訪問看護）"],
        ["従業員数", "25名（看護師18名、事務3名、管理者4名）"],
        ["所在地", "大阪府"],
        ["支援範囲", "コンサルティング + B-Hall導入"],
        ["期間", "3ヶ月"],
    ], col_widths=[100, 380]))
    story.append(sp(4))

    story.append(Paragraph("導入前の状態", s["h2"]))
    story.append(Paragraph(
        "看護師のシフト管理をExcelで行い、シフト作成に管理者が毎週6時間以上費やしていた。"
        "訪問記録は紙ベースで、月末に事務員が手入力で転記。請求書の作成に毎月5日間。"
        "急な欠勤時は管理者が電話で一人ずつ代替を探す。1件の調整に平均40分。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何が詰まっていたか", s["h2"]))
    story.append(Paragraph(
        "シフト・訪問記録・請求が完全に分断。シフトはExcel、訪問記録は紙、請求は別のExcel。"
        "3つのデータを突合する作業が毎月発生し、ここで必ずミスが出る。"
        "根本原因は「情報の流れが設計されていない」こと。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何をどう変えたか", s["h2"]))
    for st in [
        "・全業務フローの可視化（2週間のヒアリング）",
        "・シフト→訪問記録→請求の一気通貫フロー設計",
        "・B-Hallでシフト管理・訪問記録・請求を一元化",
        "・看護師がスマホから訪問記録を入力できる仕組み構築",
        "・シフト変更時の自動通知・代替候補表示機能を実装",
    ]:
        story.append(Paragraph(st, s["bullet"]))
    story.append(sp(3))

    story.append(Paragraph("導入後の変化", s["h2"]))
    story.append(build_table([
        ["指標", "Before", "After"],
        ["シフト作成時間", "週6時間", "週1.5時間（75%削減）"],
        ["請求書作成", "月5日間", "月1日（自動集計）"],
        ["訪問記録の転記", "月末に3日間手入力", "リアルタイム（転記ゼロ）"],
        ["急な欠勤対応", "1件40分（電話）", "1件5分（自動候補表示）"],
        ["請求ミス", "月2〜3件", "ゼロ"],
    ], col_widths=[120, 170, 170]))
    story.append(sp(3))

    story.append(Paragraph("経営的な変化", s["h2"]))
    story.append(Paragraph(
        "管理者がシフト作成から解放され、看護師の育成と利用者対応に時間を使えるように。"
        "月次の収支が翌月3日に確定。経営判断のスピードが上がった。"
        "事務員の残業がゼロになり、年間で約60万円の人件費削減。", s["body"]))
    story.append(PageBreak())

    # Case 2
    story.append(Paragraph("事例2. ITスタートアップ企業", s["h1"]))
    story.append(build_table([
        ["業種", "IT・SaaS"],
        ["従業員数", "40名（エンジニア25名、営業8名、管理部門7名）"],
        ["所在地", "東京都"],
        ["支援範囲", "コンサルティング + B-Hall + B-Core開発"],
        ["期間", "5ヶ月"],
    ], col_widths=[100, 380]))
    story.append(sp(4))

    story.append(Paragraph("導入前の状態", s["h2"]))
    story.append(Paragraph(
        "急成長で半年で15名増員。バックオフィスは創業メンバー1名が「なんとなく」回していた。"
        "経費精算はSlackで写真を送って「お願いします」。勤怠はスプレッドシートに自己申告。"
        "入社手続きは毎回「前回どうやったっけ？」から始まる。"
        "管理者が毎月60時間以上をバックオフィスに費やしていた。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何が詰まっていたか", s["h2"]))
    story.append(Paragraph(
        "そもそも「業務」として認識されていなかった。"
        "誰かが気づいてやる、で成り立っていた仕組みが人数増加で完全に破綻。"
        "ルールがないので人によってやり方が違う。引き継ぎもできない。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何をどう変えたか", s["h2"]))
    for st in [
        "・バックオフィス業務の棚卸し（47の業務タスクを特定）",
        "・各タスクの担当・手順・判断基準を明文化",
        "・B-Hallで経費・勤怠・入退社・承認フローを一元管理",
        "・B-Coreで社内ポータル構築（入社手続き自動化、備品管理、契約管理）",
        "・freee・SmartHRとのAPI連携で二重入力を排除",
    ]:
        story.append(Paragraph(st, s["bullet"]))
    story.append(sp(3))

    story.append(Paragraph("導入後の変化", s["h2"]))
    story.append(build_table([
        ["指標", "Before", "After"],
        ["管理者のバックオフィス工数", "月60時間", "月8時間（87%削減）"],
        ["入社手続き", "毎回3日（手探り）", "半日（自動チェックリスト）"],
        ["経費精算", "Slack→Excel手入力", "アプリ申請→自動仕訳"],
        ["月次決算", "翌月20日", "翌月5日"],
        ["業務マニュアル", "なし", "全47タスク文書化済み"],
    ], col_widths=[140, 150, 170]))
    story.append(sp(3))

    story.append(Paragraph("経営的な変化", s["h2"]))
    story.append(Paragraph(
        "管理部門の増員を1名回避（年間約450万円の人件費削減）。"
        "管理者がプロダクト開発に集中でき、リリースサイクルが月1→月2回に。"
        "投資家向け月次レポートが自動生成されIR対応工数も削減。", s["body"]))
    story.append(PageBreak())

    # Case 3
    story.append(Paragraph("事例3. 介護事業者（多拠点）", s["h1"]))
    story.append(build_table([
        ["業種", "介護・福祉"],
        ["従業員数", "80名（介護職員60名、事務8名、管理者12名）"],
        ["拠点数", "4拠点（大阪2、兵庫1、京都1）"],
        ["支援範囲", "コンサルティング + B-Hall + B-Core開発"],
        ["期間", "6ヶ月"],
    ], col_widths=[100, 380]))
    story.append(sp(4))

    story.append(Paragraph("導入前の状態", s["h2"]))
    story.append(Paragraph(
        "4拠点でそれぞれ異なる方法で業務管理。A拠点はExcel、B拠点は紙、"
        "C拠点はGoogleスプレッドシート、D拠点は口頭ベース。"
        "本部が全拠点の状況を把握するのに毎月1週間。"
        "シフト作成は各拠点の管理者が個別に行い、拠点間の応援調整は電話とFAX。"
        "請求業務は拠点ごとにやり方が違い、本部での集約時に必ず差異が出る。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何が詰まっていたか", s["h2"]))
    story.append(Paragraph(
        "拠点ごとの「ローカルルール」が積み上がり統一が不可能な状態。"
        "本部が全体を見れない。各拠点が孤立運営。"
        "拠点間で人員を融通したくても、シフト・スキル・資格情報が散在して判断できない。", s["body"]))
    story.append(sp(3))

    story.append(Paragraph("何をどう変えたか", s["h2"]))
    for st in [
        "・4拠点すべてのヒアリング（各拠点2日、計8日間）",
        "・拠点横断の統一業務フロー設計（共通ルール＋拠点固有ルールの整理）",
        "・B-Hallで全拠点のタスク・シフト・請求を一元管理",
        "・B-Coreで拠点横断ダッシュボード開発（稼働率・売上・人員をリアルタイム表示）",
        "・職員のスキル・資格データベース構築（拠点間応援の判断材料）",
        "・各拠点管理者への操作研修（各拠点半日×2回）",
    ]:
        story.append(Paragraph(st, s["bullet"]))
    story.append(sp(3))

    story.append(Paragraph("導入後の変化", s["h2"]))
    story.append(build_table([
        ["指標", "Before", "After"],
        ["本部の状況把握", "月1回（1週間かけて集約）", "リアルタイム（ダッシュボード）"],
        ["拠点間の応援調整", "電話・FAXで半日", "システム上で30分"],
        ["請求業務の統一", "拠点ごとに異なる", "統一フロー（差異ゼロ）"],
        ["月次報告", "翌月15日", "翌月3日（自動集約）"],
        ["新拠点立ち上げ", "2ヶ月（ゼロから構築）", "2週間（テンプレート適用）"],
    ], col_widths=[130, 160, 170]))
    story.append(sp(3))

    story.append(Paragraph("経営的な変化", s["h2"]))
    story.append(Paragraph(
        "5拠点目の開設が2ヶ月→2週間に短縮。事業拡大のスピードが変わった。"
        "本部の管理要員を3名→1名に削減（年間約800万円の人件費削減）。"
        "拠点間の稼働率の偏りが可視化され、人員配置最適化で売上が月次で8%向上。", s["body"]))
    story.append(PageBreak())

    # Summary
    story.append(Paragraph("導入事例から見える共通点", s["h1"]))
    story.append(sp(3))
    for title, desc in [
        ("問題の本質は「ツール不足」ではない",
         "どの企業もツールは何かしら使っていた。問題は「業務フローが設計されていない」こと。"),
        ("属人化の解消が最大の効果",
         "特定の人に依存していた業務が仕組み化されることで、退職リスク・引き継ぎコストが消える。"),
        ("経営数値の可視化が副次効果",
         "業務が整理されると、データが正しく・早く出る。これが経営判断のスピードを変える。"),
        ("投資回収は1〜2年",
         "どの事例でも、人件費削減・工数削減の効果が導入コストを1〜2年で上回っている。"),
    ]:
        story.append(Paragraph(title, s["h3"]))
        story.append(Paragraph(desc, s["body"]))
        story.append(sp(3))
    story.append(sp(4))
    story.append(hr())
    story.append(Paragraph(
        "自社の状況に近い事例があれば、より詳しい内容をお伝えできます。"
        "まずはお気軽にご相談ください。", s["body"]))
    story.append(sp(3))
    story.append(Paragraph("お問い合わせ：https://backlly-hp.vercel.app/contact", s["body"]))
    return story


# ============================================================
def build_pdf(filename, story_fn):
    path = os.path.join(OUT_DIR, filename)
    doc = SimpleDocTemplate(
        path, pagesize=A4,
        topMargin=25 * mm, bottomMargin=20 * mm,
        leftMargin=20 * mm, rightMargin=20 * mm,
    )
    s = make_styles()
    doc.build(story_fn(s))
    size = os.path.getsize(path)
    print(f"Generated: {path} ({size // 1024} KB)")


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    build_pdf("service-guide.pdf", gen_service)
    build_pdf("pricing-guide.pdf", gen_pricing)
    build_pdf("case-studies.pdf", gen_cases)
    print("Done.")
