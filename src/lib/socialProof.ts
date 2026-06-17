/**
 * Whether to display simulated customer activity.
 *
 * Two features in this store invent customer behaviour:
 *
 *   - `PurchaseNotifications` picks a name from a hardcoded list every 6–12
 *     seconds and shows "Hiba M. — just looking at Men Pocket Square, 30 secs
 *     ago".
 *   - The header rating ticker cycles invented reviewer names with a rating of
 *     `4 + Math.random()`.
 *
 * No real customer is behind either. Presenting invented activity as real is a
 * dark pattern, and in several jurisdictions it is also unlawful: the UK's
 * Digital Markets, Competition and Consumers Act 2024 prohibits fake consumer
 * reviews and misleading urgency claims, and the EU's Unfair Commercial
 * Practices Directive covers the same ground.
 *
 * The features have not been removed — that is the owner's call — but they are
 * off unless explicitly switched on, so the default build does not ship
 * fabricated social proof.
 */
export const SHOW_SIMULATED_ACTIVITY =
  process.env.NEXT_PUBLIC_SHOW_SIMULATED_ACTIVITY === "true";
