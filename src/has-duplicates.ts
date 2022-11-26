function hasDuplicates(array: number[]): array is number[];
function hasDuplicates(array: string[]): array is string[];
function hasDuplicates(array: any[]): array is any[] {
  return new Set(array).size < array.length;
}

export default hasDuplicates;
