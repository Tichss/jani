export function mapValue(
	input: number,
	fromMin: number,
	fromMax: number,
	toMin: number,
	toMax: number
): number {
	if (input <= fromMin) return toMin;
	if (input >= fromMax) return toMax;

	return toMin + ((input - fromMin) / (fromMax - fromMin)) * (toMax - toMin);
}
