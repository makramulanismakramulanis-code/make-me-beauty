/**
 * Pure business logic for Make Me Beauty Place demo
 */

export interface WeeklySchedule {
  [dayOfWeek: number]: {
    openHour: number; // 24-hour format (e.g., 9 for 9 AM)
    openMinute: number;
    closeHour: number; // 24-hour format (e.g., 19 for 7 PM)
    closeMinute: number;
    isClosed?: boolean;
  };
}

// Default schedule: Mon-Sat 9:00 AM - 7:00 PM, Sunday closed (placeholder to confirm with client)
export const DEFAULT_SCHEDULE: WeeklySchedule = {
  0: { openHour: 0, openMinute: 0, closeHour: 0, closeMinute: 0, isClosed: true }, // Sunday closed
  1: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Monday
  2: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Tuesday
  3: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Wednesday
  4: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Thursday
  5: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Friday
  6: { openHour: 9, openMinute: 0, closeHour: 19, closeMinute: 0 }, // Saturday
};

/**
 * Validates Nigerian telephone numbers
 * Accepts:
 * - Local formats: 07071095500, 08012345678 (11 digits starting with 0)
 * - International formats: +2347071095500, +234 707 109 5500, 2347071095500
 */
export function validateNigerianPhone(input: string): { isValid: boolean; normalized?: string; error?: string } {
  if (!input || !input.trim()) {
    return { isValid: false, error: 'Phone number is required.' };
  }

  // Remove spaces, hyphens, parentheses
  const cleaned = input.replace(/[\s\-\(\)]/g, '');

  // International format starting with +234 or 234 followed by 10 digits
  if (/^(\+234|234)[789][01]\d{8}$/.test(cleaned)) {
    const withoutPlus = cleaned.startsWith('+') ? cleaned.slice(1) : cleaned;
    return { isValid: true, normalized: withoutPlus };
  }

  // Local Nigerian format starting with 0 followed by 10 digits (e.g. 07071095500)
  if (/^0[789][01]\d{8}$/.test(cleaned)) {
    const normalized = '234' + cleaned.slice(1);
    return { isValid: true, normalized };
  }

  return {
    isValid: false,
    error: 'Please enter a valid Nigerian phone number (e.g., 0707 109 5500 or +234 707 109 5500).',
  };
}

/**
 * Calculates current business open/closed status given a date and weekly schedule
 */
export function getBusinessStatus(
  currentDate: Date,
  schedule: WeeklySchedule = DEFAULT_SCHEDULE
): { isOpen: boolean; statusText: string; detailText: string } {
  const day = currentDate.getDay();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const currentTotalMinutes = hours * 60 + minutes;

  const todaySchedule = schedule[day];

  if (!todaySchedule || todaySchedule.isClosed) {
    return {
      isOpen: false,
      statusText: 'Closed Today',
      detailText: 'Opens Monday at 9:00 AM (to confirm with client)',
    };
  }

  const openMinutes = todaySchedule.openHour * 60 + todaySchedule.openMinute;
  const closeMinutes = todaySchedule.closeHour * 60 + todaySchedule.closeMinute;

  if (currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes) {
    const closePeriod = todaySchedule.closeHour >= 12 ? 'PM' : 'AM';
    const displayHour = todaySchedule.closeHour > 12 ? todaySchedule.closeHour - 12 : todaySchedule.closeHour;
    const formattedMinutes = todaySchedule.closeMinute ? `:${todaySchedule.closeMinute.toString().padStart(2, '0')}` : '';
    return {
      isOpen: true,
      statusText: 'Open Now',
      detailText: `Closes at ${displayHour}${formattedMinutes} ${closePeriod}`,
    };
  } else {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      detailText: 'Opens tomorrow at 9:00 AM',
    };
  }
}

/**
 * Builds standard pre-filled WhatsApp deep link
 */
export function createWhatsAppBookingLink(
  whatsappNumber: string,
  serviceName?: string,
  clientName?: string,
  preferredDate?: string
): string {
  // Strip non-digits from number
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  let message = `Hello Make Me Beauty Place!`;

  if (serviceName) {
    message += ` I'd like to book an appointment for: ${serviceName}.`;
  } else {
    message += ` I'd like to book an appointment at your Surulere parlour.`;
  }

  if (clientName) {
    message += ` My name is ${clientName}.`;
  }

  if (preferredDate) {
    message += ` Preferred date: ${preferredDate}.`;
  }

  message += ` Please let me know your availability!`;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
