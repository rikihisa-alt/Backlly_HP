#!/usr/bin/env python3
"""Generate PDF documents for Backlly corporate website."""

import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont

# Register Japanese fonts
pdfmetrics.registerFont(UnicodeCIDFont("HeiseiKakuGo-W5"))
pdfmetrics.registerFont(UnicodeCIDFont("HeiseiMin-W3"))

NAVY = HexColor("#0F172A")
CYAN = HexColor("#06B6D4")
LIGHT_GRAY = HexColor("#F8FAFC")
MID_GRAY = HexColor("#64748B")
BORDER = HexColor("#E2E8F0")
WHITE = HexColor("#FFFFFF")

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "docs")
os.makedirs(OUTPUT_DIR, exist_ok=True)

W, H = A4


def draw_header(c, title):
    """Draw page header with logo text and line."""
    c.setFillColor(NAVY)
    c.setFont("HeiseiKakuGo-W5", 10)
    c.drawString(30 * mm, H - 20 * mm, "Backlly")
    c.setFillColor(MID_GRAY)
    c.setFont("HeiseiKakuGo-W5", 7)
    c.drawRightString(W - 30 * mm, H - 20 * mm, title)
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(30 * mm, H - 23 * mm, W - 30 * mm, H - 23 * mm)


def draw_footer(c, page_num):
    """Draw page footer."""
    c.setFillColor(MID_GRAY)
    c.setFont("HeiseiKakuGo-W5", 6)
    c.drawString(30 * mm, 15 * mm, "\u00A9 2025 Backlly Inc.")
    c.drawRightString(W - 30 * mm, 15 * mm, str(page_num))
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(30 * mm, 19 * mm, W - 30 * mm, 19 * mm)


def draw_cover(c, title, subtitle):
    """Draw cover page."""
    # Navy top bar
    c.setFillColor(NAVY)
    c.rect(0, H - 8 * mm, W, 8 * mm, fill=1, stroke=0)
    # Cyan accent line
    c.setFillColor(CYAN)
    c.rect(30 * mm, H / 2 + 30 * mm, 3 * mm, 20 * mm, fill=1, stroke=0)
    # Title
    c.setFillColor(NAVY)
    c.setFont("HeiseiMin-W3", 28)
    c.drawString(38 * mm, H / 2 + 35 * mm, title)
    # Subtitle
    c.setFillColor(MID_GRAY)
    c.setFont("HeiseiKakuGo-W5", 11)
    c.drawString(38 * mm, H / 2 + 22 * mm, subtitle)
    # Company
    c.setFillColor(NAVY)
    c.setFont("HeiseiKakuGo-W5", 10)
    c.drawString(38 * mm, H / 2 - 5 * mm, "\u682A\u5F0F\u4F1A\u793EBacklly")
    c.setFillColor(MID_GRAY)
    c.setFont("HeiseiKakuGo-W5", 8)
    c.drawString(38 * mm, H / 2 - 13 * mm, "\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u3092\u3001\u6A5F\u80FD\u3055\u305B\u308B\u3002")
    # Bottom bar
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 5 * mm, fill=1, stroke=0)


def draw_section_title(c, y, label, title):
    """Draw a section title with cyan accent."""
    c.setFillColor(CYAN)
    c.rect(30 * mm, y - 1 * mm, 2 * mm, 8 * mm, fill=1, stroke=0)
    c.setFillColor(CYAN)
    c.setFont("HeiseiKakuGo-W5", 7)
    c.drawString(35 * mm, y + 5 * mm, label)
    c.setFillColor(NAVY)
    c.setFont("HeiseiMin-W3", 16)
    c.drawString(35 * mm, y - 4 * mm, title)
    return y - 18 * mm


def draw_text(c, y, text, size=9, color=NAVY, font="HeiseiKakuGo-W5", max_width=140 * mm):
    """Draw wrapped text. Returns new y position."""
    c.setFillColor(color)
    c.setFont(font, size)
    # Simple wrapping
    chars_per_line = int(max_width / (size * 0.6))
    lines = []
    for line in text.split("\n"):
        while len(line) > chars_per_line:
            lines.append(line[:chars_per_line])
            line = line[chars_per_line:]
        lines.append(line)
    for line in lines:
        c.drawString(35 * mm, y, line)
        y -= size * 0.5 * mm + 2 * mm
    return y


def draw_contact(c, y):
    """Draw contact section."""
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(30 * mm, y, W - 30 * mm, y)
    y -= 12 * mm
    c.setFillColor(NAVY)
    c.setFont("HeiseiMin-W3", 14)
    c.drawString(35 * mm, y, "\u304A\u554F\u3044\u5408\u308F\u305B")
    y -= 10 * mm
    c.setFont("HeiseiKakuGo-W5", 9)
    c.setFillColor(MID_GRAY)
    c.drawString(35 * mm, y, "\u521D\u56DE\u76F8\u8AC7\u306F\u7121\u6599\u3067\u3059\u3002\u304A\u6C17\u8EFD\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002")
    y -= 8 * mm
    c.setFillColor(NAVY)
    c.drawString(35 * mm, y, "\u682A\u5F0F\u4F1A\u793EBacklly")
    y -= 6 * mm
    c.setFillColor(MID_GRAY)
    c.drawString(35 * mm, y, "\u5927\u962A\u5E9C\u5927\u962A\u5E02 / TEL: 06-111-111")
    return y


# ============================================================
# 1. Service Guide
# ============================================================
def generate_service_guide():
    path = os.path.join(OUTPUT_DIR, "service-guide.pdf")
    c = canvas.Canvas(path, pagesize=A4)

    # Page 1: Cover
    draw_cover(c, "\u30B5\u30FC\u30D3\u30B9\u8CC7\u6599", "Service Guide")
    c.showPage()

    # Page 2: Company overview + service overview
    draw_header(c, "\u30B5\u30FC\u30D3\u30B9\u8CC7\u6599")
    y = H - 35 * mm
    y = draw_section_title(c, y, "ABOUT", "Backlly\u306B\u3064\u3044\u3066")
    y = draw_text(c, y, "\u682A\u5F0F\u4F1A\u793EBacklly\u306F\u3001\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u696D\u52D9\u306E\u6574\u7406\u30FB\u8A2D\u8A08\u30FB\u30B7\u30B9\u30C6\u30E0\u5316\u3092", color=MID_GRAY)
    y = draw_text(c, y, "\u4E00\u8CAB\u3057\u3066\u652F\u63F4\u3059\u308B\u4F01\u696D\u3067\u3059\u3002", color=MID_GRAY)
    y -= 5 * mm
    y = draw_text(c, y, "\u696D\u52D9\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u304B\u3089\u3001\u81EA\u793E\u30D7\u30ED\u30C0\u30AF\u30C8\u300CB-Hall\u300D\u306E\u63D0\u4F9B\u3001", color=MID_GRAY)
    y = draw_text(c, y, "\u4F01\u696D\u5C02\u7528\u30B7\u30B9\u30C6\u30E0\u300CB-Core\u300D\u306E\u958B\u767A\u307E\u3067\u3001", color=MID_GRAY)
    y = draw_text(c, y, "\u8AB2\u984C\u306B\u5408\u308F\u305B\u305F\u6700\u9069\u306A\u652F\u63F4\u4F53\u5236\u3092\u69CB\u7BC9\u3057\u307E\u3059\u3002", color=MID_GRAY)
    y -= 10 * mm

    y = draw_section_title(c, y, "SERVICES", "\u30B5\u30FC\u30D3\u30B9\u4E00\u89A7")
    y -= 3 * mm
    services = [
        ("\u6574\u3048\u308B", "\u30B3\u30F3\u30B5\u30EB", "\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0",
         "\u696D\u52D9\u306E\u68DA\u5378\u3057\u304B\u3089\u30D5\u30ED\u30FC\u8A2D\u8A08\u3001\u5F79\u5272\u6574\u7406\u307E\u3067\u3092\u884C\u3044\u3001\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u5168\u4F53\u306E\u69CB\u9020\u3092\u6574\u7406\u3057\u307E\u3059\u3002"),
        ("\u56DE\u3059", "B-Hall", "\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u4E00\u5143\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0",
         "\u696D\u52D9\u306E\u53EF\u8996\u5316\u30FB\u9032\u884C\u7BA1\u7406\u30FB\u62C5\u5F53\u7BA1\u7406\u3092\u4E00\u753B\u9762\u306B\u96C6\u7D04\u3002\u65E5\u3005\u306E\u904B\u7528\u3092\u5B89\u5B9A\u3055\u305B\u307E\u3059\u3002"),
        ("\u4F5C\u308B", "B-Core", "\u4F01\u696D\u5C02\u7528\u30B7\u30B9\u30C6\u30E0\u958B\u767A",
         "\u4F01\u696D\u3054\u3068\u306E\u696D\u52D9\u306B\u6700\u9069\u5316\u3055\u308C\u305F\u30B7\u30B9\u30C6\u30E0\u3092\u3001\u8981\u4EF6\u5B9A\u7FA9\u304B\u3089\u8A2D\u8A08\u30FB\u958B\u767A\u30FB\u904B\u7528\u307E\u3067\u4E00\u8CAB\u3057\u3066\u69CB\u7BC9\u3002"),
    ]
    for label, name, tagline, desc in services:
        c.setFillColor(CYAN)
        c.setFont("HeiseiKakuGo-W5", 7)
        c.drawString(35 * mm, y, f"{label} \u2014 {tagline}")
        y -= 6 * mm
        c.setFillColor(NAVY)
        c.setFont("HeiseiMin-W3", 13)
        c.drawString(35 * mm, y, name)
        y -= 7 * mm
        y = draw_text(c, y, desc, size=8, color=MID_GRAY)
        y -= 5 * mm

    draw_footer(c, 1)
    c.showPage()

    # Page 3: Approach
    draw_header(c, "\u30B5\u30FC\u30D3\u30B9\u8CC7\u6599")
    y = H - 35 * mm
    y = draw_section_title(c, y, "APPROACH", "\u652F\u63F4\u306E\u9032\u3081\u65B9")
    y -= 5 * mm
    steps = [
        ("STEP 1", "\u30D2\u30A2\u30EA\u30F3\u30B0", "\u73FE\u72B6\u306E\u8AB2\u984C\u3068\u696D\u52D9\u3092\u628A\u63E1\u3059\u308B"),
        ("STEP 2", "\u696D\u52D9\u6574\u7406", "\u696D\u52D9\u30D5\u30ED\u30FC\u3092\u53EF\u8996\u5316\u3057\u68DA\u5378\u3057\u3059\u308B"),
        ("STEP 3", "\u8A2D\u8A08", "\u6700\u9069\u306A\u69CB\u9020\u3068\u904B\u7528\u3092\u8A2D\u8A08\u3059\u308B"),
        ("STEP 4", "\u30B7\u30B9\u30C6\u30E0\u69CB\u7BC9", "\u8A2D\u8A08\u306B\u57FA\u3065\u304D\u30B7\u30B9\u30C6\u30E0\u3092\u5B9F\u88C5\u3059\u308B"),
        ("STEP 5", "\u904B\u7528\u652F\u63F4", "\u5B9A\u7740\u3059\u308B\u307E\u3067\u4F34\u8D70\u3059\u308B"),
    ]
    for step, title, desc in steps:
        # Circle
        c.setStrokeColor(BORDER)
        c.setLineWidth(1)
        c.circle(40 * mm, y + 1 * mm, 4 * mm, stroke=1, fill=0)
        c.setFillColor(CYAN)
        c.setFont("HeiseiKakuGo-W5", 5)
        c.drawCentredString(40 * mm, y, step[-1])
        # Text
        c.setFillColor(NAVY)
        c.setFont("HeiseiMin-W3", 11)
        c.drawString(50 * mm, y + 2 * mm, f"{step}  {title}")
        c.setFillColor(MID_GRAY)
        c.setFont("HeiseiKakuGo-W5", 8)
        c.drawString(50 * mm, y - 5 * mm, desc)
        # Connector line
        if step != "STEP 5":
            c.setStrokeColor(BORDER)
            c.setLineWidth(0.5)
            c.line(40 * mm, y - 4 * mm, 40 * mm, y - 12 * mm)
        y -= 18 * mm

    y -= 15 * mm
    y = draw_contact(c, y)
    draw_footer(c, 2)
    c.showPage()

    c.save()
    print(f"Created: {path}")


# ============================================================
# 2. Pricing Guide
# ============================================================
def generate_pricing_guide():
    path = os.path.join(OUTPUT_DIR, "pricing-guide.pdf")
    c = canvas.Canvas(path, pagesize=A4)

    # Cover
    draw_cover(c, "\u6599\u91D1\u8CC7\u6599", "Pricing Guide")
    c.showPage()

    # Page 2: Pricing
    draw_header(c, "\u6599\u91D1\u8CC7\u6599")
    y = H - 35 * mm
    y = draw_section_title(c, y, "PRICING", "\u6599\u91D1\u4F53\u7CFB")
    y = draw_text(c, y, "\u696D\u52D9\u306E\u6574\u7406\u304B\u3089\u904B\u7528\u30FB\u958B\u767A\u307E\u3067\u3001\u6BB5\u968E\u7684\u306B\u3054\u63D0\u6848\u3057\u307E\u3059\u3002", size=8, color=MID_GRAY)
    y -= 8 * mm

    pricing_data = [
        ("\u6574\u3048\u308B", "\u696D\u52D9\u6574\u7406\u30FB\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0", [
            ("\u521D\u56DE\u76F8\u8AC7", "\u7121\u6599"),
            ("\u30B9\u30BF\u30F3\u30C0\u30FC\u30C9", "10\u4E07\u301C30\u4E07\u5186"),
            ("\u30D5\u30EB\u8A2D\u8A08", "50\u4E07\u301C100\u4E07\u5186"),
        ]),
        ("\u56DE\u3059", "\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u57FA\u76E4\uFF08B-Hall\uFF09", [
            ("Starter", "\u6708\u984D3\u4E07\u5186"),
            ("Standard", "\u6708\u984D5\u4E07\u301C10\u4E07\u5186"),
            ("Enterprise", "\u6708\u984D15\u4E07\u5186\u301C"),
        ]),
        ("\u4F5C\u308B", "\u30B7\u30B9\u30C6\u30E0\u958B\u767A\uFF08B-Core\uFF09", [
            ("\u5C0F\u898F\u6A21\u958B\u767A", "50\u4E07\u301C150\u4E07\u5186"),
            ("\u4E2D\u898F\u6A21\u958B\u767A", "200\u4E07\u301C500\u4E07\u5186"),
            ("\u5927\u898F\u6A21\u958B\u767A", "500\u4E07\u301C1500\u4E07\u5186"),
        ]),
        ("SUPPORT", "\u904B\u7528\u30B5\u30DD\u30FC\u30C8\u30FB\u4FDD\u5B88", [
            ("\u6708\u984D", "5\u4E07\u301C20\u4E07\u5186"),
        ]),
    ]

    for label, title, items in pricing_data:
        c.setFillColor(CYAN)
        c.setFont("HeiseiKakuGo-W5", 7)
        c.drawString(35 * mm, y, label)
        y -= 6 * mm
        c.setFillColor(NAVY)
        c.setFont("HeiseiMin-W3", 12)
        c.drawString(35 * mm, y, title)
        y -= 8 * mm
        for item_label, price in items:
            c.setFillColor(NAVY)
            c.setFont("HeiseiKakuGo-W5", 9)
            c.drawString(40 * mm, y, item_label)
            c.drawRightString(W - 40 * mm, y, price)
            # Dotted line
            c.setStrokeColor(BORDER)
            c.setDash(1, 2)
            c.setLineWidth(0.3)
            text_w = c.stringWidth(item_label, "HeiseiKakuGo-W5", 9)
            c.line(40 * mm + text_w + 3 * mm, y + 1 * mm,
                   W - 40 * mm - c.stringWidth(price, "HeiseiKakuGo-W5", 9) - 3 * mm, y + 1 * mm)
            c.setDash()
            y -= 7 * mm
        # Separator
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.5)
        c.line(35 * mm, y, W - 35 * mm, y)
        y -= 8 * mm

    draw_footer(c, 1)
    c.showPage()

    # Page 3: Notes + Contact
    draw_header(c, "\u6599\u91D1\u8CC7\u6599")
    y = H - 35 * mm
    y = draw_section_title(c, y, "NOTE", "\u88DC\u8DB3\u4E8B\u9805")
    y -= 3 * mm
    notes = [
        "\u672C\u30B5\u30FC\u30D3\u30B9\u306F\u5358\u767A\u3067\u306F\u306A\u304F\u3001\u300C\u6574\u7406 \u2192 \u904B\u7528 \u2192 \u958B\u767A\u300D\u307E\u3067\u4E00\u8CAB\u3057\u3066\u5BFE\u5FDC\u3057\u307E\u3059\u3002",
        "\u30B3\u30F3\u30B5\u30EB\u306E\u307F\u3001\u30B7\u30B9\u30C6\u30E0\u958B\u767A\u306E\u307F\u306E\u3054\u4F9D\u983C\u3082\u53EF\u80FD\u3067\u3059\u304C\u3001",
        "\u696D\u52D9\u6574\u7406\u304B\u3089\u306E\u5B9F\u65BD\u3092\u63A8\u5968\u3057\u3066\u3044\u307E\u3059\u3002",
        "\u6599\u91D1\u306F\u5185\u5BB9\u30FB\u898F\u6A21\u306B\u3088\u308A\u5909\u52D5\u3057\u307E\u3059\u3002\u8A73\u7D30\u306F\u500B\u5225\u898B\u7A4D\u3068\u306A\u308A\u307E\u3059\u3002",
        "\u521D\u56DE\u76F8\u8AC7\u306F\u7121\u6599\u3067\u3059\u3002",
    ]
    for note in notes:
        c.setFillColor(MID_GRAY)
        c.setFont("HeiseiKakuGo-W5", 8)
        c.drawString(38 * mm, y, f"\u2022  {note}")
        y -= 7 * mm

    y -= 15 * mm
    y = draw_contact(c, y)
    draw_footer(c, 2)
    c.showPage()

    c.save()
    print(f"Created: {path}")


# ============================================================
# 3. Case Studies
# ============================================================
def generate_case_studies():
    path = os.path.join(OUTPUT_DIR, "case-studies.pdf")
    c = canvas.Canvas(path, pagesize=A4)

    # Cover
    draw_cover(c, "\u5C0E\u5165\u4E8B\u4F8B\u8CC7\u6599", "Case Studies")
    c.showPage()

    cases = [
        {
            "client": "\u8A2A\u554F\u770B\u8B77\u4E8B\u696D\u8005",
            "industry": "\u533B\u7642\u30FB\u30D8\u30EB\u30B9\u30B1\u30A2",
            "challenge": "\u8A18\u9332\u3084\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB\u7BA1\u7406\u304CExcel\u3068\u7D19\u3067\u5C5E\u4EBA\u5316\u3057\u3001\n\u60C5\u5831\u5171\u6709\u306B\u6642\u9593\u304C\u304B\u304B\u3063\u3066\u3044\u305F",
            "support": "\u696D\u52D9\u30D5\u30ED\u30FC\u6574\u7406\uFF0BB-Hall\u306B\u3088\u308B\u4E00\u5143\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0\u5C0E\u5165",
            "result": "\u6708\u9593\u5DE5\u659030%\u524A\u6E1B\u3001\u60C5\u5831\u5171\u6709\u306E\u4E00\u5143\u5316\u3092\u5B9F\u73FE",
        },
        {
            "client": "\u30B9\u30BF\u30FC\u30C8\u30A2\u30C3\u30D7\u4F01\u696D",
            "industry": "IT\u30FB\u30C6\u30AF\u30CE\u30ED\u30B8\u30FC",
            "challenge": "\u6025\u6210\u9577\u306B\u4F34\u3044\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u696D\u52D9\u304C\u8FFD\u3044\u3064\u304B\u305A\u3001\n\u610F\u601D\u6C7A\u5B9A\u306B\u5FC5\u8981\u306A\u60C5\u5831\u304C\u5206\u6563\u3057\u3066\u3044\u305F",
            "support": "\u30D0\u30C3\u30AF\u30AA\u30D5\u30A3\u30B9\u5168\u4F53\u306E\u696D\u52D9\u68DA\u5378\u3057\u30FB\u30D5\u30ED\u30FC\u518D\u8A2D\u8A08\u30FB\u5F79\u5272\u6574\u7406",
            "result": "\u696D\u52D9\u306E\u53EF\u8996\u5316\u3068\u5F79\u5272\u6574\u7406\u306B\u3088\u308A\u610F\u601D\u6C7A\u5B9A\u901F\u5EA62\u500D\u306B\u5411\u4E0A",
        },
        {
            "client": "\u4ECB\u8B77\u4E8B\u696D\u8005",
            "industry": "\u798F\u7949\u30FB\u4ECB\u8B77",
            "challenge": "\u8907\u6570\u62E0\u70B9\u3067\u7BA1\u7406\u65B9\u6CD5\u304C\u30D0\u30E9\u30D0\u30E9\u3001\n\u5831\u544A\u30DF\u30B9\u3084\u78BA\u8A8D\u6F0F\u308C\u304C\u983B\u767A\u3057\u3066\u3044\u305F",
            "support": "\u7BA1\u7406\u4F53\u5236\u69CB\u7BC9\uFF0BB-Core\u958B\u767A\u306B\u3088\u308B\u7D71\u5408\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0",
            "result": "\u696D\u52D9\u306E\u6A19\u6E96\u5316\u3068\u30DF\u30B980%\u524A\u6E1B\u3092\u9054\u6210",
        },
    ]

    # Page 2-3: Cases
    page = 1
    for i, case in enumerate(cases):
        draw_header(c, "\u5C0E\u5165\u4E8B\u4F8B\u8CC7\u6599")
        y = H - 35 * mm

        # Case number
        c.setFillColor(CYAN)
        c.setFont("HeiseiKakuGo-W5", 8)
        c.drawString(35 * mm, y, f"CASE {i + 1}")
        y -= 8 * mm

        # Client + Industry
        c.setFillColor(NAVY)
        c.setFont("HeiseiMin-W3", 18)
        c.drawString(35 * mm, y, case["client"])
        y -= 7 * mm
        c.setFillColor(MID_GRAY)
        c.setFont("HeiseiKakuGo-W5", 8)
        c.drawString(35 * mm, y, case["industry"])
        y -= 15 * mm

        # Details
        details = [
            ("\u8AB2\u984C", case["challenge"]),
            ("\u652F\u63F4\u5185\u5BB9", case["support"]),
        ]
        for dlabel, dtext in details:
            c.setFillColor(MID_GRAY)
            c.setFont("HeiseiKakuGo-W5", 7)
            c.drawString(35 * mm, y, dlabel)
            y -= 6 * mm
            for line in dtext.split("\n"):
                c.setFillColor(NAVY)
                c.setFont("HeiseiKakuGo-W5", 9)
                c.drawString(35 * mm, y, line)
                y -= 6 * mm
            y -= 5 * mm

        # Result with accent
        c.setFillColor(CYAN)
        c.rect(33 * mm, y - 3 * mm, 2 * mm, 12 * mm, fill=1, stroke=0)
        c.setFillColor(MID_GRAY)
        c.setFont("HeiseiKakuGo-W5", 7)
        c.drawString(38 * mm, y + 5 * mm, "\u7D50\u679C")
        c.setFillColor(NAVY)
        c.setFont("HeiseiMin-W3", 12)
        c.drawString(38 * mm, y - 3 * mm, case["result"])

        if i == len(cases) - 1:
            y -= 30 * mm
            y = draw_contact(c, y)

        draw_footer(c, page)
        c.showPage()
        page += 1

    c.save()
    print(f"Created: {path}")


if __name__ == "__main__":
    generate_service_guide()
    generate_pricing_guide()
    generate_case_studies()
    print("All PDFs generated successfully!")
