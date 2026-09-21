import { Banknote, CreditCard, PlayCircle, ThumbsUp, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { appConfig } from "@/configs/app.config";

const paymentItems = [
  { icon: Banknote, label: "Cash" },
  { icon: WalletCards, label: "Chuyển khoản" },
  { icon: CreditCard, label: "Quẹt thẻ" },
  { icon: CreditCard, label: "Visa" },
  { icon: CreditCard, label: "Mastercard" },
];

export function HomeFooter() {
  return (
    <footer className="bg-primary-dark px-4 pb-5 pt-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Image
            alt="SiuBarber"
            className="h-auto w-48"
            height={64}
            src="/brand/siubarber-logo-white.svg"
            width={220}
          />
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
            Chỉn chu từng lịch hẹn, nâng tầm từng phong cách.
          </p>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-extrabold">SiuBarber</h3>
            <div className="mt-4 grid gap-3 text-sm text-blue-100">
              <Link href="/about">Về chúng tôi</Link>
              <Link href="/shop">SiuBarber Shop</Link>
              <Link href="/academy">Học cắt tóc</Link>
              <Link href="/locations">Tìm SiuBarber gần nhất</Link>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">Liên hệ</h3>
            <div className="mt-4 grid gap-3 text-sm text-blue-100">
              <span>Hotline: {appConfig.contact.phone}</span>
              <span>Liên hệ học cắt tóc</span>
              <span>Liên hệ nhượng quyền</span>
              <span>Liên hệ quảng cáo</span>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">Thông tin</h3>
            <div className="mt-4 grid gap-3 text-sm text-blue-100">
              <span>{appConfig.contact.hours}</span>
              <Link href="/privacy">Chính sách bảo mật</Link>
              <Link href="/terms">Điều kiện giao dịch chung</Link>
              <Link href="/license">Giấy phép giáo dục nghề nghiệp</Link>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold">Cộng đồng</h3>
            <div className="mt-4 grid gap-3 text-sm text-blue-100">
              <span className="inline-flex items-center gap-2">
                <PlayCircle aria-hidden size={18} /> YouTube: 28K đăng ký
              </span>
              <span className="inline-flex items-center gap-2">
                <ThumbsUp aria-hidden size={18} /> Facebook: 72K follow
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {paymentItems.map((item) => {
                const Icon = item.icon;

                return (
                  <span
                    className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-2 text-xs font-semibold text-white"
                    key={item.label}
                  >
                    <Icon aria-hidden size={14} />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="siu-soft-card-dark mt-10 rounded-lg p-5 text-center text-xs leading-6 text-blue-100">
          © 2026 SiuBarber. Giấy phép kinh doanh số 0312345678, cấp ngày
          14/09/2026. Địa chỉ: {appConfig.contact.address}.
        </div>
      </div>
    </footer>
  );
}
