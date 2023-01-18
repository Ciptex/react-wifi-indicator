import type { SignalStrength } from "./SignalStrength";

/**
 * dBm is a negative number where:
 * -30 dBm is the maximum achievable signal strength. Heuristic show -42 is still an amazing, but realistic signal strength.
 * -90 dBm is unusable and approaching or drowning in the noise floor. Any functionality is highly unlikely.
 */
export const DBMToSignalStrength = (dBm: string | number): SignalStrength => {
	if ((typeof dBm !== "string" && typeof dBm !== "number") || dBm === "") {
		return "DISCONNECTED";
	}

	const num: number = Number.isFinite(dBm) ? Number(dBm) : Number(dBm);

	if (num >= -46) {
		return "EXCELLENT";
	}
	if (num >= -60) {
		return "GREAT";
	}
	if (num >= -72) {
		return "OKAY";
	}
	if (num >= -80) {
		return "WEAK";
	}
	if (num >= -90) {
		return "UNUSABLE";
	}
	return "DISCONNECTED";
};
