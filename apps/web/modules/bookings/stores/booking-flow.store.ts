import { create } from "zustand";

export type BookingFlowState = {
  serviceId?: string;
  barberId?: string;
  date?: string;
  timeSlot?: string;
  customerNote?: string;
  setServiceId: (serviceId: string) => void;
  setBarberId: (barberId: string) => void;
  setDate: (date: string) => void;
  setTimeSlot: (timeSlot: string) => void;
  setCustomerNote: (customerNote: string) => void;
  reset: () => void;
};

export const useBookingFlowStore = create<BookingFlowState>((set) => ({
  setServiceId: (serviceId) => set({ serviceId }),
  setBarberId: (barberId) => set({ barberId }),
  setDate: (date) => set({ date }),
  setTimeSlot: (timeSlot) => set({ timeSlot }),
  setCustomerNote: (customerNote) => set({ customerNote }),
  reset: () =>
    set({
      serviceId: undefined,
      barberId: undefined,
      date: undefined,
      timeSlot: undefined,
      customerNote: undefined,
    }),
}));
