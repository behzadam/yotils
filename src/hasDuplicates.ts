
function hasDuplicates(array: number[]): boolean;
function hasDuplicates(array: string[]): boolean;
function hasDuplicates(array: any[]): boolean {
  return new Set(array).size < array.length;
}

export default hasDuplicates