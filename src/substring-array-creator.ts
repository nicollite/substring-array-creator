/** Options for substringArrayCreator function */
export interface SubstringArrayOptions {
  /** Indicates if spaces will appear in the substring array. Default true */
  considerSpaces?: boolean;
  /** Indicates if all letters will be in lower case. Default true */
  lowerCase?: boolean;
}

/**
 * Create an array with all possible substring of an string
 * @param string The string to create create the substring array
 * @param options Options that alter the beahavior of the returned array
 */
export function substringArrayCreator(
  string: string,
  options: SubstringArrayOptions = {}
): string[] {
  // Get and set default options
  const { considerSpaces = false, lowerCase = true } = options;

  let subStrings: string[] = [];
  const stringLen = string.length;
  // If the string length is 0 return a empty array
  if (stringLen === 0) return [];

  // Set the string to lowercase if the string will be in lower case
  if (lowerCase) string = string.toLowerCase();

  // If will not consider spaces remove it
  if (!considerSpaces) string = string.replace(/ /g, "");

  // Set the substrings length and iterate throw all this lengths
  for (let subStringLength = 1; subStringLength <= stringLen; subStringLength++) {
    // Set the array start position to get the substring
    for (let start = 0; start < stringLen; start++) {
      const end = start + subStringLength;
      // Break this loop when the start position puls the substring length is higher
      if (end > stringLen) break;

      // Push the substring
      subStrings.push(string.substring(start, end));
    }
  }

  // Return the substring removing the repeated and empty values
  return subStrings.filter((str, i) => subStrings.indexOf(str) === i && str !== "");
}
