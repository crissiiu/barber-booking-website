/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("node:path");
const sharp = require("../node_modules/.pnpm/sharp@0.35.4_@types+node@20.19.43/node_modules/sharp");

const publicHome = path.join(__dirname, "..", "public", "home");

const banners = [
  {
    source: "hero-consultation-v2.jpg",
    desktop: "banner-consultation.jpg",
    mobile: "banner-consultation-mobile.jpg",
    eyebrow: "T\u01af V\u1ea4N C\u00c1 NH\u00c2N",
    title: [
      "KI\u1ec2U T\u00d3C H\u1ee2P B\u1ea0N",
      "KH\u00d4NG CH\u1ec8 H\u1ee2P",
      "XU H\u01af\u1edaNG",
    ],
    description: [
      "Chuy\u00ean vi\u00ean l\u1eafng nghe khu\u00f4n m\u1eb7t,",
      "th\u00f3i quen v\u00e0 phong c\u00e1ch c\u1ee7a b\u1ea1n.",
    ],
  },
  {
    source: "hero-haircut-v2.jpg",
    desktop: "banner-haircut.jpg",
    mobile: "banner-haircut-mobile.jpg",
    eyebrow: "K\u1ef8 THU\u1eacT CHU\u1ea8N BARBER",
    title: ["T\u1eeaNG \u0110\u01af\u1edcNG C\u1eaeT", "\u0110\u00daNG CH\u1ea4T RI\u00caNG"],
    description: [
      "K\u1ef9 thu\u1eadt chu\u1ea9n x\u00e1c, d\u1ee5ng c\u1ee5 s\u1ea1ch,",
      "ho\u00e0n thi\u1ec7n t\u1eebng chi ti\u1ebft.",
    ],
  },
  {
    source: "hero-promotion-v2.jpg",
    desktop: "banner-promotion.jpg",
    mobile: "banner-promotion-mobile.jpg",
    eyebrow: "\u01afU \u0110\u00c3I \u0110\u1eb6C BI\u1ec6T",
    title: [
      "\u0110\u1eb6T L\u1ecaCH H\u00d4M NAY",
      "NH\u1eacN QU\u00c0 PHONG C\u00c1CH",
    ],
    description: [
      "Qu\u00e0 grooming tuy\u1ec3n ch\u1ecdn",
      "d\u00e0nh ri\u00eang cho kh\u00e1ch h\u00e0ng SiuBarber.",
    ],
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function tspans(lines, x, y, lineHeight) {
  return lines
    .map((line, index) => {
      const dy = index === 0 ? y : lineHeight;
      return `<tspan x="${x}" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join("");
}

function overlaySvg({ banner, width, height, mobile = false }) {
  const x = mobile ? 56 : 116;
  const eyebrowY = mobile ? 94 : 156;
  const titleStart = mobile ? 158 : 244;
  const titleSize = mobile ? 44 : 74;
  const titleLine = mobile ? 52 : 82;
  const descStart = titleStart + banner.title.length * titleLine + (mobile ? 42 : 54);
  const descSize = mobile ? 23 : 31;
  const descLine = mobile ? 34 : 42;
  const gradientStop = mobile ? "74%" : "58%";

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="panel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#07162f" stop-opacity="0.98"/>
          <stop offset="${gradientStop}" stop-color="#07162f" stop-opacity="${mobile ? "0.84" : "0.64"}"/>
          <stop offset="100%" stop-color="#07162f" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#panel)"/>
      <rect x="${x}" y="${eyebrowY - 38}" width="${mobile ? 78 : 104}" height="${mobile ? 8 : 10}" fill="#d9a441"/>
      <text x="${x}" y="${eyebrowY}" fill="#d9a441" font-family="Arial, Helvetica, sans-serif" font-size="${mobile ? 23 : 34}" font-weight="800" letter-spacing="2">
        ${escapeXml(banner.eyebrow)}
      </text>
      <text x="${x}" y="0" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="900" letter-spacing="-1">
        ${tspans(banner.title, x, titleStart, titleLine)}
      </text>
      <text x="${x}" y="0" fill="#e9f1ff" font-family="Arial, Helvetica, sans-serif" font-size="${descSize}" font-weight="500">
        ${tspans(banner.description, x, descStart, descLine)}
      </text>
    </svg>`;
}

async function createDesktopBanner(banner) {
  const width = 1908;
  const height = 824;
  const overlay = Buffer.from(overlaySvg({ banner, width, height }));

  await sharp(path.join(publicHome, banner.source))
    .resize(width, height, { fit: "cover", position: "center" })
    .composite([{ input: overlay }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(publicHome, banner.desktop));
}

async function createMobileBanner(banner) {
  const width = 900;
  const height = 640;
  const overlay = Buffer.from(overlaySvg({ banner, width, height, mobile: true }));

  await sharp(path.join(publicHome, banner.source))
    .resize(width, height, { fit: "cover", position: "right" })
    .composite([{ input: overlay }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(publicHome, banner.mobile));
}

async function main() {
  for (const banner of banners) {
    await createDesktopBanner(banner);
    await createMobileBanner(banner);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
