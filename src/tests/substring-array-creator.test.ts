import { substringArrayCreator } from "../substring-array-creator";

/** Remove repeated values over a string */
const removeRepeatedValues = (strArr: string[]) => [...new Set(strArr).values()];

describe("should create a array with all possible substrings of a string", () => {
  const string = "Ab Cd";
  const expectedSubstringArr = [
    // 1 length
    "A",
    "b",
    " ",
    "C",
    "d",
    // 2 length
    "Ab",
    "b ",
    " C",
    "Cd",
    // 3 length
    "Ab ",
    "b C",
    " Cd",
    // 4 length
    "Ab C",
    "b Cd",
    // 5 length
    "Ab Cd",
  ];
  // Substring array without spaces
  const expectedSubstringArrWithoutSpaces = removeRepeatedValues(
    expectedSubstringArr.filter((str) => str !== " ").map((str) => str.replace(" ", ""))
  );

  it("The string shouldn't consider the spaces and not be just in lowercase", () => {
    // Filter the strings without spaces
    const expectedStringArrWithoutSpaces = removeRepeatedValues(expectedSubstringArrWithoutSpaces);
    const substringArr = substringArrayCreator(string, { considerSpaces: false, lowerCase: false });

    expectedStringArrWithoutSpaces.sort();
    substringArr.sort();

    expect(substringArr).toEqual(expectedStringArrWithoutSpaces);
  });

  it("should not consider spaces and be in lowercase", () => {
    // Filter the strings without spaces
    const expectedStringArrInLowerCaseWithoutSpaces = removeRepeatedValues(
      expectedSubstringArrWithoutSpaces.map((str) => str.toLocaleLowerCase())
    );
    const substringArr = substringArrayCreator(string, { considerSpaces: false, lowerCase: true });

    expectedStringArrInLowerCaseWithoutSpaces.sort();
    substringArr.sort();

    expect(substringArr).toEqual(expectedStringArrInLowerCaseWithoutSpaces);
  });

  it("should consider the spaces and not be just in lowercase", () => {
    // Filter the strings without spaces
    const expectedStringArrInLower = expectedSubstringArr.concat();
    const substringArr = substringArrayCreator(string, { considerSpaces: true, lowerCase: false });

    expectedStringArrInLower.sort();
    substringArr.sort();

    expect(substringArr).toEqual(expectedStringArrInLower);
  });

  it("should consider strings with spaces and be in lowercase", () => {
    const expectedStringArrInLowerCase = expectedSubstringArr.map((str) => str.toLowerCase());
    const substringArr = substringArrayCreator(string, { considerSpaces: true, lowerCase: true });

    expectedStringArrInLowerCase.sort();
    substringArr.sort();

    expect(substringArr).toEqual(expectedStringArrInLowerCase);
  });

  it("should return a empty array for a empty string", () => {
    expect(substringArrayCreator("")).toEqual([]);
  });
});
