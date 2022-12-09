# Sum of Digits

number -> numStr -> digitsArr -> reduce(String(digit) + sum)

# Alphabetical Numbers

# Multiply All Pairs

1. Create a nested .forEach() loop

# Sum of Sums

1. Transform the values
  Map across the array, tracking index and the calling array
    Take an ever increasing slice of the array and reduce it to a sum
2. Reduce the values
  Take the transformed arr and sum the values together.

# Leading Substrings

1. string => new array of characters.
2. #map the new array
  A. use the ___, currentIndex, and arr
  B. Return the #slice(0, currentIndex + 1) from arr, joined.

# Palindromic Substrings

1. Get substring array.
2. Filter out non-palindromic strings.
