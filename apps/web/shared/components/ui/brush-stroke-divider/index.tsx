type BrushStrokeDividerProps = {
  className?: string;
};

export function BrushStrokeDivider({
  className = "text-white",
}: BrushStrokeDividerProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 overflow-hidden ${className}`}
    >
      {/* Nét cọ riêng cho mobile giúp chi tiết không bị ép ngang và mất hình dạng. */}
      <svg
        className="block h-24 w-[112%] -translate-x-[5%] md:hidden"
        preserveAspectRatio="none"
        viewBox="0 0 430 110"
      >
        <path
          d="M-8 75 C12 66 27 78 47 57 C65 39 82 70 103 62 C123 54 132 35 154 49 C176 64 190 42 213 55 C236 68 249 31 275 45 C297 57 311 72 334 50 C355 30 371 61 392 47 C410 35 425 48 438 36 L438 112 L-8 112 Z"
          fill="currentColor"
        />
        <path
          d="M-5 84 C20 72 42 77 65 65 M79 61 C98 52 119 61 137 51 M158 57 C179 47 196 53 216 61 M239 57 C257 43 275 44 294 54 M313 61 C332 49 349 46 369 53 M388 54 C407 43 420 45 437 39"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="9"
        />
        <path
          d="M13 61 L43 52 M69 48 L91 41 M118 48 L146 37 M180 48 L207 40 M247 39 L275 31 M305 50 L329 41 M358 42 L386 33 M405 38 L426 31"
          fill="none"
          opacity="0.68"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M31 43 L54 38 M99 39 L118 34 M163 38 L190 29 M222 43 L242 36 M281 31 L303 24 M339 38 L361 30 M396 29 L420 22"
          fill="none"
          opacity="0.4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>

      {/* Bản desktop có nhiều vệt khô và đầu cọ đứt để tạo mép sơn tự nhiên. */}
      <svg
        className="hidden h-36 w-[106%] -translate-x-[3%] md:block xl:h-40"
        preserveAspectRatio="none"
        viewBox="0 0 1440 180"
      >
        <path
          d="M-18 116 C28 99 72 124 116 91 C158 60 199 111 244 83 C288 56 326 105 374 75 C420 46 461 99 507 67 C551 38 594 91 642 72 C690 53 728 112 779 78 C827 46 872 93 918 64 C968 33 1007 102 1061 70 C1112 40 1154 96 1202 62 C1252 27 1297 87 1344 55 C1387 26 1425 62 1458 42 L1458 182 L-18 182 Z"
          fill="currentColor"
        />
        <path
          d="M-14 129 C33 112 78 125 122 106 M153 91 C194 76 226 98 268 85 M301 80 C345 65 390 92 432 72 M468 71 C510 55 551 77 593 64 M630 76 C673 60 716 84 757 75 M796 69 C839 51 881 78 923 65 M960 61 C1004 46 1047 81 1090 67 M1128 63 C1169 45 1212 73 1254 59 M1291 57 C1336 39 1380 62 1454 45"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="13"
        />
        <path
          d="M18 96 L86 78 M146 73 L210 57 M276 72 L337 53 M401 59 L467 41 M535 56 L598 38 M665 66 L731 47 M801 60 L865 42 M934 51 L998 32 M1066 58 L1129 39 M1197 48 L1262 28 M1326 43 L1394 25"
          fill="none"
          opacity="0.72"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <path
          d="M52 69 L106 55 M229 62 L276 50 M354 47 L407 33 M485 53 L532 39 M612 49 L662 34 M747 59 L793 45 M878 48 L929 34 M1006 43 L1057 28 M1134 48 L1183 32 M1261 38 L1313 23 M1364 31 L1415 18"
          fill="none"
          opacity="0.42"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
        <path
          d="M112 77 L143 70 M318 60 L345 53 M572 43 L603 35 M836 52 L866 44 M1084 46 L1114 37 M1308 34 L1341 25"
          fill="none"
          opacity="0.55"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="8"
        />
      </svg>
    </div>
  );
}
