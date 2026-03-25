// Owner's WhatsApp number — update this if it changes
export const OWNER_WHATSAPP = '919876543210' // Format: country code + number, no + or spaces

/**
 * Opens WhatsApp with a pre-filled availability message.
 * @param {string} message - The enquiry message to pre-fill
 */
export function openWhatsApp(message) {
    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${encoded}`, '_blank')
}

/**
 * Pre-built message for a specific room enquiry
 */
export function roomAvailabilityMessage(roomName, price, capacity) {
    return `Hi! I'm interested in the *${roomName}* cabin (${capacity} · ${price}/night) at Beasho Cabin, Gokarna.\n\nCould you please let me know the availability? I'd love to plan a stay. 🌊`
}

/**
 * General availability enquiry (from hero / CTA buttons)
 */
export const generalAvailabilityMessage =
    `Hi! I came across Beasho Cabin, Gokarna and I'm interested in booking a stay.\n\nCould you please let me know the room availability and pricing? 🏡`
