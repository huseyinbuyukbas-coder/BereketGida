/**
 * Utility to calculate store status based on Istanbul time (UTC+3)
 */
export function getStoreStatus(): {
  isOpen: boolean;
  statusText: string;
  isDeliveryActive: boolean;
  deliveryStatusText: string;
} {
  try {
    // Get current time in Europe/Istanbul
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Istanbul',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    
    const parts = formatter.formatToParts(now);
    const hourPart = parts.find((p) => p.type === 'hour');
    const minutePart = parts.find((p) => p.type === 'minute');
    
    const hours = hourPart ? parseInt(hourPart.value, 10) : now.getHours();
    const minutes = minutePart ? parseInt(minutePart.value, 10) : now.getMinutes();
    const currentDecimal = hours + minutes / 60;

    // Store is open from 07:30 to 01:30 next morning
    // That means it's closed between 01:30 and 07:30
    const isOpen = !(currentDecimal >= 1.5 && currentDecimal < 7.5);
    
    // Delivery is active from 10:00 to 22:00
    const isDeliveryActive = currentDecimal >= 10 && currentDecimal < 22;

    return {
      isOpen,
      statusText: isOpen ? "Şu an Açık (01:30'a kadar)" : 'Şu an Kapalı (07:30\'da açılır)',
      isDeliveryActive,
      deliveryStatusText: isDeliveryActive ? 'Paket Servis Aktif' : 'Paket Servis 10:00 - 22:00',
    };
  } catch (e) {
    return {
      isOpen: true,
      statusText: "Her gün 01:30'a kadar açık",
      isDeliveryActive: true,
      deliveryStatusText: '10:00 – 22:00 Paket Servis',
    };
  }
}
