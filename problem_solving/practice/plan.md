# Comparing Version Numbers

input:  2 strings
output: integer (either -1, 0, or 1)

**Rules**
1. If version1 > version2, we should return 1.
2. If version1 < version2, we should return -1.
3. If version1 === version2, we should return 0.
4. If either version number contains characters other than digits and the . character, we should return null.
5. Version numbers are compared based from left to right as integers. The first time one is bigger than the other, we can determine which is larger.
6. Blank spaces are assumed to be '0'.

**Algorithm**
1. Create arrays that separated each version number at the periods.
2. Compare each array's elements (helper function). The first time one is greater than the other, return the appropriate value.
3. Assume `undefined` elements are `0`.


# Clean Phone Numbers

Input:  String (with any chars)
Output: Cleaned String (10 digit string of digits)

**Rules**

1. If the phone number is less than 10 digits, assume that it is a bad number.
2. If the phone number is 10 digits, assume that it is good.
3. If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
4. If the phone number is 11 digits and the first number is not 1, then it is a bad number.
5. If the phone number is more than 11 digits, assume that it is a bad number.
6. For bad numbers, just return a string of 10 0's.

**Algorithm**

1. Pull the digits from the starting string, each as a string, and put them into an array.
2. Check if it is a bad number. If so, return '0000000000'.
    A. Bad if:
        a. length > 11
        b. length < 10
        c. length === 11 && digits[0] !== '1'
2. Return the last 10 digits as a single string.
    A. Reverse, slice 10, reverse, join


# Short Hand Numbers




# Rail Fence Cipher

**Rules**
1. When 25 character message:
    Top: 7 chars
    Mid: 12 chars
    Bot: 6 chars

**Mental Model**
Taking this literally, doing it like humans do it:
Both during encoding and decoding, we can create an array table (nested arrays).
During encoding, we place characters in the message string between arrays, filling spaces with `null`. Then we collapse the arrays, one after the other (filtering) and join them all together.
During decoding, we do the same thing, but instead of adding to the arrays in sequence, we fill out each array one-at-a-time. 

**Algorithm**
1. Split up word into array of characters.
2. Sort letters into arrays.
3. Collapse arrays.
4. Merge arrays and join into new string.
