export const ERROR_MESSAGES = {
  GENERIC: "Đã xảy ra lỗi. Vui lòng thử lại sau.",
  NETWORK: "Không thể kết nối tới máy chủ. Vui lòng kiểm tra đường truyền internet.",
  UNAUTHORIZED: "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.",
  FORBIDDEN: "Bạn không có quyền thực hiện thao tác này.",
  NOT_FOUND: "Không tìm thấy dữ liệu yêu cầu.",
  SERVER_ERROR: "Lỗi máy chủ nội bộ. Vui lòng liên hệ quản trị viên.",
  TIMEOUT: "Thao tác quá thời gian chờ. Vui lòng thử lại.",
  INVALID_CREDENTIALS: "Số điện thoại hoặc mật khẩu không đúng.",
  FETCH_FAILED: "Không thể tải dữ liệu.",
  SAVE_FAILED: "Lưu dữ liệu thất bại. Vui lòng thử lại.",
  DELETE_FAILED: "Xóa dữ liệu thất bại. Vui lòng thử lại.",
} as const;

export type ErrorMessageKey = keyof typeof ERROR_MESSAGES;
